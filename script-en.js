const wedding = {
  rsvpEndpoint: "https://script.google.com/macros/s/AKfycby0wlQ9GKui5bMclmadBZYI1sEi3B3OF7MpG-cMgLw5tiE1i_CLf-nh6gJBo6m5oIIZxg/exec",
  guestbookEndpoint: "https://script.google.com/macros/s/AKfycby0wlQ9GKui5bMclmadBZYI1sEi3B3OF7MpG-cMgLw5tiE1i_CLf-nh6gJBo6m5oIIZxg/exec",
  groups: {
    "nha-gai": {
      label: "Bride's family",
      greeting: "Bride's friends",
      subtitle: "With love, we invite you to our wedding celebration.",
      copy: "You are one of the special people we would love to have by our side. We hope you and your family can join us and share this happy moment.",
      coverDate: "26.10.2026 • Lunar 17.09",
      countdownTitle: "Bride's ceremony in Gia Lai",
      countdownTarget: "2026-10-26T08:00:00+07:00"
    },
    "nha-trai": {
      label: "Groom's family",
      greeting: "Groom's friends",
      subtitle: "With love, we invite you to our wedding celebration.",
      copy: "You are one of the special people we would love to have by our side. We hope you and your family can join us and share this happy moment.",
      coverDate: "30.10.2026 • Lunar 21.09",
      countdownTitle: "Groom's ceremony in Ho Chi Minh City",
      countdownTarget: "2026-10-30T09:00:00+07:00"
    },
    both: {
      label: "Both families",
      greeting: "Dear friend",
      subtitle: "With love, we invite you to our wedding celebration.",
      copy: "You are one of the special people we would love to have by our side. We hope you and your family can join us and share this happy moment.",
      coverDate: "26.10.2026 • Lunar 17.09 | 30.10.2026 • Lunar 21.09",
      countdownTitle: "The first celebration in Gia Lai",
      countdownTarget: "2026-10-26T08:00:00+07:00"
    }
  },
  dates: {
    "nha-gai": [
      { title: "Bride's Ceremony", day: "26", month: "10", year: "2026", weekday: "Monday", time: "08:00", place: "Bride's family home", city: "Gia Lai", lunar: "17.09, Year of the Fire Horse" },
      { title: "Bride's Reception", day: "26", month: "10", year: "2026", weekday: "Monday", time: "11:00", place: "Bride's family home", city: "Gia Lai", lunar: "17.09, Year of the Fire Horse" }
    ],
    "nha-trai": [
      { title: "Groom's Ceremony", day: "30", month: "10", year: "2026", weekday: "Friday", time: "09:00", place: "Groom's family home", city: "Ho Chi Minh City", lunar: "21.09, Year of the Fire Horse" },
      { title: "Groom's Reception", day: "30", month: "10", year: "2026", weekday: "Friday", time: "17:30", place: "Tinh Yeu Hall - Nam Bo Wedding Restaurant", city: "Ho Chi Minh City", lunar: "21.09, Year of the Fire Horse" }
    ]
  },
  events: [
    { group: "nha-gai", time: "08:00, Monday 26/10/2026", title: "Engagement & Bride's Ceremony", description: "Family ceremony at the bride's home." },
    { group: "nha-gai", time: "11:00, Monday 26/10/2026", title: "Bride's Reception", description: "Reception at the bride's home." },
    { group: "nha-trai", time: "09:00, Friday 30/10/2026", title: "Groom's Ceremony", description: "Family ceremony at the groom's home." },
    { group: "nha-trai", time: "17:30 guest welcome, 19:00 reception, Friday 30/10/2026", title: "Groom's Reception", description: "Tinh Yeu Hall - Nam Bo Wedding Restaurant." }
  ],
  locations: [
    { group: "nha-gai", title: "Bride's family home", address: "Tan Lap Hamlet, K'Dang Commune, Gia Lai Province", map: "https://maps.app.goo.gl/XVBLExx425U4GgYa7", qr: "assets/qr_nha_gai.png" },
    { group: "nha-trai", title: "Groom's family home", address: "13/5 Nguyen Van Yen, Phu Thanh Ward, Ho Chi Minh City", map: "https://maps.app.goo.gl/11QG3p5N6a3PNHxc9", qr: "assets/qr_nha_trai.png" },
    { group: "nha-trai", title: "Tinh Yeu Hall", address: "Nam Bo Wedding Restaurant, 615A Au Co, Tan Phu Ward, Ho Chi Minh City", map: "https://maps.app.goo.gl/9Eqx5mkL876KupAy7", qr: "assets/qr_nha_trai_le.png" }
  ],
  gifts: [
    { group: "nha-gai", title: "Bride's gift box", bank: "Vietcombank", accountName: "Dao Thi Thu Ha", account: "0071001001311", qr: "BankAccount/CD_bank_account.JPG" },
    { group: "nha-trai", title: "Groom's gift box", bank: "Vietcombank", accountName: "Dao Thi Thu Ha", account: "0071001001311", qr: "BankAccount/CD_bank_account.JPG" }
  ]
};

