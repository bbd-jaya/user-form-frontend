import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {
  url = "http://localhost:5000/user-form"

  constructor(private http: HttpClient) { }

  submit(data: any) {
    return this.http.post(this.url, data);
  }
}
