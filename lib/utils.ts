export async function fetchLocationData(query: string) {
  const response = await fetch(
    `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}`,
  );

  const data = await response.json();

  return data.results || [];
}

export async function fetchWeatherData(lat: number, lon: number) {
  const response = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,precipitation,wind_speed_10m,relative_humidity_2m,apparent_temperature`,
  );

  return response.json();
}
