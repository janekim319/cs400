import { Component, OnInit, Input} from '@angular/core';
import {WEATHER} from '../models/weatherModel';
import {WeatherAPIService} from '../services/weather-api.service';

@Component({
  selector: 'app-weather-display-result',
  templateUrl: './weather-display-result.component.html',
  styleUrls: ['./weather-display-result.component.css']
})
export class WeatherDisplayResultComponent implements OnInit {
  @Input() returnedWeather: WEATHER[];

  constructor(private weatherService: WeatherAPIService) { }

  ngOnInit() {
  }

}
