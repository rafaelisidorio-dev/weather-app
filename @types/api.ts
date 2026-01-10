export type GeoResponse = {
  name: string;
  country: string;
  latitude: number;
  longitude: number;
};

export type WeatherResponse = {
  current: {
    temperature_2m: number;
    precipitation: number;
    wind_speed_10m: number;
    relative_humidity_2m: number;
    apparent_temperature: number;
  };
};
