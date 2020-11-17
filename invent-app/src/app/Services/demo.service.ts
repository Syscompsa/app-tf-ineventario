import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Demo } from '../Models/Demo';
@Injectable({
  providedIn: 'root'
})
export class DemoService {

  // private apiURL = 'https://syscapi-inv.azurewebsites.net/api';
  // private apiURL = 'http://localhost:5000/api/';

  private apiURL = 'http://localhost:5000/api';


  constructor(private http: HttpClient) { }

  SaveDemo(content: Demo[]): Observable<Demo> {
    return this.http.post<Demo>(this.apiURL + '/AR_INV-QRcodProdGet/InvSave', content);
  }



}
