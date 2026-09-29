const GUESTBOOK_SHEET_NAME = "Guestbook";
const RSVP_SHEET_NAME = "RSVP";

function doPost(event) {
  const payload = JSON.parse(event.postData.contents || "{}");

  if (payload.type === "guestbook") {
    appendGuestbookMessage(payload);
  }

  if (payload.type === "rsvp") {
    upsertRsvpResponse(payload);
  }

  return jsonResponse({ ok: true });
}

function doGet(event) {
  const action = event.parameter.action;
  const callback = event.parameter.callback;

  if (action === "guestbook") {
    const messages = getGuestbookMessages();
    if (callback) {
      return jsonpResponse(callback, messages);
    }
    return jsonResponse(messages);
  }

  return jsonResponse({ ok: true });
}

function appendGuestbookMessage(payload) {
  const sheet = getOrCreateSheet(GUESTBOOK_SHEET_NAME);
  ensureGuestbookHeader(sheet);

  sheet.appendRow([
    payload.submittedAt || new Date().toISOString(),
    payload.guestId || "",
    payload.name || "",
    payload.message || ""
  ]);
}

function upsertRsvpResponse(payload) {
  const sheet = getOrCreateSheet(RSVP_SHEET_NAME);
  ensureRsvpHeader(sheet);

  const row = [
    payload.submittedAt || new Date().toISOString(),
    payload.guestId || "",
    payload.name || "",
    payload.group || "",
    payload.groupLabel || "",
    payload.attend || "",
    Number(payload.guests || 0),
    payload.phone || ""
  ];
  const existingRow = findRsvpRowByGuestId(sheet, payload.guestId);

  if (existingRow) {
    sheet.getRange(existingRow, 1, 1, row.length).setValues([row]);
    return;
  }

  sheet.appendRow(row);
}

function findRsvpRowByGuestId(sheet, guestId) {
  if (!guestId || sheet.getLastRow() < 2) return null;

  const guestIds = sheet.getRange(2, 2, sheet.getLastRow() - 1, 1).getValues();
  const targetGuestId = String(guestId);
  const index = guestIds.findIndex((row) => String(row[0]) === targetGuestId);
  return index >= 0 ? index + 2 : null;
}

function getGuestbookMessages() {
  const sheet = getOrCreateSheet(GUESTBOOK_SHEET_NAME);
  ensureGuestbookHeader(sheet);

  const values = sheet.getDataRange().getValues();
  return values.slice(1)
    .filter((row) => row[2] && row[3])
    .map((row) => ({
      submittedAt: row[0] instanceof Date ? row[0].toISOString() : String(row[0] || ""),
      guestId: String(row[1] || ""),
      name: String(row[2] || ""),
      message: String(row[3] || "")
    }));
}

function getOrCreateSheet(name) {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  return spreadsheet.getSheetByName(name) || spreadsheet.insertSheet(name);
}

function ensureGuestbookHeader(sheet) {
  if (sheet.getLastRow() > 0) return;
  sheet.appendRow(["submittedAt", "guestId", "name", "message"]);
}

function ensureRsvpHeader(sheet) {
  if (sheet.getLastRow() > 0) return;
  sheet.appendRow(["submittedAt", "guestId", "name", "group", "groupLabel", "attend", "guests", "phone"]);
}

function jsonResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

function jsonpResponse(callback, data) {
  const safeCallback = /^[A-Za-z_$][\w$]*(\.[A-Za-z_$][\w$]*)*$/.test(callback)
    ? callback
    : "callback";

  return ContentService
    .createTextOutput(`${safeCallback}(${JSON.stringify(data)});`)
    .setMimeType(ContentService.MimeType.JAVASCRIPT);
}
