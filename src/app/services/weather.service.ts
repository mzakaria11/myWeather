import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = 'http://api.weatherapi.com/v1/current.json';
  private apiKey = '3a5dff592da94435ad833703241301'; // Replace with your API key


  constructor(private http: HttpClient) { 
    
  }

  getWeatherByCity(city: string): Observable<any> {
    const url = `${this.apiUrl}?key=${this.apiKey}&q=${city}`;
    return this.http.get(url).pipe(
      tap(data => console.log('Weather Data:', data)), // Log the data here
    );
  }
}
