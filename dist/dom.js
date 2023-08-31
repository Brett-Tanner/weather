"use strict";
function createMain(current, forecast, location) {
    const main = document.createElement("main");
    main.appendChild(createHeader());
    const weatherSection = document.createElement("section");
    weatherSection.append(createCard(), createCard(), createCard(), createCard());
    main.id = "content";
    return main;
}
function createCard(data) {
    const card = document.createElement("article");
    return card;
}
function createHeader(data) {
    const header = document.createElement("header");
    return header;
}
//# sourceMappingURL=dom.js.map