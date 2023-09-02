import { displayWeather } from "./dom.ts";

async function getForecast(city: string, main: HTMLElement) {
  const requestString = `http://api.weatherapi.com/v1/forecast.json?key=925c939da9b7415f81050421233108&days=3&q=${city}`;
  const response = await fetch(requestString);
  displayWeather(main);
  const data = await response.json();
  displayWeather(main, data);
}

export { getForecast };
