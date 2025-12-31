"use client";

// type GeoResult = {
//   name: string;
//   country: string;
//   latitude: number;
//   longitude: number;
// };

// export type GeoResponse = {
//   results: GeoResult[];
// };

type Weather = {
  temperature_2m: number;
  precipitation: number;
  wind_speed_10m: number;
  relative_humidity_2m: number;
  apparent_temperature: number;
};

export type WeatherResponse = {
  current: Weather;
};

export async function fetchLocationData(query: string) {
  const response = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}`
  );

  const data = await response.json();

  return data.results || [];
}

export async function fetchWeatherData(lat: number, lon: number) {
  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,precipitation,wind_speed_10m,relative_humidity_2m,apparent_temperature`,
  );

  return response.json()
}
