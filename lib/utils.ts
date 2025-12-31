type GeoResult = {
  name: string;
  country: string;
  latitude: number;
  longitude: number;
};

type GeoResponse = {
  results: GeoResult[];
};

type Weather = {
  temperature_2m: number;
  precipitation: number;
  wind_speed_10m: number;
  relative_humidity_2m: number;
  apparent_temperature: number;
};

type WeatherResponse = {
  current: Weather;
};

export async function getLocation() {
  const res = await fetch(
    "https://geocoding-api.open-meteo.com/v1/search?name=rio"
  );
  const data: GeoResponse = await res.json();
  const result: GeoResult = data.results[0];

  return {
    name: result?.name || "",
    country: result?.country,
    lat: result?.latitude,
    lon: result?.longitude,
  };
}

export async function getWeather() {
  const { name, country, lat, lon } = await getLocation();

  const res = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,precipitation,wind_speed_10m,relative_humidity_2m,apparent_temperature`,
  );

  const data: WeatherResponse = await res.json();
  const current: Weather = data.current;

  console.log(current)

  return {
    name,
    country,
    precipitation: current?.precipitation,
    wind_speed: current?.wind_speed_10m,
    relative_humidity: current?.relative_humidity_2m,
    apparent_temperature: current?.apparent_temperature,
    temperature: current?.temperature_2m,
  };
}
