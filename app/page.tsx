"use client";

import Header from "@/components/layout/Header";
import Form from "@/components/ui/Form";

import { bricolageGrotesque } from "./layout";
import { fetchLocationData, fetchWeatherData } from "@/lib/utils";
import { useEffect, useState } from "react";

type GeoResponse = {
  name: string;
  country: string;
  latitude: number;
  longitude: number;
};

type WeatherResponse = {
  current: {
    temperature_2m: number;
    precipitation: number;
    wind_speed_10m: number;
    relative_humidity_2m: number;
    apparent_temperature: number;
  };
};

export default function Home() {
  const [weatherData, setWeatherData] = useState<WeatherResponse | null>(null);
  const [location, setLocation] = useState({
    name: "Campinas, São Paulo",
    lat: -22.90574,
    lon: -47.061,
  });

  async function handleSearch(searchTerm: string) {
    try {
      const locationData: GeoResponse[] = await fetchLocationData(searchTerm);
      console.log(locationData);

      setLocation({
        name: `${locationData[0].name}, ${locationData[0].country}`,
        lat: locationData[0].latitude,
        lon: locationData[0].longitude,
      });
    } catch (error) {
      console.error("Error searching location", error);
    }
  }

  async function loadWeatherData() {
    try {
      const data = await fetchWeatherData(location.lat, location.lon);
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  }

  useEffect(() => {
    loadWeatherData();
  });

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
          <Form handleSearch={handleSearch} />
        </div>
      </div>

      <main>
        <h1>Location: {location.name}</h1>

        <h1>Temperature: {weatherData?.current.temperature_2m} °C</h1>
        <h1>Feels like: {weatherData?.current.apparent_temperature} °C</h1>
        <h1>Humidity: {weatherData?.current.relative_humidity_2m} %</h1>
        <h1>Wind: {weatherData?.current.wind_speed_10m} km/h </h1>
        <h1>Precipitation: {weatherData?.current.precipitation} mm</h1>
      </main>
    </div>
  );
}
