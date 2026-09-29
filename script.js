const wedding = {
  rsvpEndpoint: "",
  guestbookEndpoint: "",
  groups: {
    "nha-gai": {
      label: "Nhà gái",
      greeting: "Quý khách mời nhà gái",
      subtitle: "Đến dự bữa tiệc chung vui cùng gia đình chúng tôi tại Gia Lai.",
      copy: "Hôn lễ được cử hành vào lúc 08:00, Thứ Hai 26.10.2026.",
      countdownTitle: "Lễ Vu Quy tại Gia Lai",
      countdownTarget: "2026-10-26T08:00:00+07:00"
    },
    "nha-trai": {
      label: "Nhà trai",
      greeting: "Quý khách mời nhà trai",
      subtitle: "Đến dự bữa tiệc chung vui cùng gia đình chúng tôi tại TP. Hồ Chí Minh.",
      copy: "Hôn lễ được cử hành vào lúc 09:00, Thứ Sáu 30.10.2026.",
      countdownTitle: "Lễ Tân Hôn tại TP. Hồ Chí Minh",
      countdownTarget: "2026-10-30T09:00:00+07:00"
    },
    both: {
      label: "Hai gia đình",
      greeting: "Quý khách",
      subtitle: "Đến dự bữa tiệc chung vui cùng hai gia đình chúng tôi.",
      copy: "Sự hiện diện của Quý khách là niềm vinh hạnh cho hai gia đình.",
      countdownTitle: "Ngày vui đầu tiên tại Gia Lai",
      countdownTarget: "2026-10-26T08:00:00+07:00"
    }
  },
  events: [
    {
      group: "nha-gai",
      time: "08:00-09:00, Thứ Hai 26/10/2026",
      title: "Lễ Đính Hôn & Vu Quy",
      description: "Nghi lễ gia tiên tại tư gia cô dâu."
    },
    {
      group: "nha-gai",
      time: "11:00-12:00, Thứ Hai 26/10/2026",
      title: "Tiệc Vu Quy",
      description: "Tiệc mừng tại tư gia cô dâu."
    },
    {
      group: "nha-trai",
      time: "09:00, Thứ Sáu 30/10/2026",
      title: "Lễ Tân Hôn",
      description: "Nghi lễ gia tiên tại tư gia chú rể."
    },
    {
      group: "nha-trai",
      time: "17:30 đón khách, 19:00 khai tiệc, Thứ Sáu 30/10/2026",
      title: "Tiệc Cưới",
      description: "Sảnh Tình Yêu - Nhà hàng Cưới Nam Bộ."
    }
  ],
  locations: [
    {
      group: "nha-gai",
      title: "Tư gia cô dâu",
      address: "Thôn Tân Lập, xã K'Dang, tỉnh Gia Lai",
      mapQuery: "Thôn Tân Lập, xã K'Dang, tỉnh Gia Lai",
      map: "https://maps.app.goo.gl/XVBLExx425U4GgYa7",
      qr: "assets/qr_nha_gai.png"
    },
    {
      group: "nha-trai",
      title: "Tư gia chú rể",
      address: "13/5 Nguyễn Văn Yến, phường Phú Thạnh, TP. Hồ Chí Minh",
      mapQuery: "13/5 Nguyễn Văn Yến, phường Phú Thạnh, TP. Hồ Chí Minh",
      map: "https://maps.app.goo.gl/9Eqx5mkL876KupAy7",
      qr: "assets/qr_nha_trai.png"
    },
    {
      group: "nha-trai",
      title: "Sảnh Tình Yêu",
      address: "Nhà hàng Cưới Nam Bộ, 615A Âu Cơ, phường Tân Phú, TP. Hồ Chí Minh",
      mapQuery: "Nhà hàng Cưới Nam Bộ 615A Âu Cơ phường Tân Phú TP. Hồ Chí Minh",
      map: "https://maps.app.goo.gl/11QG3p5N6a3PNHxc9",
      qr: "assets/qr_nha_trai_le.png"
    }
  ],
  gifts: [
    {
      group: "nha-gai",
      title: "Hộp quà nhà gái",
      owner: "Hà",
      bank: "Vietcombank",
      accountName: "Dao Thi Thu Ha",
      account: "0071001001311",
      qr: "BankAccount/CD_bank_account.JPG",
      note: "Lời chúc gửi đến cô dâu và gia đình nhà gái."
    },
    {
      group: "nha-trai",
      title: "Hộp quà nhà trai",
      owner: "An",
      bank: "Vietcombank",
      accountName: "Dao Thi Thu Ha",
      account: "0071001001311",
      qr: "BankAccount/CD_bank_account.JPG",
      note: "Lời chúc gửi đến chú rể và gia đình nhà trai."
    }
  ]
};