wedding.dates.both = [...wedding.dates["nha-gai"], ...wedding.dates["nha-trai"]];

const galleryImages = [
  "1.webp",
  "071A6430.webp",
  "071A6537.webp",
  "071A6942.webp",
  "071A7005.webp",
  "071A7215.webp"
].map((name, index) => ({ src: `gallery/optimized/${name}`, alt: `Ha and An wedding photo ${index + 1}` }));

const calendarEvents = {
  "nha-gai": {
    text: "Ha & An Bride's Ceremony",
    start: "20261026T010000Z",
    end: "20261026T020000Z",
    location: "Tan Lap Hamlet, K'Dang Commune, Gia Lai Province",
    details: "Ha and An's engagement and bride's ceremony."
  },
  "nha-trai": {
    text: "Ha & An Groom's Reception",
    start: "20261030T123000Z",
    end: "20261030T143000Z",
    location: "Tinh Yeu Hall - Nam Bo Wedding Restaurant, 615A Au Co, Ho Chi Minh City",
    details: "Guest welcome at 17:30, reception starts at 19:00."
  }
};

const params = new URLSearchParams(window.location.search);
const guestName = params.get("to")?.trim() || "dear friend";
const guestId = params.get("id")?.trim() || "";
const requestedGroup = params.get("type");
const lockedGroup = wedding.groups[requestedGroup] ? requestedGroup : "";
let currentGroup = lockedGroup || "both";
let countdownTimer;
let galleryIndex = 0;
let sceneIndex = 0;
let revealFrame;
let galleryTimer;
let galleryAutoplayResumeTimer;
let galleryIsAnimating = false;
let galleryAnimatingTargetIndex;
let galleryPendingTransition;
let galleryIsInView = false;
let galleryPointerStart = 0;
let revealEnabled = false;
let galleryHasWarmed = false;
let remoteGuestbookMessages = [];
let guestbookHasRequested = false;
let guestbookRequestPending = false;
const galleryPreloadCache = new Map();
const galleryAutoplayMs = 5600;

const elements = {
  welcome: document.getElementById("welcome"),
  openInvite: document.getElementById("openInvite"),
  welcomeGuest: document.getElementById("welcomeGuest"),
  welcomeDate: document.getElementById("welcomeDate"),
  invite: document.getElementById("invite"),
  homeGreeting: document.getElementById("homeGreeting"),
  homeDates: document.getElementById("homeDates"),
  guestNameTitle: document.getElementById("guestNameTitle"),
  invitationGreeting: document.getElementById("invitationGreeting"),
  invitationCopy: document.getElementById("invitationCopy"),
  countdownTitle: document.getElementById("countdownTitle"),
  days: document.getElementById("days"),
  hours: document.getElementById("hours"),
  minutes: document.getElementById("minutes"),
  seconds: document.getElementById("seconds"),
  dateCards: document.getElementById("dateCards"),
  timeline: document.getElementById("timeline"),
  locationList: document.getElementById("locationList"),
  giftList: document.getElementById("giftList"),
  galleryViewport: document.getElementById("galleryViewport"),
  galleryImage: document.getElementById("galleryImage"),
  galleryPrev: document.getElementById("galleryPrev"),
  galleryNext: document.getElementById("galleryNext"),
  galleryCount: document.getElementById("galleryCount"),
  galleryDots: document.getElementById("galleryDots"),
  showRsvpForm: document.getElementById("showRsvpForm"),
  rsvpForm: document.getElementById("rsvpForm"),
  rsvpName: document.getElementById("rsvpName"),
  rsvpPrivateNote: document.getElementById("rsvpPrivateNote"),
  rsvpTitle: document.getElementById("rsvpTitle"),
  rsvpGroup: document.getElementById("rsvpGroup"),
  rsvpAttend: document.getElementById("rsvpAttend"),
  rsvpGuests: document.getElementById("rsvpGuests"),
  rsvpPhone: document.getElementById("rsvpPhone"),
  rsvpStatus: document.getElementById("rsvpStatus"),
  wishForm: document.getElementById("wishForm"),
  wishName: document.getElementById("wishName"),
  wishMessage: document.getElementById("wishMessage"),
  wishStatus: document.getElementById("wishStatus"),
  wishList: document.getElementById("wishList"),
  saveCalendar: document.getElementById("saveCalendar"),
  musicButton: document.getElementById("musicButton"),
  bgMusic: document.getElementById("bgMusic")
};

