import { Component } from '@angular/core';
import { RentDetails } from '../models/rent-details';
import { RentDetailsService } from 'src/services/rentDetails-service';

@Component({
  selector: 'app-rent-details',
  templateUrl: './rent-details.component.html',
  styleUrls: ['./rent-details.component.css']
})
export class RentDetailsComponent {
  title= 'Rent Details'
  RentDetailsData: RentDetails[]=[];
  RentDetailsbyID: RentDetails[]=[];
  RentDetails_table_header: string[]=['id','flat','rentee','amount_payable','paid_on','current_bill','water_bill','costs_cleared']
  constructor(private rentDetailsService: RentDetailsService){}
  FetchAllRent(){
    this.rentDetailsService.GetRentTable().subscribe(
      (data)=>{
        this.RentDetailsData= data;
        console.log('Entire data from employees.rent_details', this.RentDetailsData);
      }
    )
  }
  FetchRentbyId(id:string){
    this.rentDetailsService.GetRentbyId(id).subscribe(
      (data)=>{
        this.RentDetailsbyID = data;
        console.log( `Data for ${id}`, this.RentDetailsbyID);
      }
    )
  }
}
