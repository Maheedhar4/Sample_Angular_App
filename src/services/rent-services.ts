import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { ExpectedRent } from 'src/app/models/rent'


@Injectable({
    providedIn: 'root'
  })
export class RentService{

    private _url = "http://localhost:5237"
    constructor(private http: HttpClient) { }

    getExpectedRent(){
        return this.http.get<ExpectedRent[]>(this._url + '/Rent/GetRent');
    }

    postExpectedRent(flat: string , Amount:string ){

        // const RentDetails= {
        //     threeBHK: Amount
        // };
        // console.log('RentDetails', RentDetails);
        return this.http.post<ExpectedRent>(this._url + '/post/Rent','?flat=threeBHK&Amount=17000');
    }
}