import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee/employee.component';
import { WeatherComponent } from './weather/weather.component';
import { RentDetailsComponent } from './rent-details/rent-details.component';

const routes: Routes = [
  { path: 'employee-component', component: EmployeeComponent },
  { path: 'weather-component', component: WeatherComponent },
  { path: 'rentDetails-component', component: RentDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
