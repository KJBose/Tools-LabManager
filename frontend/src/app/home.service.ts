import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'
import { map, filter, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  summaryUrl:string = 'http://0.0.0.0:5000';
  constructor(private http: HttpClient) { }

  getSummary() {
    return this.http.get(this.summaryUrl+"/stats").pipe(map((data: any) => {
      return data;
    }));
  }

  updateSummary() { }
}
