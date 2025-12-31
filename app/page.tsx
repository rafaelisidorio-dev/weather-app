import { getWeather } from "@/lib/utils";
import Header from "@/components/layout/Header";
import { bricolageGrotesque } from "./layout";
import Form from "@/components/ui/Form";

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

      <div>
        <h1
          className={`${bricolageGrotesque.className} text-center text-5xl/15 sm:text-5xl`}
        >
          How's the sky looking today?
        </h1>

        <div className="flex justify-center mt-18 mb-12">
          <Form />
        </div>
      </div>

      <main>
        <h1>
          Location: {name}, {country}
        </h1>

        <h1>Temperature: {temperature} °C</h1>
        <h1>Feels like: {apparent_temperature} °C</h1>
        <h1>Humidity: {relative_humidity} %</h1>
        <h1>Wind: {wind_speed} km/h </h1>
        <h1>Precipitation: {precipitation} mm</h1>
      </main>
    </div>
  );
}
