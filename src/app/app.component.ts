import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";
import { DentalComponent } from "./dental/dental.component";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    DentalComponent,
    MatButtonModule,
    MatCardModule,
    MatSidenavModule,
    MatIconModule,
  ],
})
export class AppComponent {
  title = `Maheedhar's App`;
  events: string[] = [];
  opened: boolean = false;

  constructor() {}
}
