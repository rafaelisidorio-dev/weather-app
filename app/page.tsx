import getWeather from "./api/weather";
import Header from "@/components/layout/Header";

export default async function Home() {
  const {
    name,
    country,
    apparent_temperature,
    precipitation,
    relative_humidity,
    wind_speed,
    temperature,
  } = await getWeather();

  return (
    <div className="min-h-screen px-4 sm:px-28">
      <Header />

      <h1>
        {name}, {country}
      </h1>

      <h1>{temperature}°</h1>
      <h1>Feels like {apparent_temperature}</h1>
      <h1>Humidity {relative_humidity}</h1>
      <h1>Wind {wind_speed}</h1>
      <h1>Precipitation {precipitation}</h1>
    </div>
  );
}
