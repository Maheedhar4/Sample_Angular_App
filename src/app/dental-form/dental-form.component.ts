import { Component } from '@angular/core';
import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { JsonPipe} from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { DentalService } from 'src/services/dental.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { DentalRecords } from '../models/dental';

@Component({
	selector: 'app-dental-form',
	standalone: true,
	imports: [
		MatFormFieldModule, MatInputModule, MatNativeDateModule,
		FormsModule, ReactiveFormsModule,MatDatepickerModule,
		MatCardModule, MatSelectModule, JsonPipe, MatButtonModule
	],
	templateUrl: './dental-form.component.html',
	styleUrl: './dental-form.component.css'
})
export class DentalFormComponent {
	postId?: string;
	dentalRecordForm = this.formBuilder.group(
		{ 
			date: ['', Validators.required],
			reason: ['', Validators.required],
			AmountCleared: ['', Validators.required],
			SourceBank: ['', Validators.required],
			TargetBank: ['', Validators.required],
		});
	
	errorMessage = '';
	openSnackBar(message: string, action: string) {
		this._snackBar.open(message, action);
	}
	constructor(private formBuilder: FormBuilder, 
		private dentalService: DentalService,
		private _snackBar: MatSnackBar

	) {}
	onSubmit() {
		// TODO: Use EventEmitter with form value
		console.warn(this.dentalRecordForm.value);
		const formValue = this.dentalRecordForm.value;
		console.log(typeof(formValue));
		//Call the post request to add the record
		this.dentalService.createNewDentalRecord(formValue)
			.subscribe({
				next: (data: DentalRecords) => {
					this.postId = data.id;
					this.openSnackBar('Record was added successfully', 'close');
				},
				error: (error) => {
					console.error('Error occurred:', error);
					this.openSnackBar('Error in adding record', 'close');
				}
			});
	}
}
