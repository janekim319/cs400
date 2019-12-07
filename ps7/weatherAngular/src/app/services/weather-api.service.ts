import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {WEATHER} from '../models/weatherModel';

@Injectable({
  providedIn: 'root'
})
export class WeatherAPIService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  weatherEndpoint = 'http://localhost:3000/ps4/new';

  getWeather(city): Observable<WEATHER[]> {
    return this.httpClient.post<WEATHER[]>(this.weatherEndpoint, {
      name: city

    });
  }

  constructor(private httpClient: HttpClient) { }
}
