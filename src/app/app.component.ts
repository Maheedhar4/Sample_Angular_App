import { Component } from '@angular/core';
import { RentService } from 'src/services/rent-services';
import {Employee, ExpectedRent} from './models/rent';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { DentalComponent } from './dental/dental.component';
import { MatButtonModule } from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	standalone: true,
	imports: [
		MatSlideToggleModule,
		RouterLink,
		RouterLinkActive,
		RouterOutlet,
		DentalComponent,
		MatButtonModule,
		MatCardModule,
		MatMenuModule,
		MatSidenavModule, 
		MatCheckboxModule,
		FormsModule,
		MatIconModule
	],
})
export class AppComponent {
	// eslint-disable-next-line quotes
	title = `Maheedhar's App`;
	requestFinished = false;
	events: string[] = [];
	opened: boolean= false ;

	public ExpectedRentDetails: ExpectedRent[]=[];
  
	// EmployeeData: EmployeeMdb[]=[];
	// public myDataArray : any;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	myDataArray: any;
	// displayedColumns = [];
	// @ViewChild(MatSort) sort: MatSort;
	// /**
	//  * Pre-defined columns list for user table
	//  */
	// columnNames = [{
	//   id: 'position',
	//   value: 'No.',
	// }, {
	//   id: 'name',
	//   value: 'Name',
	// },
	//   {
	//     id: 'weight',
	//     value: 'Weight',
	//   },
	//   {
	//     id: 'symbol',
	//     value: 'Symbol',
	//   }];
  
  
	// newForm = new FormGroup({
	//   fieldVal: new FormControl('607807')
	// });

	//^ test data 

	//Table header array
	displayedColumns: string[] = ['Id', 'FirstName', 'LastName', 'Email','Gender','JobTitle'];

	EmpData : Employee[] =[{
		'Id': 1,
		'FirstName': 'Johannah',
		'LastName': 'Kiffin',
		'Email': 'jkiffin0@google.pl',
		'Gender': 'F',
		'JobTitle': 'Administrative Assistant I'
	}, {
		'Id': 2,
		'FirstName': 'Eldin',
		'LastName': 'Astbery',
		'Email': 'eastbery1@geocities.jp',
		'Gender': 'M',
		'JobTitle': 'Senior Editor'
	}, {
		'Id': 3,
		'FirstName': 'Nahum',
		'LastName': 'Mounce',
		'Email': 'nmounce2@vk.com',
		'Gender': 'M',
		'JobTitle': 'Programmer II'
	}, {
		'Id': 4,
		'FirstName': 'Gallard',
		'LastName': 'Standell',
		'Email': 'gstandell3@europa.eu',
		'Gender': 'M',
		'JobTitle': 'Account Representative II'
	}, {
		'Id': 5,
		'FirstName': 'Koenraad',
		'LastName': 'Domleo',
		'Email': 'kdomleo4@cornell.edu',
		'Gender': 'M',
		'JobTitle': 'Quality Control Specialist'
	}, {
		'Id': 6,
		'FirstName': 'Uriah',
		'LastName': 'Turbat',
		'Email': 'uturbat5@aol.com',
		'Gender': 'M',
		'JobTitle': 'Accounting Assistant II'
	}, {
		'Id': 7,
		'FirstName': 'Waldemar',
		'LastName': 'Fowley',
		'Email': 'wfowley6@sun.com',
		'Gender': 'M',
		'JobTitle': 'Account Coordinator'
	}, {
		'Id': 8,
		'FirstName': 'Rodolfo',
		'LastName': 'Trenchard',
		'Email': 'rtrenchard7@yandex.ru',
		'Gender': 'M',
		'JobTitle': 'Data Coordiator'
	}, {
		'Id': 9,
		'FirstName': 'Konstance',
		'LastName': 'Dudek',
		'Email': 'kdudek8@techcrunch.com',
		'Gender': 'F',
		'JobTitle': 'Administrative Assistant I'
	}, {
		'Id': 10,
		'FirstName': 'Monti',
		'LastName': 'Perton',
		'Email': 'mperton9@youtube.com',
		'Gender': 'M',
		'JobTitle': 'Operator'
	}];

	// RentTable Header Array 
	Rent_table_header: string[]=['Date','ThreeBHK','TwoBHK','OneBHK'];
	constructor(
    private rentService: RentService,
	) {}


	ngOnInit() {
		this.myDataArray= [18000,12000,9000 ];
	}
  

	GETRentApi() {
		this.rentService.getExpectedRent().subscribe(
			(data) => {
				this.ExpectedRentDetails = data;
				console.log(this.ExpectedRentDetails,'ExpectedRent');
				// const ThreeBHK = this.ExpectedRentDetails.ThreeBHK;
				this.requestFinished = true;
				// if (this.status === "404" || this.status === "Error") {
				//   this.errorMessage = "Invalid Pincode " + enteredPinCode + "! Enter a valid one."
				//   this.requestValid = false;
				// }
				// else {
				//   this.errorMessage = "";
				//   this.requestValid = true;
				// }
			}
			// ,(error) => {
			//   // this.errorMessage = "Unexpected Error Occurred!";
			//   // this.requestValid = false;
			//   console.log('Error', error);
			// }
		);
	}
	// PostRentApi(flat:string, Amount:string) {
	//   this.rentService.postExpectedRent(flat, Amount).subscribe(
	//     (data) => {
	//       this.ExpectedRentDetails = data;
	//       this.requestFinished = true;
	//       // if (this.status === "404" || this.status === "Error") {
	//       //   this.errorMessage = "Invalid Pincode " + enteredPinCode + "! Enter a valid one."
	//       //   this.requestValid = false;
	//       // }
	//       // else {
	//       //   this.errorMessage = "";
	//       //   this.requestValid = true;
	//       // }
	//     }
	//     // ,(error) => {
	//     //   // this.errorMessage = "Unexpected Error Occurred!";
	//     //   // this.requestValid = false;
	//     //   console.log('Error', error);
	//     // }
	//   );
	// }
  
}