const calendarEvents = {
  "nha-gai": {
    primary: {
      text: "Lễ Vu Quy Hà & An",
      start: "20261026T010000Z",
      end: "20261026T020000Z",
      location: "Thôn Tân Lập, xã K'Dang, tỉnh Gia Lai",
      details: "Lễ Đính Hôn & Vu Quy của Hà và An."
    },
    secondary: {
      text: "Tiệc Vu Quy Hà & An",
      start: "20261026T040000Z",
      end: "20261026T050000Z",
      location: "Thôn Tân Lập, xã K'Dang, tỉnh Gia Lai",
      details: "Tiệc Vu Quy tại tư gia cô dâu."
    }
  },
  "nha-trai": {
    primary: {
      text: "Lễ Tân Hôn Hà & An",
      start: "20261030T020000Z",
      end: "20261030T030000Z",
      location: "13/5 Nguyễn Văn Yến, phường Phú Thạnh, TP. Hồ Chí Minh",
      details: "Lễ Tân Hôn tại tư gia chú rể."
    },
    secondary: {
      text: "Tiệc cưới Hà & An",
      start: "20261030T123000Z",
      end: "20261030T143000Z",
      location: "Sảnh Tình Yêu - Nhà hàng Cưới Nam Bộ, 615A Âu Cơ, TP. Hồ Chí Minh",
      details: "Đón khách 17:30, khai tiệc 19:00."
    }
  }
};

const params = new URLSearchParams(window.location.search);
const guestName = params.get("to")?.trim() || "Quý khách";
const guestId = params.get("id")?.trim() || "";
let currentGroup = wedding.groups[params.get("type")] ? params.get("type") : "both";
let countdownTimer;
let galleryIndex = 0;
let galleryDirection = 1;
let galleryTimer;
let remoteGuestbookMessages = [];
const galleryIntervalMs = 2000;

const weddingDates = {
  "nha-gai": [
    {
      place: "Gia Lai",
      date: "26.10.2026",
      day: "26",
      month: "10",
      year: "2026",
      weekday: "Thứ Hai",
      lunar: "17.09 năm Bính Ngọ",
      title: "Lễ Vu Quy"
    }
  ],
  "nha-trai": [
    {
      place: "TP. Hồ Chí Minh",
      date: "30.10.2026",
      day: "30",
      month: "10",
      year: "2026",
      weekday: "Thứ Sáu",
      lunar: "21.09 năm Bính Ngọ",
      title: "Lễ Tân Hôn"
    }
  ]
};

weddingDates.both = [...weddingDates["nha-gai"], ...weddingDates["nha-trai"]];

