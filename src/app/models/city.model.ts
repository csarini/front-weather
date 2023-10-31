import { Weather } from "./weather.model";

export interface City{
  id: number;
  name: string;
  weather: Weather[]
}