function getGroupRank(group) {
  if (currentGroup === "nha-trai") return group === "nha-trai" ? 0 : 1;
  if (currentGroup === "nha-gai") return group === "nha-gai" ? 0 : 1;
  return group === "nha-gai" ? 0 : 1;
}

function matchesGroup(item) {
  return currentGroup === "both" || item.group === currentGroup;
}

function updateParentsOrder() {
  document.querySelectorAll("[data-parent-group]").forEach((parent) => {
    parent.style.order = String(getGroupRank(parent.dataset.parentGroup));
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

function updateText() {
  const group = wedding.groups[currentGroup];
  elements.welcomeGuest.textContent = guestName;
  elements.welcomeDate.textContent = group.coverDate;
  elements.homeGreeting.textContent = `Dear ${guestName}, with love, we invite you to our wedding celebration.`;
  renderHomeDates();
  updateParentsOrder();
  elements.guestNameTitle.textContent = guestName;
  elements.invitationGreeting.textContent = `Dear ${guestName}, with love, we invite you to our wedding celebration!`;
  elements.invitationCopy.textContent = group.copy;
  elements.countdownTitle.textContent = group.countdownTitle;
  elements.rsvpTitle.textContent = `Hope to see you, ${guestName}`;
  elements.rsvpName.value = guestName;
  elements.rsvpPrivateNote.textContent = `This link was made especially for ${guestName}. If you are not ${guestName}, please message Ha & An for your own invitation.`;
  elements.rsvpGroup.value = currentGroup;
  elements.wishName.value = guestName;
  const calendarGroup = currentGroup === "nha-gai" ? "nha-gai" : "nha-trai";
  elements.saveCalendar.href = makeCalendarUrl(calendarEvents[calendarGroup]);
  document.title = `Ha & An Wedding Invitation - ${guestName}`;
}

function renderHomeDates() {
  const dates = wedding.dates[currentGroup];
  elements.homeDates.innerHTML = dates.map((date) => `
    <article class="home-date-card">
      <strong>${date.title}</strong>
      <span>${date.time}, ${date.weekday} ${date.day}/${date.month}/${date.year}</span>
      <small>${date.place}</small>
    </article>
  `).join("") + renderCommonCity(dates, "home-date-common");
}

function renderDates() {
  const dates = wedding.dates[currentGroup];
  elements.dateCards.innerHTML = dates.map((date) => `
    <article class="date-card">
      <span>${date.title}</span>
      <strong>${date.day}</strong>
      <b>October ${date.year}</b>
      <small>${date.weekday} • ${date.time} • ${date.place}</small>
      <small>Lunar date: ${date.lunar}</small>
    </article>
  `).join("") + renderCommonCity(dates, "date-card date-card--common");
}

function renderCommonCity(dates, className) {
  const cities = [...new Set(dates.map((date) => date.city).filter(Boolean))];
  if (!cities.length) return "";
  return `<p class="${className}">${cities.join(" • ")}</p>`;
}

function renderTimeline() {
  elements.timeline.innerHTML = wedding.events.filter(matchesGroup).map((event) => `
    <article class="event">
      <time>${event.time}</time>
      <h3>${event.title}</h3>
      <p>${event.description}</p>
    </article>
  `).join("");
}

function renderLocations() {
  elements.locationList.innerHTML = wedding.locations.filter(matchesGroup).map((location) => `
    <article class="location-card">
      <small>${location.group === "nha-gai" ? "Bride's family" : "Groom's family"}</small>
      <h3>${location.title}</h3>
      <p>${location.address}</p>
      <img src="${location.qr}" alt="Directions QR for ${location.title}" loading="lazy" decoding="async" />
      <a href="${location.map}" target="_blank" rel="noreferrer">Open Google Maps</a>
    </article>
  `).join("");
}

function renderGifts() {
  elements.giftList.innerHTML = wedding.gifts.filter(matchesGroup).map((gift) => `
    <article class="gift-card">
      <small>${gift.group === "nha-gai" ? "Bride's family" : "Groom's family"}</small>
      <h3>${gift.title}</h3>
      <button class="gift-card__qr" type="button" data-gift-toggle aria-expanded="false">
        <span>囍</span>
        <img data-src="${gift.qr}" alt="Account QR for ${gift.title}" hidden />
      </button>
      <small class="gift-card__hint" data-gift-hint>Tap the double-happiness symbol to show the QR code</small>
      <div class="gift-card__details" data-gift-details hidden>
        <dl>
          <div><dt>Bank</dt><dd>${gift.bank}</dd></div>
          <div><dt>Account name</dt><dd>${gift.accountName}</dd></div>
          <div><dt>Account number</dt><dd>${gift.account}</dd></div>
        </dl>
        <button class="copy-btn" type="button" data-copy="${gift.account}">Copy account number</button>
      </div>
    </article>
  `).join("");

  elements.giftList.querySelectorAll("[data-gift-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const image = button.querySelector("img");
      const willShow = image.hidden;
      if (willShow && image.dataset.src) {
        image.src = image.dataset.src;
        delete image.dataset.src;
      }
      image.hidden = !willShow;
      button.querySelector("span").hidden = willShow;
      button.setAttribute("aria-expanded", String(willShow));

      const card = button.closest(".gift-card");
      card.querySelector("[data-gift-details]").hidden = !willShow;
      card.querySelector("[data-gift-hint]").textContent = willShow ? "Tap again to hide the QR code" : "Tap the double-happiness symbol to show the QR code";
    });
  });

  elements.giftList.querySelectorAll("[data-copy]").forEach((button) => {
    button.addEventListener("click", async () => {
      await navigator.clipboard?.writeText(button.dataset.copy);
      button.textContent = "Copied";
      window.setTimeout(() => { button.textContent = "Copy account number"; }, 1400);
    });
  });
}

