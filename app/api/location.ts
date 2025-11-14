type GeoResult = {
  name: string;
  country: string;
  latitude: number;
  longitude: number;
};

type GeoResponse = {
  results: GeoResult[];
};

export default async function getLocation() {
  const res = await fetch(
    "https://geocoding-api.open-meteo.com/v1/search?name=berlin",
  );

  const data: GeoResponse = await res.json();
  const result: GeoResult = data.results[0];

  return {
    name: result.name || "",
    country: result.country,
    lat: result.latitude,
    lon: result.longitude,
  };
}
