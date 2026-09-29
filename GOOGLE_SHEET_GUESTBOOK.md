# Google Sheet RSVP And Guestbook Setup

This site can save RSVP responses and display guestbook wishes from a Google Sheet through Google Apps Script.

## 1. Create The Sheet

1. Open Google Sheets.
2. Create a new spreadsheet, for example `Wedding Guestbook`.
3. Open `Extensions` > `Apps Script`.

## 2. Add The Apps Script

1. Delete the default code in `Code.gs`.
2. Copy all code from `google-apps-script-guestbook.gs` in this repo.
3. Paste it into `Code.gs`.
4. Save the project.

The script will automatically create these sheet tabs.

`Guestbook`:

```text
submittedAt | guestId | name | message
```

`RSVP`:

```text
submittedAt | guestId | name | group | groupLabel | attend | guests | phone
```

## 3. Deploy As Web App

1. Click `Deploy` > `New deployment`.
2. Click the gear icon and choose `Web app`.
3. Set:
   - `Execute as`: `Me`
   - `Who has access`: `Anyone`
4. Click `Deploy`.
5. Authorize the script.
6. Copy the Web App URL. It should look like:

```text
https://script.google.com/macros/s/AKfycb.../exec
```

## 4. Connect The Site

Open `script.js` and paste the Web App URL here:

```js
const wedding = {
  rsvpEndpoint: "https://script.google.com/macros/s/AKfycb.../exec",
  guestbookEndpoint: "https://script.google.com/macros/s/AKfycb.../exec",
  groups: {
```

Then commit and push:

```sh
git add script.js
git commit -m "Connect guestbook to Google Sheet"
git push
```

## 5. How It Works

- When a guest confirms RSVP, the response is posted to the `RSVP` tab.
- When a guest submits a wish, the site immediately shows it on the invitation.
- The wish is also posted to the `Guestbook` tab through Apps Script.
- When the invitation loads, it reads shared wishes from Google Sheet using JSONP so it works on GitHub Pages without CORS issues.

## 6. Test Link

After deployment, open a personalized invitation link and submit a wish:

```text
https://daotuanan.github.io/our-wedding-ha-an/?id=NT001&to=Anh%20Ch%E1%BB%8B%20B%C3%AAn%20N%E1%BB%99i&type=nha-trai
```

Then check the `Guestbook` tab in the Google Sheet.