function setActiveGroup() {
  const tabs = document.querySelector(".tabs");
  if (tabs && lockedGroup) tabs.hidden = true;

  document.querySelectorAll("[data-group]").forEach((button) => {
    const active = button.dataset.group === currentGroup;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-selected", String(active));
    button.hidden = Boolean(lockedGroup && !active);
    button.disabled = Boolean(lockedGroup);
  });
}

function updateCountdown() {
  clearInterval(countdownTimer);
  const target = new Date(wedding.groups[currentGroup].countdownTarget).getTime();

  function tick() {
    const diff = Math.max(0, target - Date.now());
    const day = Math.floor(diff / 86400000);
    const hour = Math.floor((diff % 86400000) / 3600000);
    const minute = Math.floor((diff % 3600000) / 60000);
    const second = Math.floor((diff % 60000) / 1000);
    elements.days.textContent = String(day).padStart(2, "0");
    elements.hours.textContent = String(hour).padStart(2, "0");
    elements.minutes.textContent = String(minute).padStart(2, "0");
    elements.seconds.textContent = String(second).padStart(2, "0");
  }

  tick();
  countdownTimer = window.setInterval(tick, 1000);
}

function renderGallery() {
  const image = galleryImages[galleryIndex];
  elements.galleryImage.className = "gallery-image is-current";
  elements.galleryImage.src = image.src;
  elements.galleryImage.alt = image.alt;
  elements.galleryCount.textContent = `${galleryIndex + 1} / ${galleryImages.length}`;
  renderGalleryDots();
}

function renderGalleryDots() {
  elements.galleryDots.innerHTML = galleryImages.map((_, index) => `
    <button type="button" class="${index === galleryIndex ? "is-active" : ""}" data-gallery-dot="${index}" aria-label="View photo ${index + 1}"></button>
  `).join("");
}

function preloadGalleryImage(index) {
  const image = galleryImages[(index + galleryImages.length) % galleryImages.length];
  if (!image) return Promise.resolve();
  if (galleryPreloadCache.has(image.src)) return galleryPreloadCache.get(image.src);

  const preloader = new Image();
  preloader.decoding = "async";
  const resolveDecoded = (resolve) => {
    if (preloader.decode) {
      preloader.decode().then(resolve).catch(resolve);
    } else {
      resolve();
    }
  };
  const promise = new Promise((resolve) => {
    const done = () => resolveDecoded(resolve);
    preloader.onload = done;
    preloader.onerror = resolve;
    preloader.src = image.src;
    if (preloader.complete) done();
  });
  galleryPreloadCache.set(image.src, promise);
  return promise;
}

