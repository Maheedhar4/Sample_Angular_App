import { Component, OnInit } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatTableModule } from "@angular/material/table";
import { MatCardModule } from "@angular/material/card";
import { MatTabsModule } from "@angular/material/tabs";
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { FormsModule } from "@angular/forms";
import { DentalService } from "src/services/dental.service";
import { DentalRecords } from "../models/dental";
import { ReactiveFormsModule } from "@angular/forms";
import { DentalFormComponent } from "../dental-form/dental-form.component";
import { MatIconModule } from "@angular/material/icon";
import { DialogComponent } from "../dialog/dialog.component";
@Component({
  selector: "app-dental",
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    DentalFormComponent,
    MatIconModule,
    DialogComponent,
  ],
  templateUrl: "./dental.component.html",
  styleUrl: "./dental.component.css",
  providers: [DialogComponent],
})
export class DentalComponent implements OnInit {
  displayedColumns: string[] = [
    "Date",
    "Reason",
    "AmountCleared",
    "SourceBank",
    "TargetBank",
    "Actions",
  ];
  dentalRecords: DentalRecords[] = [];
  public totalAmount: number = 0;

  constructor(
    private dentalService: DentalService,
    private dialog: DialogComponent
  ) {}
  ngOnInit(): void {
    this.displayDentalRecords();
  }
  // Fetches all dental records
  displayDentalRecords() {
    this.dentalService.getDentalRecords().subscribe((data) => {
      this.dentalRecords = data;
      console.warn(data);
    });
    this.displayTotalAmount();
  }
  //fetches total amount
  displayTotalAmount() {
    this.dentalService.getTotalAmount().subscribe((data) => {
      this.totalAmount = data;
      this.dialog.openSnackBar(
        `Total amount is ₹${this.totalAmount}`,
        "close",
        3000
      );
    });
  }
  deleteDentalRecord(date: string) {
    this.dentalService.deleteDentalRecord(date).subscribe({
      next: (value) => {
        this.dialog.openSnackBar(`Deleted Successfully ${value}`, "close");
        console.log("delete", value);
      },
      error: (err) => {
        this.dialog.openSnackBar(`Error while Deleting ${err}`, "close");
        console.log("err", err);
      },
    });
  }
}
