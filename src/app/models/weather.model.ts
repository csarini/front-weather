import { WeatherHistory } from "./weather-history.model";

export interface Weather{
  id: number;
  city_name: string;
  temp: number
  feels_like: number;
  weather_history: WeatherHistory[];
}