const elements = {
  cover: document.getElementById("cover"),
  openInvitation: document.getElementById("openInvitation"),
  coverGuest: document.getElementById("coverGuest"),
  heroSubtitle: document.getElementById("heroSubtitle"),
  guestGreeting: document.getElementById("guestGreeting"),
  invitationCopy: document.getElementById("invitationCopy"),
  countdownTitle: document.getElementById("countdownTitle"),
  weddingCalendar: document.getElementById("weddingCalendar"),
  galleryGrid: document.getElementById("galleryGrid"),
  galleryPrev: document.getElementById("galleryPrev"),
  galleryNext: document.getElementById("galleryNext"),
  galleryCounter: document.getElementById("galleryCounter"),
  timeline: document.getElementById("timeline"),
  locationGrid: document.getElementById("locationGrid"),
  giftGrid: document.getElementById("giftGrid"),
  heroDates: document.getElementById("heroDates"),
  showRsvpForm: document.getElementById("showRsvpForm"),
  rsvpForm: document.getElementById("rsvpForm"),
  rsvpName: document.getElementById("rsvpName"),
  rsvpTitle: document.getElementById("rsvpTitle"),
  rsvpGroup: document.getElementById("rsvpGroup"),
  rsvpAttend: document.getElementById("rsvpAttend"),
  rsvpGuests: document.getElementById("rsvpGuests"),
  rsvpPhone: document.getElementById("rsvpPhone"),
  rsvpStatus: document.getElementById("rsvpStatus"),
  showGuestbookForm: document.getElementById("showGuestbookForm"),
  guestbookForm: document.getElementById("guestbookForm"),
  guestbookName: document.getElementById("guestbookName"),
  guestbookMessage: document.getElementById("guestbookMessage"),
  guestbookList: document.getElementById("guestbookList"),
  guestbookStatus: document.getElementById("guestbookStatus"),
  calendarPrimary: document.getElementById("calendarPrimary"),
  calendarSecondary: document.getElementById("calendarSecondary"),
  musicToggle: document.getElementById("musicToggle"),
  bgMusic: document.getElementById("bgMusic")
};

function eventMatchesGroup(item) {
  return currentGroup === "both" || item.group === currentGroup;
}

function setText() {
  const group = wedding.groups[currentGroup];
  elements.coverGuest.textContent = guestName;
  elements.heroSubtitle.textContent = group.subtitle.replace("Quý khách", guestName);
  elements.guestGreeting.textContent = guestName;
  elements.invitationCopy.textContent = group.copy.replace("Quý khách", guestName);
  elements.countdownTitle.textContent = group.countdownTitle;
  elements.rsvpTitle.textContent = `Hẹn gặp ${guestName}`;
  elements.rsvpName.value = guestName;
  elements.rsvpGroup.value = currentGroup;
  elements.guestbookName.value = guestName;
  document.title = `Thiệp cưới Hà & An - ${guestName}`;
}

function renderTimeline() {
  elements.timeline.innerHTML = wedding.events
    .filter(eventMatchesGroup)
    .map((event) => `
      <article class="event-card">
        <time>${event.time}</time>
        <h3>${event.title}</h3>
        <p>${event.description}</p>
      </article>
    `)
    .join("");
}

function renderLocations() {
  elements.locationGrid.innerHTML = wedding.locations
    .filter(eventMatchesGroup)
    .map((location) => `
      <article class="location-card">
        <h3>${location.title}</h3>
        <p>${location.address}</p>
        <div class="location-card__media">
          <img src="${location.qr}" alt="QR chỉ đường đến ${location.title}" />
          <iframe title="Bản đồ ${location.title}" src="https://www.google.com/maps?q=${encodeURIComponent(location.mapQuery)}&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <a href="${location.map}" target="_blank" rel="noreferrer">Mở Google Maps</a>
      </article>
    `)
    .join("");
}

