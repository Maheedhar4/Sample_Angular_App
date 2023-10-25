import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { EmployeeMdb } from "src/app/models/employee";


@Injectable({
    providedIn:'root'
})
export class EmployeeService{
    private _url= "http://localhost:5237"
    constructor(private http: HttpClient) { }

    getEmployee(){
        return this.http.get<EmployeeMdb[]>(this._url + '/api/Employee');
    }
}