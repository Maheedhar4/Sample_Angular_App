import { Component } from "@angular/core";
import { MatSnackBar, MatSnackBarConfig } from "@angular/material/snack-bar";

@Component({
  selector: "app-dialog",
  standalone: true,
  imports: [],
  templateUrl: "./dialog.component.html",
  styleUrl: "./dialog.component.css",
})
export class DialogComponent {
  constructor(private _snackBar: MatSnackBar) {}
  openSnackBar(message: string, action: string, duration?: number) {
    let config: MatSnackBarConfig = {};
    if (duration) {
      config.duration = duration;
    }
    this._snackBar.open(message, action, config);
  }
  closeSnackBar() {
    this._snackBar.dismiss();
  }
}
