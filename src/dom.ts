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
    for (let i = 0; i < data.forecast.forecastday.length; i++) {
      const forecast = data.forecast.forecastday[i];
      weatherSection.appendChild(createCard(forecast));
    }
  } else {
    for (let i = 0; i < 3; i++) {
      weatherSection.appendChild(createCard());
    }
  }

  weatherSection.classList.add("grow", "w-full", "flex", "gap-5");
  target.classList.add("grow", "w-full", "flex", "flex-col", "gap-5");
  target.appendChild(weatherSection);
}

function condition(data: forecast | currentResponse) {
  const condition = "day" in data ? data.day.condition : data.condition;
  const section = document.createElement("div");

  const text = document.createElement("h3");
  text.innerText = condition.text;
  text.classList.add("grow");

  const icon = document.createElement("img");
  icon.src = condition.icon;
  icon.width = 40;
  icon.height = 40;

  section.append(text, icon);
  section.classList.add(
    "flex",
    "justify-between",
    "items-center",
    "gap-3",
    "w-100"
  );
  return section;
}

function createCard(data?: forecast | currentResponse) {
  const card = document.createElement("article");

  if (data) {
    if ("date" in data) {
      const date = document.createElement("h2");
      date.innerText = data.date;
      date.classList.add("text-xl", "w-full");
      card.appendChild(date);
    }
    card.append(condition(data));
    "date" in data
      ? card.append(...forecastInfo(data.day))
      : card.append(...currentInfo(data));
    card.classList.add(...weatherClasses(data));
  } else {
    card.classList.add("animate-pulse");
  }

  card.classList.add(
    "basis-1/3",
    "rounded-xl",
    "h-full",
    "p-3",
    "flex",
    "flex-wrap",
    "justify-center",
    "items-center",
    "text-center",
    "gap-10"
  );
  return card;
}

function createHeader(data?: locationResponse) {
  const header = document.createElement("header");

  if (data) {
    const mainHeading = document.createElement("h1");
    mainHeading.innerText = `${data.name}, ${data.country}`;
    mainHeading.classList.add("text-3xl", "font-semibold");

    const time = document.createElement("h4");
    time.innerText = data.localtime;
    time.classList.add("text-lg");

    header.append(mainHeading, time);
  } else {
    const headingSkeleton = document.createElement("div");
    headingSkeleton.classList.add("bg-slate-800", "h-16", "rounded");
    header.appendChild(headingSkeleton);
    header.classList.add("animate-pulse", "h-20");
  }

  header.classList.add("w-full", "text-center");
  return header;
}

function currentInfo(data: currentResponse): HTMLDivElement[] {
  const tempContainer = currentTemp(data);
  const skyContainer = skyInfo(data);

  return [tempContainer, skyContainer];
}

function currentTemp(data: currentResponse) {
  const tempContainer = document.createElement("div");

  const temp = document.createElement("h1");
  temp.innerText = `Feels Like: ${data.feelslike_c.toString()}°C`;

  const humidity = document.createElement("h1");
  humidity.innerText = `Humidity: ${data.humidity.toString()}%`;

  tempContainer.append(temp, humidity);
  tempContainer.classList.add(
    "flex",
    "justify-center",
    "gap-3",
    "text-xl",
    "w-full"
  );

  return tempContainer;
}

function forecastInfo(data: day) {
  const tempContainer = forecastTemp(data);

  return [tempContainer];
}

function forecastTemp(data: day) {
  const tempContainer = document.createElement("div");

  const mintemp_c = document.createElement("h3");
  mintemp_c.innerText = `Min: ${data.mintemp_c.toString()}°C`;

  const avgtemp_c = document.createElement("h3");
  avgtemp_c.innerText = `Avg: ${data.avgtemp_c.toString()}°C`;

  const maxtemp_c = document.createElement("h3");
  maxtemp_c.innerText = `Max: ${data.maxtemp_c.toString()}°C`;

  tempContainer.append(mintemp_c, avgtemp_c, maxtemp_c);
  tempContainer.classList.add("flex", "gap-3", "text-xl");
  return tempContainer;
}

function skyInfo(data: currentResponse) {
  const skyContainer = document.createElement("div");

  const cloud = document.createElement("h5");
  cloud.innerText = `Cloud: ${data.cloud.toString()}%`;

  const precip_mm = document.createElement("h5");
  precip_mm.innerText = `Rain: ${data.precip_mm.toString()}mm`;

  const uv = document.createElement("h5");
  uv.innerText = `UV: ${data.uv.toString()}`;

  const wind_kph = document.createElement("h5");
  wind_kph.innerText = `Wind: ${data.wind_kph.toString()}kph`;

  skyContainer.classList.add("flex", "gap-3", "text-xl");
  skyContainer.append(cloud, precip_mm, uv, wind_kph);
  return skyContainer;
}

function weatherClasses(data: currentResponse | forecast) {
  const weather =
    "date" in data ? data.day.condition.text : data.condition.text;

  if (weather.includes("Sun") || weather.includes("Clear")) {
    return ["bg-amber-700", "shadow-xl", "shadow-amber-800"];
  } else if (weather.includes("drizzle") || weather.includes("rain")) {
    return ["bg-blue-700", "shadow-xl", "shadow-blue-800"];
  } else if (weather.includes("lightning") || weather.includes("thunder")) {
    return ["bg-yellow-500", "shadow-xl", "shadow-yellow-600"];
  } else {
    return ["bg-slate-700", "shadow-xl", "shadow-slate-800"];
  }
}

export { displayWeather };
