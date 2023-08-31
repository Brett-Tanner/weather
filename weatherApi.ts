async function getForecast(city: string) {
  const requestString = `http://api.weatherapi.com/v1/forecast.json?key=925c939da9b7415f81050421233108&days=3&q=${city}`;
  const response = await fetch(requestString);
  const data = await response.json();
  const forecast = data.forecast;
  console.log(forecast);
}

export { getForecast };
