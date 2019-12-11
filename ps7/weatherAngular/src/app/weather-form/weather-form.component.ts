import { Component, OnInit, Input } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Validators} from '@angular/forms';
import {WeatherAPIService} from '../services/weather-api.service';
import {WEATHER} from '../models/weatherModel';
import {WeatherDisplayResultComponent} from '../weather-form/weather-display-result/weather-display-result.component';


@Component({
  selector: 'app-weather-form',
  templateUrl: './weather-form.component.html',
  styleUrls: ['./weather-form.component.css']
})

export class WeatherFormComponent implements OnInit {
  city = new FormControl('', [Validators.required, Validators.minLength(1)]);

 weather: WEATHER[];

  constructor(private weatherService: WeatherAPIService) { }

  ngOnInit() {
  }

  submitCity() {
    console.log(`Submitting ${this.city.value}`);

    this.weatherService.getWeather(this.city.value).subscribe


    ((result: any) => {

      this.weather = Array.of(result.weather);
      console.log(`stringified result: ${JSON.stringify(result)}`);
      console.log(`Result: ${result}`);
        console.log(`Weather: ${this.weather}`);
    });
  }

}
