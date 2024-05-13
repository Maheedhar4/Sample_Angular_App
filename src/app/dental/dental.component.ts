import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {FormsModule} from '@angular/forms';
import { DentalService } from 'src/services/dental.service';
import { DentalRecords } from '../models/dental';
import { ReactiveFormsModule } from '@angular/forms';
import { DentalFormComponent } from '../dental-form/dental-form.component';


@Component({
	selector: 'app-dental',
	standalone: true,
	imports: [
		MatToolbarModule, MatButtonModule, MatIconModule, 
		MatTableModule, MatCardModule, MatTabsModule,
		MatFormFieldModule, FormsModule, MatInputModule,
		ReactiveFormsModule,MatSelectModule,DentalFormComponent
	],
	templateUrl: './dental.component.html',
	styleUrl: './dental.component.css'
})
export class DentalComponent {
	value = 'Clear me';
	displayedColumns: string[] = ['Date', 'Reason', 'AmountCleared', 'SourceBank', 'TargetBank'];
	dentalRecords: DentalRecords[]=[];
	public totalAmount: number = 0;
	constructor(private dentalService: DentalService){}
	// Fetches all dental records
	fetchAllDentalRecords(){
		this.dentalService.getDentalRecords().subscribe((data)=>{
			this.dentalRecords=data;
		});
	}
	//fetches total amount
	fetchTotalAmount(){
		this.dentalService.getTotalAmount().subscribe((data)=>{
			this.totalAmount=data;
		});
	}


	// //form
	// checkoutForm = this.formBuilder.group({
	// 	Date: '',
	// 	Reason: '',
	// 	AmountCleared: '',
	// 	SourceBank: '',
	// 	TargetBank:''
	// });
	// onSubmit(): void {
	// 	// Process checkout data here
	// 	// this.items = this.cartService.clearCart();
	// 	// ^ Add snack bar here
	// 	console.warn('Your order has been submitted', this.checkoutForm.value);
	// 	this.checkoutForm.reset();
	// }
	
}
