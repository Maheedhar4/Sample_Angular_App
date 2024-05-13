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
	dentalRecordForm = this.formBuilder.group(
		{ 
			date: ['', Validators.required],
			reason: ['', Validators.required],
			AmountCleared: ['', Validators.required],
			SourceBank: ['', Validators.required],
			TargetBank: ['', Validators.required],
		});
	
	errorMessage = '';
	
	constructor(private formBuilder: FormBuilder, private dentalService: DentalService) {}
	onSubmit() {
		// TODO: Use EventEmitter with form value
		console.warn(this.dentalRecordForm.value);
		const JSONVALUE = JSON.stringify(this.dentalRecordForm.value);
		console.log(typeof(JSONVALUE));
		this.dentalService.createNewDentalRecord(this.dentalRecordForm.value);
	}
}
