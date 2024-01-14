import { Component} from '@angular/core';
import { WeatherService } from '../../services/weather.service';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.page.html',
  styleUrls: ['./weather.page.scss'],
})
export class WeatherPage{
  weatherData: any;
  cityName: string = '';
  constructor( private weatherService: WeatherService ) { }
  onSearchChange(event: any) {
    this.cityName = event.detail.value;
  }

  searchWeather() {
    if (this.cityName) {
      this.weatherService.getWeatherByCity(this.cityName)
        .subscribe(data => {
          this.weatherData = data;
        }, error => {
          console.error(error);
          // Handle errors (e.g., city not found, API errors)
        });
    }
  }


}
