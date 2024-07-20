import { Component, importProvidersFrom } from "@angular/core";
import {
  FormBuilder,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
} from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatNativeDateModule } from "@angular/material/core";
import { MatCardModule } from "@angular/material/card";
import { MatSelectModule } from "@angular/material/select";
import { JsonPipe } from "@angular/common";
import { MatButtonModule } from "@angular/material/button";
import { DentalService } from "src/services/dental.service";

import { DentalRecords } from "../models/dental";
import moment from "moment"; // Import moment.js for date formatting
import { DialogComponent } from "src/app/dialog/dialog.component";

@Component({
  selector: "app-dental-form",
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatSelectModule,
    JsonPipe,
    MatButtonModule,
    DialogComponent,
  ],
  templateUrl: "./dental-form.component.html",
  styleUrl: "./dental-form.component.css",
  providers: [DialogComponent],
})
export class DentalFormComponent {
  postId?: {
    Timestamp: number;
    Machine: number;
    Pid: number;
    Increment: number;
  };
  dentalRecordForm = this.formBuilder.group({
    date: ["", Validators.required],
    reason: ["", Validators.required],
    AmountCleared: ["", Validators.required],
    SourceBank: ["", Validators.required],
    TargetBank: ["", Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private dentalService: DentalService,
    private _snackBar: DialogComponent
  ) {}
  // reset form values
  reset(form: FormGroup) {
    form.reset();
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value

    console.warn(this.dentalRecordForm.value);
    const formValue = this.dentalRecordForm.value;
    // let formValuejson = this.dentalRecordForm.
    console.log(typeof formValue);
    // Convert date to 'yyyy-MM-dd' format
    if (formValue.date) {
      formValue.date = moment(formValue.date).format("YYYY-MM-DD");
    }
    console.info(this.dentalRecordForm.value);
    //Call the post request to add the record
    this.dentalService.addDentalRecord(formValue).subscribe({
      next: (data: DentalRecords) => {
        this.postId = data.Id;
        this._snackBar.openSnackBar("Record was added successfully", "close");
      },
      error: (error) => {
        console.error("Error occurred:", error);
        this._snackBar.openSnackBar("Error in adding record", "close");
      },
    });
    this.reset(this.dentalRecordForm);
  }
}