function warmGalleryImages() {
  if (galleryHasWarmed) return;
  galleryHasWarmed = true;
  const warm = () => galleryImages.forEach((_, index) => preloadGalleryImage(index));
  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(warm, { timeout: 1800 });
  } else {
    window.setTimeout(warm, 400);
  }
}

function transitionGallery(nextIndex, direction) {
  if (galleryIsAnimating) {
    galleryPendingTransition = { nextIndex, direction };
    preloadGalleryImage(nextIndex);
    return;
  }

  if (nextIndex === galleryIndex) return;

  galleryIsAnimating = true;
  galleryAnimatingTargetIndex = nextIndex;
  const nextImageData = galleryImages[nextIndex];
  const currentImage = elements.galleryImage;
  const nextImage = document.createElement("img");

  const finish = () => {
    galleryIndex = nextIndex;
    currentImage.remove();
    nextImage.id = "galleryImage";
    nextImage.className = "gallery-image is-current";
    elements.galleryImage = nextImage;
    elements.galleryCount.textContent = `${galleryIndex + 1} / ${galleryImages.length}`;
    renderGalleryDots();
    preloadGalleryImage(galleryIndex + direction);
    galleryIsAnimating = false;
    galleryAnimatingTargetIndex = undefined;

    const queuedTransition = galleryPendingTransition;
    galleryPendingTransition = undefined;
    if (queuedTransition && queuedTransition.nextIndex !== galleryIndex) {
      window.setTimeout(() => transitionGallery(queuedTransition.nextIndex, queuedTransition.direction), 40);
    }
  };

  let hasFinished = false;
  const safeFinish = () => {
    if (hasFinished) return;
    hasFinished = true;
    finish();
  };

  preloadGalleryImage(nextIndex).then(() => {
    nextImage.className = `gallery-image ${direction > 0 ? "is-entering-next" : "is-entering-prev"}`;
    nextImage.src = nextImageData.src;
    nextImage.alt = nextImageData.alt;
    elements.galleryViewport.append(nextImage);

    nextImage.getBoundingClientRect();
    window.setTimeout(() => {
      currentImage.classList.add(direction > 0 ? "is-leaving-next" : "is-leaving-prev");
      nextImage.classList.add("is-active");
      window.setTimeout(safeFinish, 1320);
    }, 30);

    window.setTimeout(safeFinish, 1900);
  });
}

function moveGallery(direction, isManual = true) {
  const baseIndex = galleryPendingTransition?.nextIndex ?? galleryAnimatingTargetIndex ?? galleryIndex;
  const nextIndex = (baseIndex + direction + galleryImages.length) % galleryImages.length;
  transitionGallery(nextIndex, direction);
  if (isManual) restartGalleryAutoplay();
}

function goToGalleryImage(nextIndex) {
  const baseIndex = galleryPendingTransition?.nextIndex ?? galleryAnimatingTargetIndex ?? galleryIndex;
  const direction = nextIndex > baseIndex ? 1 : -1;
  transitionGallery(nextIndex, direction);
  restartGalleryAutoplay();
}

function startGalleryAutoplay() {
  if (galleryTimer || galleryIsAnimating || galleryPendingTransition || !galleryIsInView || document.hidden || galleryImages.length <= 1) return;
  galleryTimer = window.setInterval(() => moveGallery(1, false), galleryAutoplayMs);
}

function stopGalleryAutoplay() {
  window.clearInterval(galleryTimer);
  window.clearTimeout(galleryAutoplayResumeTimer);
  galleryTimer = undefined;
  galleryAutoplayResumeTimer = undefined;
}

function restartGalleryAutoplay() {
  stopGalleryAutoplay();
  galleryAutoplayResumeTimer = window.setTimeout(startGalleryAutoplay, galleryAutoplayMs * 1.35);
}

