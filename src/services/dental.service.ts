import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DentalRecords } from 'src/app/models/dental';

@Injectable({
	providedIn: 'root'
})
export class DentalService{
	private _url = 'http://localhost:5237';
	constructor(private http:HttpClient){}
    
	getDentalRecords(){
		return this.http.get<DentalRecords[]>(this._url + '/api/Dental');
	}
	// GetRentbyId(id:string){
	// 	return this.http.get<RentDetails[]>(this._url + `/api/Rent_details/${id}`);
	// }
	// CreateNewRent(id:string){
	// 	return this.http.post<RentDetails>(this._url + '/api/Rent_details/New_Entry',`?${id}`);
	// }
	getTotalAmount(){
		return this.http.get<number>(this._url + '/api/Dental/GetTotalAmount');
	}
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	createNewDentalRecord(body: any){
		return this.http.post<DentalRecords>(this._url + '/api/Dental/', body);
	}
}