function renderGifts() {
  elements.giftGrid.innerHTML = wedding.gifts
    .filter(eventMatchesGroup)
    .map((gift) => `
      <article class="gift-card">
        <p class="gift-card__title">${gift.title}</p>
        <button class="gift-card__qr" type="button" data-gift-toggle aria-expanded="false">
          <span>囍</span>
          ${gift.qr ? `<img src="${gift.qr}" alt="QR tài khoản ${gift.owner}" hidden />` : ""}
        </button>
        ${gift.qr ? `<small class="gift-card__hint" data-gift-hint>Bấm vào chữ Hỷ để hiện mã QR</small>` : ""}
        <div class="gift-card__details" data-gift-details ${gift.qr ? "hidden" : ""}>
          ${gift.bank || gift.accountName || gift.account ? `
            <dl>
              ${gift.bank ? `<div><dt>Ngân hàng</dt><dd>${gift.bank}</dd></div>` : ""}
              ${gift.accountName ? `<div><dt>Tên chủ tài khoản</dt><dd>${gift.accountName}</dd></div>` : ""}
              ${gift.account ? `<div><dt>Số tài khoản</dt><dd>${gift.account}</dd></div>` : ""}
            </dl>
          ` : ""}
          <p>${gift.note}</p>
        </div>
      </article>
    `)
    .join("");

  elements.giftGrid.querySelectorAll("[data-gift-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const qrImage = button.querySelector("img");
      if (!qrImage) return;
      const willShow = qrImage.hidden;
      qrImage.hidden = !willShow;
      button.querySelector("span").hidden = willShow;
      button.setAttribute("aria-expanded", String(willShow));
      const details = button.parentElement.querySelector("[data-gift-details]");
      if (details) {
        details.hidden = !willShow;
      }
      const hint = button.parentElement.querySelector("[data-gift-hint]");
      if (hint) {
        hint.textContent = willShow ? "Bấm lại để ẩn mã QR" : "Bấm vào chữ Hỷ để hiện mã QR";
      }
    });
  });
}

function renderHeroDates() {
  elements.heroDates.innerHTML = weddingDates[currentGroup]
    .map((item) => `
      <div>
        <span>${item.place}</span>
        <strong>${item.date}</strong>
        <small>${item.lunar}</small>
      </div>
    `)
    .join("");
}

function renderWeddingCalendar() {
  elements.weddingCalendar.innerHTML = weddingDates[currentGroup]
    .map((item) => `
      <article class="calendar-card">
        <p>${item.title}</p>
        <div class="calendar-card__date">
          <span>${item.day}</span>
          <strong>Tháng ${item.month}</strong>
          <small>${item.year}</small>
        </div>
        <div class="calendar-card__meta">
          <b>${item.weekday}</b>
          <span>${item.place}</span>
          <em>Âm lịch: ${item.lunar}</em>
        </div>
      </article>
    `)
    .join("");
}

function setActiveSegment() {
  document.querySelectorAll("[data-group]").forEach((button) => {
    const isActive = button.dataset.group === currentGroup;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-selected", String(isActive));
  });
}

function renderGallery() {
  const images = window.galleryImages || [];
  if (!images.length) {
    elements.galleryGrid.innerHTML = "";
    elements.galleryCounter.textContent = "";
    elements.galleryPrev.disabled = true;
    elements.galleryNext.disabled = true;
    return;
  }

  galleryIndex = (galleryIndex + images.length) % images.length;
  const image = images[galleryIndex];
  elements.galleryGrid.dataset.direction = galleryDirection > 0 ? "next" : "prev";
  elements.galleryGrid.innerHTML = `<img class="gallery-image" src="${image.src}" alt="${image.alt || `Khoảnh khắc cưới ${galleryIndex + 1}`}" />`;
  const galleryImage = elements.galleryGrid.querySelector("img");
  galleryImage.addEventListener("load", () => {
    const orientation = galleryImage.naturalHeight > galleryImage.naturalWidth ? "portrait" : "landscape";
    elements.galleryGrid.dataset.orientation = orientation;
  }, { once: true });
  elements.galleryCounter.textContent = `${galleryIndex + 1} / ${images.length}`;
  elements.galleryPrev.disabled = images.length <= 1;
  elements.galleryNext.disabled = images.length <= 1;
}

function moveGallery(direction) {
  const images = window.galleryImages || [];
  if (!images.length) return;
  galleryDirection = direction;
  galleryIndex = (galleryIndex + direction + images.length) % images.length;
  renderGallery();
}

