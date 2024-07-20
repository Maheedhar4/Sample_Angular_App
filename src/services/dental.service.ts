import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DentalRecords } from "src/app/models/dental";

@Injectable({
  providedIn: "root",
})
export class DentalService {
  private _url = "http://localhost:5237/";
  private dentalApi = this._url.concat("api/Dental/");
  private apiFunctions = {
    totalAmount: "GetTotalAmount",
  };
  constructor(private http: HttpClient) {}

  getDentalRecords() {
    return this.http.get<DentalRecords[]>(this.dentalApi);
  }
  getTotalAmount() {
    return this.http.get<number>(
      this.dentalApi.concat(this.apiFunctions.totalAmount)
    );
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  addDentalRecord(body: any) {
    return this.http.post<DentalRecords>(this.dentalApi, body);
  }
  deleteDentalRecord(date: string) {
    return this.http.delete(this.dentalApi.concat(date));
  }
  updateDentalRecord(date: string, body: any) {
    return this.http.post<DentalRecords>(this.dentalApi.concat(date), body);
  }
}
