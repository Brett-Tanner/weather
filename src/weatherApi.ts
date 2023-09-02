async function getForecast(city: string) {
  const requestString = `http://api.weatherapi.com/v1/forecast.json?key=925c939da9b7415f81050421233108&days=3&q=${city}`;
  const response = await fetch(requestString);
  const data = await response.json();
  const forecast = data.forecast;
  const current = data.current;
  const location = data.location;
  console.log("forecast", forecast);
  console.log("current", current);
  console.log("location", location);
  // Use a promise all here
  // Then call create main with no args
  // Once the promise all resolves, call it again with proper args
}

export { getForecast };
