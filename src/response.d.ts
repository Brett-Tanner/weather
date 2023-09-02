interface forecastResponse {
  forecastday: forecast[];
}

interface currentResponse {
  cloud: number;
  condition: condition;
  feelslike_c: number;
  humidity: number;
  precip_mm: number;
  time: string;
  time_epoch: number;
  uv: number;
  wind_kph: number;
}

interface forecast {
  date: string;
  date_epoch: number;
  day: day;
  hour: hour[];
}

interface condition {
  text: string;
  icon: string;
  code: number;
}

interface day {
  avgtemp_c: number;
  condition: condition;
  daily_chance_of_rain: number;
  daily_chance_of_snow: number;
  maxtemp_c: number;
  maxwind_kph: number;
  mintemp_c: number;
  totalprecip_mm: number;
  totalsnow_cm: number;
  uv: number;
}

interface hour extends currentResponse {
  chance_of_rain: number;
  chance_of_snow: number;
  will_it_rain: boolean;
  will_it_snow: boolean;
}
