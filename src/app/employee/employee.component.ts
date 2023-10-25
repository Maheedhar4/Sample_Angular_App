import { Component } from '@angular/core';
import { EmployeeService } from 'src/services/employee-service';
import { EmployeeMdb } from '../models/employee';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  title= 'Test MongoDb'
  EmployeeData: EmployeeMdb[]=[];
  Employee_table_header: string[]=['id','name','age','city','married','hobbies']
  constructor(
    private employeeService:EmployeeService,
  ) {}
  GETEmployee(){
    this.employeeService.getEmployee().subscribe(
      (data)=>{
        this.EmployeeData= data;
        console.log('Data from MongoDB', this.EmployeeData);
    });
  }
}
