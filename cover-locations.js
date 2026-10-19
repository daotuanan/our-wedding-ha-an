function renderCoverLocations(wedding, currentGroup) {
  const isEnglish = document.documentElement.lang === "en";
  const groups = currentGroup === "both" ? ["nha-gai", "nha-trai"] : [currentGroup];
  const container = document.getElementById("welcomeLocations");
  const cards = groups.map((group) => {
    const dates = wedding.dates[group];
    const reception = dates[dates.length - 1];
    const location = wedding.locations.find((item) =>
      item.group === group && reception.place.startsWith(item.title)
    );
    const card = document.createElement("article");
    card.className = "cover-location";
    const label = document.createElement("small");
    label.textContent = `${wedding.groups[group].label} · ${reception.time} · ${reception.day}/${reception.month}/${reception.year}`;
    const title = document.createElement("strong");
    title.textContent = location.title;
    const address = document.createElement("span");
    address.textContent = location.address;
    const map = document.createElement("a");
    map.href = location.map;
    map.target = "_blank";
    map.rel = "noopener noreferrer";
    map.textContent = isEnglish ? "Get directions ↗" : "Xem đường đi ↗";
    map.setAttribute("aria-label", `${map.textContent} — ${location.address}`);
    card.append(label, title, address, map);
    return card;
  });
  container?.replaceChildren(...cards);

  // Keep the full address visible on the first page after opening the invitation.
  document.querySelectorAll("#homeDates .home-date-card").forEach((card, index) => {
    const date = wedding.dates[currentGroup][index];
    const location = wedding.locations.find((item) => date.place.startsWith(item.title));
    const address = document.createElement("small");
    address.className = "home-date-address";
    address.textContent = location.address;
    card.append(address);
  });
}
