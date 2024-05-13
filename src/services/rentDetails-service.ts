import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RentDetails } from 'src/app/models/rent-details';

@Injectable({
	providedIn: 'root'
})
export class RentDetailsService{
	private _url = 'http://localhost:5237';
	constructor(private http:HttpClient){}
    
	GetRentTable(){
		return this.http.get<RentDetails[]>(this._url + '/api/Rent_details');
	}
	GetRentbyId(id:string){
		return this.http.get<RentDetails[]>(this._url + `/api/Rent_details/${id}`);
	}
	CreateNewRent(id:string){
		return this.http.post<RentDetails>(this._url + '/api/Rent_details/New_Entry',`?${id}`);
	}
}