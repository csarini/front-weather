import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { City } from 'src/app/models/city.model';
import { Weather } from 'src/app/models/weather.model';
import { CityService } from 'src/app/services/city.service';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit  {

  public form: FormGroup;
  public cities: City[] = [];
  public weather: Weather;
  public cityText: string;
  public weatherText: string;
  public displayedColumns: string[] = ['country_name', 'city_name', 'temp', 'feels_like'];
  public dataSource: any[];



  constructor(
    private weatherService: WeatherService,
    private cityService: CityService,
    private _formBuilder: FormBuilder,
  ) {}


  ngOnInit(): void {
    this.componentConfig();
  }

  public componentConfig(){
    try {
      this.createForm();
      this.loadCities();
    } catch (error) {
      console.error(error);
    }
  }

  public createForm() {
    try {
      this.form = this._formBuilder.group({
        city: ['', [Validators.required]],
        history: [false, [Validators.required]],
      });
    } catch (error) {
      console.error(error);
    }
  }

  public loadCities(){
    try {
      this.cityService.get()
      .subscribe(response => {
        this.cities = response as City[];
      });
    } catch (error) {
      console.error(error);
    }
  }

  public assignFormValues(){
    try {

    } catch (error) {
      console.error(error);
    }
  }

  public SearchWeather(){
    try {
      let city = this.form.get('city')?.value;
      let history = this.form.get('history')?.value;
      this.weatherService.getByCity(city, history)
      .subscribe(response => {
        this.weather = response as Weather;
        this.cityText = this.weather.city_name + ', Argentina';
        this.weatherText = this.weather.temp + 'ºC - Sensación Térmica ' + this.weather.feels_like + 'ºC' ;
        this.dataSource = this.weather.weather_history;
      })
    } catch (error) {
      console.error(error);
    }
  }
}
