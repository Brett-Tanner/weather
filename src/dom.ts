function displayWeather(target: HTMLElement, data?: apiResponse) {
  target.innerHTML = "";

  if (data) {
    target.appendChild(createHeader(data.location));
  } else {
    target.appendChild(createHeader());
  }

  const weatherSection = document.createElement("section");

  if (data) {
    weatherSection.appendChild(createCard(data.current));
    for (let i = 0; i < 2; i++) {
      const forecast = data.forecast.forecastday[i];
      weatherSection.appendChild(createCard(forecast));
    }
  } else {
    for (let i = 0; i < 3; i++) {
      weatherSection.appendChild(createCard());
    }
  }

  weatherSection.classList.add("grow", "w-full", "flex", "gap-5");
  target.classList.add("grow", "w-full", "flex", "flex-col");
  target.appendChild(weatherSection);
}

function createCard(data?: forecast | currentResponse) {
  const card = document.createElement("article");

  if (data) {
  } else {
    card.classList.add("animate-pulse", "bg-slate-600");
  }

  card.classList.add("basis-1/3", "rounded-xl", "h-full");
  return card;
}

function createHeader(data?: locationResponse) {
  const header = document.createElement("header");

  if (data) {
  } else {
    const headingSkeleton = document.createElement("div");
    headingSkeleton.classList.add("bg-slate-600", "h-16", "rounded");
    header.appendChild(headingSkeleton);
    header.classList.add("animate-pulse", "h-20");
  }

  header.classList.add("w-full");
  return header;
}

export { displayWeather };
