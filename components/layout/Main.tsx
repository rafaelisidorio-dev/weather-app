import getWeather from "@/app/lib/weather";

export default async function Main() {
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
    <div>
      <h1>
        Location: {name}, {country}
      </h1>

      <h1>{temperature}°</h1>
      <h1>Feels like {apparent_temperature}</h1>
      <h1>Humidity {relative_humidity}</h1>
      <h1>Wind {wind_speed}</h1>
      <h1>Precipitation {precipitation}</h1>
    </div>
  );
}
