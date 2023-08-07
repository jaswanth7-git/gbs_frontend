import { Injectable } from '@angular/core';
import { map, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApicallService {

  constructor(private http: HttpClient) { }

  baseUrl = "http://localhost:9000/";

  getApi(endPoint: any): Observable<any> {
    return this.http.get(this.baseUrl + endPoint).pipe(map((res) => res));
  }

  postApi(endPoint: any, data: any): Observable<any> {
    return this.http
      .post(this.baseUrl + endPoint, data)
      .pipe(map((res) => res));
  }
    putApi(endPoint: any, data: any): Observable<any> {
    return this.http
      .put(this.baseUrl + endPoint, data)
      .pipe(map((res) => res));
  }
}
