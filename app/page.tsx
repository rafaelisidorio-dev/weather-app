"use client";

import Header from "@/components/layout/Header";
import Form from "@/components/ui/Form";
import IconLoading from "@/public/icon-loading.svg";

import { bricolageGrotesque } from "./layout";
import { fetchLocationData, fetchWeatherData } from "@/lib/utils";
import { useEffect, useState } from "react";

import Image from "next/image";
import { GeoResponse, WeatherResponse } from "@/@types/api";
import Main from "@/components/layout/Main";

export default function Home() {
  const [loading, setLoading] = useState(false);
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
    setLoading(true);
    try {
      const data = await fetchWeatherData(location.lat, location.lon);
      console.log(data);
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadWeatherData();
  }, [location.name]);

  return (
    <div className="min-h-screen px-4 sm:px-28">
      <Header />
      <div>
        <h1
          className={`${bricolageGrotesque.className} text-center text-5xl/15 sm:text-5xl`}
        >
          How&apos;s the sky looking today?
        </h1>

        <div className="flex justify-center mt-18 mb-12">
          <Form handleSearch={handleSearch} />
        </div>
      </div>

      {loading ? (
        <div>
          <Image src={IconLoading} alt="Icon Loading" />
        </div>
      ) : (
        <Main location={location?.name} weatherData={weatherData} />
      )}
    </div>
  );
}
