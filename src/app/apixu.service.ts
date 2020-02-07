import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { CITIES } from './cities.mock';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private httpClient: HttpClient) { }

  citiesList: string[] = [
    'San Francisco, US',
    'Dakar, Senegal'
  ];
  getWeather(location) {
    return this.httpClient.get(
      'http://api.weatherstack.com/current?access_key=7ae1d57d9ff8aef4056b977d4e4e7639&query=' + location
    );
  }
  getCities() {
    return of(CITIES);
  }
}