function setupGalleryMotion() {
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      galleryIsInView = entries.some((entry) => entry.isIntersecting);
      if (galleryIsInView) {
        warmGalleryImages();
        startGalleryAutoplay();
      } else {
        stopGalleryAutoplay();
      }
    }, { threshold: 0.38 });
    observer.observe(document.getElementById("gallery"));
  } else {
    galleryIsInView = true;
    startGalleryAutoplay();
  }

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stopGalleryAutoplay();
    else startGalleryAutoplay();
  });

  elements.galleryViewport.addEventListener("pointerdown", (event) => {
    galleryPointerStart = event.clientX;
    stopGalleryAutoplay();
  });

  elements.galleryViewport.addEventListener("pointerup", (event) => {
    const delta = event.clientX - galleryPointerStart;
    if (Math.abs(delta) > 42) {
      moveGallery(delta < 0 ? 1 : -1);
    } else {
      startGalleryAutoplay();
    }
  });

  elements.galleryDots.addEventListener("click", (event) => {
    const button = event.target.closest("[data-gallery-dot]");
    if (!button) return;
    goToGalleryImage(Number(button.dataset.galleryDot));
  });
}

function getWishes() {
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

function renderWishes() {
  const wishes = getWishes().slice().reverse();
  if (!wishes.length) {
    elements.wishList.innerHTML = "";
    elements.wishList.hidden = true;
    return;
  }

  elements.wishList.hidden = false;
  elements.wishList.innerHTML = wishes.map((wish) => `
    <article class="wish-item">
      <p>${escapeHtml(wish.message)}</p>
      <strong>${escapeHtml(wish.name)}</strong>
    </article>
  `).join("");
}

function saveWish(name, message) {
  const wishes = getWishes();
  wishes.push({ name, message, submittedAt: new Date().toISOString() });
  localStorage.setItem("weddingGuestbookMessages", JSON.stringify(wishes));
}

function saveRsvp(response) {
  const responses = JSON.parse(localStorage.getItem("weddingRsvpResponses") || "[]");
  responses.push(response);
  localStorage.setItem("weddingRsvpResponses", JSON.stringify(responses));
}

function loadGuestbookMessagesFromSheet() {
  if (!wedding.guestbookEndpoint || guestbookRequestPending || guestbookHasRequested) return;

  guestbookRequestPending = true;
  guestbookHasRequested = true;
  const callbackName = `receiveBetaGuestbook${Date.now()}`;
  const script = document.createElement("script");
  const url = new URL(wedding.guestbookEndpoint);
  url.searchParams.set("action", "guestbook");
  url.searchParams.set("callback", callbackName);

  window[callbackName] = (messages) => {
    guestbookRequestPending = false;
    remoteGuestbookMessages = Array.isArray(messages) ? messages : [];
    renderWishes();
    observeRevealTargets();
    scheduleRevealCheck();
    script.remove();
    delete window[callbackName];
  };

  script.onerror = () => {
    guestbookRequestPending = false;
    script.remove();
    delete window[callbackName];
  };

  script.src = url.toString();
  document.body.append(script);
}

function toggleForm(button, form) {
  const willOpen = form.hidden;
  form.hidden = !willOpen;
  button.setAttribute("aria-expanded", String(willOpen));
  if (willOpen) {
    form.querySelector("input, select, textarea")?.focus();
    observeRevealTargets();
    scheduleRevealCheck();
  }
}

function resetRevealAnimations() {
  document.querySelectorAll(".reveal.is-visible").forEach((target) => {
    target.classList.remove("is-visible");
  });
}

function escapeHtml(value) {
  return value.replace(/[&<>"]/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[char]));
}

function openInvitation() {
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  elements.invite.scrollTo?.({ top: 0, left: 0, behavior: "instant" });
  resetRevealAnimations();
  revealEnabled = true;
  document.body.classList.add("invite-open");
  elements.welcome.setAttribute("aria-hidden", "true");
  elements.welcome.setAttribute("inert", "");
  elements.musicButton.hidden = false;
  playMusic();
  shootConfetti();
  window.setTimeout(scheduleRevealCheck, 120);
  window.setTimeout(() => elements.welcome.remove(), 80);
}

function setMusicState(isPlaying) {
  elements.musicButton.classList.toggle("is-playing", isPlaying);
  elements.musicButton.setAttribute("aria-pressed", String(isPlaying));
}

async function playMusic() {
  try {
    await elements.bgMusic.play();
    setMusicState(!elements.bgMusic.paused && elements.bgMusic.networkState !== HTMLMediaElement.NETWORK_NO_SOURCE);
  } catch {
    setMusicState(false);
  }
}

function toggleMusic() {
  if (elements.bgMusic.paused) {
    playMusic();
    return;
  }
  elements.bgMusic.pause();
  setMusicState(false);
}

function shootConfetti() {
  const colors = ["#8f1718", "#dcae57", "#fff6ec", "#536e5b"];
  const pieces = 56;
  for (let index = 0; index < pieces; index += 1) {
    const dot = document.createElement("span");
    dot.style.position = "fixed";
    dot.style.left = `${Math.random() * 100}vw`;
    dot.style.top = "-14px";
    dot.style.zIndex = "30";
    dot.style.width = "8px";
    dot.style.height = "12px";
    dot.style.borderRadius = "3px";
    dot.style.background = colors[index % colors.length];
    dot.style.transform = `rotate(${Math.random() * 180}deg)`;
    dot.style.transition = `transform ${1200 + Math.random() * 900}ms ease, opacity 1600ms ease`;
    document.body.append(dot);
    requestAnimationFrame(() => {
      dot.style.transform = `translate(${(Math.random() - 0.5) * 180}px, ${window.innerHeight + 80}px) rotate(${420 + Math.random() * 360}deg)`;
      dot.style.opacity = "0";
    });
    window.setTimeout(() => dot.remove(), 2300);
  }
}

function rotateDesktopScene() {
  const slides = document.querySelectorAll(".desktop-scene__slide");
  if (slides.length <= 1) return;
  window.setInterval(() => {
    slides[sceneIndex].classList.remove("is-active");
    sceneIndex = (sceneIndex + 1) % slides.length;
    slides[sceneIndex].classList.add("is-active");
  }, 6800);
}

function observeRevealTargets() {
  const targets = document.querySelectorAll([
    ".panel",
    ".panel > .overline",
    ".panel > h2",
    ".panel > p",
    ".home__content > *",
    ".parents article",
    ".person",
    ".person img",
    ".person h3",
    ".date-card",
    ".countdown__grid div",
    ".event",
    ".location-card",
    ".location-card img",
    ".gallery-frame",
    ".gallery-count",
    ".gallery-dots",
    ".rsvp-form label",
    ".wish-form label",
    ".gift-card",
    ".gift-card__qr",
    ".wish-item"
  ].join(","));

  targets.forEach((target, index) => {
    if (target.dataset.revealReady) return;
    target.dataset.revealReady = "true";
    target.classList.add("reveal");
    target.dataset.reveal = getRevealDirection(target, index);
    target.style.setProperty("--reveal-delay", `${Math.min(index % 5, 4) * 70}ms`);
  });

  if (revealEnabled) scheduleRevealCheck();
}

function getRevealDirection(target, index) {
  if (target.classList.contains("gallery-frame") || target.classList.contains("gift-card__qr")) return "zoom-in";
  if (target.matches(".panel > .overline")) return "fade-down";
  if (target.matches(".panel > h2, .person h3")) return "soft-rise";
  if (target.matches(".home__content > *")) return index % 2 ? "fade-left" : "fade-right";
  if (target.matches(".person img")) return target.closest(".person--offset") ? "fade-left" : "fade-right";
  if (target.matches(".parents article, .event, .location-card, .date-card, .gift-card, .wish-item")) return index % 2 ? "fade-left" : "fade-right";
  if (target.matches(".rsvp-form label, .wish-form label")) return index % 2 ? "fade-left" : "fade-right";
  if (target.matches(".location-card img")) return "zoom-in";
  return "soft-rise";
}

function getMotionViewport() {
  const inviteStyle = getComputedStyle(elements.invite);
  const inviteScrolls = elements.invite.scrollHeight > elements.invite.clientHeight + 2 && inviteStyle.overflowY !== "visible";
  if (inviteScrolls && elements.invite.clientHeight <= window.innerHeight * 1.5) {
    return elements.invite.getBoundingClientRect();
  }
  return { top: 0, bottom: window.innerHeight, height: window.innerHeight };
}

function checkRevealTargets() {
  if (!revealEnabled) return;
  const rootRect = getMotionViewport();
  document.querySelectorAll(".reveal").forEach((target) => {
    const rect = target.getBoundingClientRect();
    const isInView = rect.top < rootRect.bottom - 70 && rect.bottom > rootRect.top + 50;
    if (isInView) {
      target.classList.add("is-visible");
    }
  });
}

function scheduleRevealCheck() {
  if (revealFrame) return;
  revealFrame = requestAnimationFrame(() => {
    revealFrame = undefined;
    checkRevealTargets();
  });
}

function setupRevealAnimations() {
  observeRevealTargets();
  elements.invite.addEventListener("scroll", scheduleRevealCheck, { passive: true });
  window.addEventListener("scroll", scheduleRevealCheck, { passive: true });
  window.addEventListener("resize", scheduleRevealCheck);
}

function setupActiveNav() {
  const navLinks = [...document.querySelectorAll(".bottom-nav a")];
  const sections = navLinks
    .map((link) => document.querySelector(link.getAttribute("href")))
    .filter(Boolean);

  function setActive(id) {
    navLinks.forEach((link) => {
      link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
    });
  }

  function updateActiveNav() {
    const rootRect = getMotionViewport();
    const anchorLine = rootRect.top + rootRect.height * 0.42;
    const activeSection = sections
      .map((section) => ({ section, rect: section.getBoundingClientRect() }))
      .filter(({ rect }) => rect.top <= anchorLine && rect.bottom >= rootRect.top + 80)
      .sort((a, b) => Math.abs(a.rect.top - anchorLine) - Math.abs(b.rect.top - anchorLine))[0]?.section || sections[0];

    setActive(activeSection.id);
  }

  elements.invite.addEventListener("scroll", () => requestAnimationFrame(updateActiveNav), { passive: true });
  window.addEventListener("scroll", () => requestAnimationFrame(updateActiveNav), { passive: true });
  window.addEventListener("resize", updateActiveNav);
  updateActiveNav();
}

function refreshGroup() {
  updateText();
  renderDates();
  renderTimeline();
  renderLocations();
  renderGifts();
  setActiveGroup();
  updateCountdown();
}

function bindEvents() {
  elements.openInvite.addEventListener("click", openInvitation);
  elements.musicButton.addEventListener("click", toggleMusic);
  elements.bgMusic.addEventListener("playing", () => setMusicState(true));
  elements.bgMusic.addEventListener("pause", () => setMusicState(false));
  elements.bgMusic.addEventListener("error", () => setMusicState(false));
  bindGalleryNavButton(elements.galleryPrev, -1);
  bindGalleryNavButton(elements.galleryNext, 1);

  elements.showRsvpForm.addEventListener("click", () => {
    toggleForm(elements.showRsvpForm, elements.rsvpForm);
  });

  document.querySelectorAll("[data-group]").forEach((button) => {
    if (lockedGroup) return;

    button.addEventListener("click", () => {
      currentGroup = button.dataset.group;
      elements.invite.classList.add("is-updating");
      refreshGroup();
      observeRevealTargets();
      scheduleRevealCheck();
      window.setTimeout(() => elements.invite.classList.remove("is-updating"), 280);
    });
  });

  elements.wishForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = elements.wishName.value.trim();
    const message = elements.wishMessage.value.trim();
    if (!name || !message) return;
    const wish = { guestId, name, message, submittedAt: new Date().toISOString() };
    saveWish(wish.name, wish.message);
    if (wedding.guestbookEndpoint) {
      fetch(wedding.guestbookEndpoint, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "guestbook", ...wish })
      }).catch(() => {});
    }
    elements.wishMessage.value = "";
    elements.wishStatus.textContent = `Thank you, ${name}, for sending your wishes.`;
    renderWishes();
    observeRevealTargets();
    scheduleRevealCheck();
  });

  elements.rsvpForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const response = {
      guestId,
      name: guestName,
      group: elements.rsvpGroup.value,
      groupLabel: wedding.groups[elements.rsvpGroup.value].label,
      attend: elements.rsvpAttend.value,
      guests: elements.rsvpAttend.value === "yes" ? Number(elements.rsvpGuests.value || 1) : 0,
      phone: elements.rsvpPhone.value.trim(),
      submittedAt: new Date().toISOString()
    };

    saveRsvp(response);
    if (wedding.rsvpEndpoint) {
      fetch(wedding.rsvpEndpoint, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "rsvp", ...response })
      }).catch(() => {});
    }
    elements.rsvpStatus.textContent = response.attend === "yes"
      ? `RSVP received: ${response.name} will attend (${response.guests} guest${response.guests > 1 ? "s" : ""}).`
      : `RSVP response received from ${response.name}.`;
  });
}

function bindGalleryNavButton(button, direction) {
  button.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    moveGallery(direction);
  });

  button.addEventListener("keydown", (event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    moveGallery(direction);
  });
}

function init() {
  bindEvents();
  refreshGroup();
  renderGallery();
  renderWishes();
  loadGuestbookMessagesFromSheet();
  setupRevealAnimations();
  setupActiveNav();
  setupGalleryMotion();
  rotateDesktopScene();
}

init();
