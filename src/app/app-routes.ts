import { Route } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { WeatherComponent } from './weather/weather.component';
import { RentDetailsComponent } from './rent-details/rent-details.component';
import { DentalComponent } from './dental/dental.component';

export const appRoutes: Route[] = [
	{ path: 'employee-component', component: EmployeeComponent },
	{ path: 'weather-component', component: WeatherComponent },
	{ path: 'rentDetails-component', component: RentDetailsComponent},
	{ path: 'dental-records', component:DentalComponent}
];