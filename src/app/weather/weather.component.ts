import { Component } from '@angular/core';
import { WeatherService } from 'src/services/weather-services';
import { WeatherForecast } from '../models/weather';
import { NgFor } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

@Component({
	selector: 'app-weather',
	templateUrl: './weather.component.html',
	styleUrls: ['./weather.component.css'],
	standalone: true,
	imports: [MatTableModule, NgFor]
})
export class WeatherComponent {

	WeatherDetails: WeatherForecast[]=[];
	requestFinished = false;
	// Table Header Array 
	Weather_table_header: string[]=['date', 'temperatureC','temperatureF','summary'];
	constructor(
    private weatherService: WeatherService,
	) {}
	// sample Api to test backend connection
	weatherApi() {
		this.weatherService.getWeather().subscribe((data) => {
			this.WeatherDetails = data;
			this.requestFinished = true;
			console.log(data, 'Weatherdata');
			console.log(this.WeatherDetails, 'WeatherDetails');
		});
	}
}