function startGalleryAutoplay() {
  clearInterval(galleryTimer);
  const images = window.galleryImages || [];
  if (images.length <= 1) return;
  galleryTimer = setInterval(() => moveGallery(1), galleryIntervalMs);
}

function moveGalleryManually(direction) {
  moveGallery(direction);
  startGalleryAutoplay();
}

function saveRsvp(response) {
  const responses = JSON.parse(localStorage.getItem("weddingRsvpResponses") || "[]");
  responses.push(response);
  localStorage.setItem("weddingRsvpResponses", JSON.stringify(responses));
}

function saveGuestbook(message) {
  const messages = JSON.parse(localStorage.getItem("weddingGuestbookMessages") || "[]");
  messages.push(message);
  localStorage.setItem("weddingGuestbookMessages", JSON.stringify(messages));
}

function getGuestbookMessages() {
  const localMessages = JSON.parse(localStorage.getItem("weddingGuestbookMessages") || "[]");
  const messages = [...remoteGuestbookMessages, ...localMessages];
  const seen = new Set();
  return messages.filter((message) => {
    const key = [message.submittedAt, message.name, message.message].join("|");
    if (seen.has(key)) return false;
    seen.add(key);
    return message.name && message.message;
  });
}

function loadGuestbookMessagesFromSheet() {
  if (!wedding.guestbookEndpoint) return;

  const callbackName = `receiveGuestbook${Date.now()}`;
  const script = document.createElement("script");
  const url = new URL(wedding.guestbookEndpoint);
  url.searchParams.set("action", "guestbook");
  url.searchParams.set("callback", callbackName);

  window[callbackName] = (messages) => {
    remoteGuestbookMessages = Array.isArray(messages) ? messages : [];
    renderGuestbookMessages();
    script.remove();
    delete window[callbackName];
  };

  script.onerror = () => {
    script.remove();
    delete window[callbackName];
  };

  script.src = url.toString();
  document.body.append(script);
}

function renderGuestbookMessages() {
  const messages = getGuestbookMessages().slice().reverse();
  elements.guestbookList.replaceChildren();

  if (!messages.length) {
    elements.guestbookList.hidden = true;
    return;
  }

  elements.guestbookList.hidden = false;
  messages.forEach((message) => {
    const item = document.createElement("article");
    item.className = "guestbook-message";

    const text = document.createElement("p");
    text.textContent = message.message;

    const name = document.createElement("strong");
    name.textContent = message.name;

    item.append(text, name);
    elements.guestbookList.append(item);
  });
}

function makeCalendarUrl(event) {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: event.text,
    dates: `${event.start}/${event.end}`,
    ctz: "Asia/Ho_Chi_Minh",
    details: event.details,
    location: event.location
  });

  return `https://www.google.com/calendar/render?${params.toString()}`;
}

function updateCalendarLinks() {
  const calendarGroup = currentGroup === "nha-gai" ? "nha-gai" : "nha-trai";
  const events = calendarEvents[calendarGroup];
  elements.calendarPrimary.href = makeCalendarUrl(events.primary);
  elements.calendarSecondary.href = makeCalendarUrl(events.secondary);
  elements.calendarPrimary.textContent = currentGroup === "both" ? "Lịch lễ Tân Hôn" : "Thêm vào lịch";
  elements.calendarSecondary.textContent = currentGroup === "nha-gai" ? "Lịch tiệc Vu Quy" : "Lịch tiệc cưới";
}

function updateCountdown() {
  clearInterval(countdownTimer);
  const target = new Date(wedding.groups[currentGroup].countdownTarget).getTime();

  function tick() {
    const now = Date.now();
    const diff = Math.max(0, target - now);
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);

    document.getElementById("days").textContent = String(days).padStart(2, "0");
    document.getElementById("hours").textContent = String(hours).padStart(2, "0");
    document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
    document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
  }

  tick();
  countdownTimer = setInterval(tick, 1000);
}

