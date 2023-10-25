import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { WeatherForecast} from 'src/app/models/weather'


@Injectable({
    providedIn: 'root'
  })
export class WeatherService{
    private _url = "http://localhost:5237"
    constructor(private http: HttpClient) { }

    getWeather(){
        return this.http.get<WeatherForecast[]>(this._url + '/WeatherForecast');
    }
}
