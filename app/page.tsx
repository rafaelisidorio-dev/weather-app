import getWeather from "./api/weather";

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
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <h1>
          {name}, {country}
        </h1>

        <h1>{temperature}°</h1>
        <h1>Feels like {apparent_temperature}</h1>
        <h1>Humidity {relative_humidity}</h1>
        <h1>Wind {wind_speed}</h1>
        <h1>Precipitation {precipitation}</h1>
      </main>
    </div>
  );
}