function render() {
  setText();
  renderTimeline();
  renderLocations();
  renderGifts();
  renderGallery();
  renderHeroDates();
  renderWeddingCalendar();
  renderGuestbookMessages();
  loadGuestbookMessagesFromSheet();
  setActiveSegment();
  updateCalendarLinks();
  updateCountdown();
}

function setupScrollReveal() {
  const sections = document.querySelectorAll("main > .section");
  sections.forEach((section) => section.classList.add("reveal"));

  if (!("IntersectionObserver" in window)) {
    sections.forEach((section) => section.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.16 });

  sections.forEach((section) => observer.observe(section));
}

document.querySelectorAll("[data-group]").forEach((button) => {
  button.addEventListener("click", () => {
    currentGroup = button.dataset.group;
    render();
  });
});

elements.openInvitation.addEventListener("click", () => {
  document.body.classList.add("invitation-open");
  window.setTimeout(() => elements.cover.setAttribute("hidden", ""), 450);
  playBackgroundMusic();
});

elements.galleryPrev.addEventListener("click", () => moveGalleryManually(-1));
elements.galleryNext.addEventListener("click", () => moveGalleryManually(1));

function toggleForm(button, form) {
  const willOpen = form.hidden;
  form.hidden = !willOpen;
  button.setAttribute("aria-expanded", String(willOpen));
  if (willOpen) {
    form.querySelector("input, select, textarea")?.focus();
  }
}

elements.showRsvpForm.addEventListener("click", () => {
  toggleForm(elements.showRsvpForm, elements.rsvpForm);
});

elements.showGuestbookForm.addEventListener("click", () => {
  toggleForm(elements.showGuestbookForm, elements.guestbookForm);
});

elements.rsvpForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const response = {
    guestId,
    name: elements.rsvpName.value.trim(),
    group: elements.rsvpGroup.value,
    groupLabel: wedding.groups[elements.rsvpGroup.value].label,
    attend: elements.rsvpAttend.value,
    guests: elements.rsvpAttend.value === "yes" ? Number(elements.rsvpGuests.value || 1) : 0,
    phone: elements.rsvpPhone.value.trim(),
    submittedAt: new Date().toISOString()
  };

  saveRsvp(response);

  if (wedding.rsvpEndpoint) {
    await fetch(wedding.rsvpEndpoint, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(response)
    });
  }

  elements.rsvpStatus.textContent = response.attend === "yes"
    ? `Đã ghi nhận ${response.name} tham dự (${response.guests} người).`
    : `Đã ghi nhận phản hồi của ${response.name}.`;
});

elements.guestbookForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const message = {
    guestId,
    name: elements.guestbookName.value.trim(),
    message: elements.guestbookMessage.value.trim(),
    submittedAt: new Date().toISOString()
  };

  saveGuestbook(message);
  renderGuestbookMessages();

  if (wedding.guestbookEndpoint) {
    await fetch(wedding.guestbookEndpoint, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "guestbook", ...message })
    });
  }

  elements.guestbookStatus.textContent = `Cảm ơn ${message.name} đã gửi lời chúc.`;
  elements.guestbookMessage.value = "";
});

function setMusicButton(isPlaying) {
  elements.musicToggle.hidden = false;
  elements.musicToggle.classList.toggle("is-playing", isPlaying);
  elements.musicToggle.setAttribute("aria-pressed", String(isPlaying));
  elements.musicToggle.setAttribute("aria-label", isPlaying ? "Tắt nhạc nền" : "Mở nhạc nền");
}

async function playBackgroundMusic() {
  if (!elements.bgMusic.querySelector("source")?.getAttribute("src")) {
    elements.musicToggle.hidden = true;
    return false;
  }

  setMusicButton(true);
  try {
    await elements.bgMusic.play();
    return true;
  } catch {
    setMusicButton(false);
    return false;
  }
}

elements.musicToggle.addEventListener("click", () => {
  if (elements.bgMusic.paused) {
    playBackgroundMusic();
  } else {
    elements.bgMusic.pause();
    setMusicButton(false);
  }
});

render();
setupScrollReveal();
startGalleryAutoplay();