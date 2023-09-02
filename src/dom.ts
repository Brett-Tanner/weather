function createMain(
  current?: currentResponse,
  forecast?: forecastResponse,
  location?: locationResponse
) {
  const main = document.createElement("main");
  main.appendChild(createHeader());

  const weatherSection = document.createElement("section");
  weatherSection.append(createCard(), createCard(), createCard(), createCard());

  main.id = "content";
  return main;
}

function createCard(data?: forecastResponse | currentResponse) {
  const card = document.createElement("article");

  return card;
}

function createHeader(data?: locationResponse) {
  const header = document.createElement("header");

  return header;
}
