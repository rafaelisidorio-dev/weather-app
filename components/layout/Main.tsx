import { WeatherResponse } from "@/@types/api";

interface MainProps {
  location?: string;
  weatherData: WeatherResponse | null;
}

export default function Main({ location, weatherData }: MainProps) {
  return (
    <main>
      <h1>Location: {location}</h1>

      <h1>Temperature: {weatherData?.current.temperature_2m} °C</h1>
      <h1>Feels like: {weatherData?.current.apparent_temperature} °C</h1>
      <h1>Humidity: {weatherData?.current.relative_humidity_2m} %</h1>
      <h1>Wind: {weatherData?.current.wind_speed_10m} km/h </h1>
      <h1>Precipitation: {weatherData?.current.precipitation} mm</h1>
    </main>
  );
}
