import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  
  constructor(private http: HttpClient) {}

  getWeather(location){
    return this.http.get(
        'https://api.apixu.com/v1/current.json?key=737a78ee24e949f2a4e02910190509&q=' + location
    );
}
}
