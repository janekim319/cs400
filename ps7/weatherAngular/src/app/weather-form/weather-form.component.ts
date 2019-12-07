import { Component, OnInit, Input } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Validators} from '@angular/forms';
import {WeatherAPIService} from '../services/weather-api.service';
import {WEATHER} from '../models/weatherModel';


@Component({
  selector: 'app-weather-form',
  templateUrl: './weather-form.component.html',
  styleUrls: ['./weather-form.component.css']
})

export class WeatherFormComponent implements OnInit {
  city = new FormControl('', [Validators.required, Validators.minLength(1)]);

  // weather: any;

  @Input() weather: WEATHER[];

  constructor(private weatherService: WeatherAPIService) { }

  ngOnInit() {
  }

  submitCity() {
    console.log(`Submitting ${this.city.value}`);

    this.weatherService.getWeather(this.city.value).subscribe

 (weather => {this.weather = weather; console.log(`Weather: ${this.weather}`)});
  }

}
