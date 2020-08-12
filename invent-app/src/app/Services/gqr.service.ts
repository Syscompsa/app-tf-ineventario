import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QRDATA } from '../Models/QRDATA';
@Injectable({
  providedIn: 'root'
})
export class GQRService {

  private apiURL = 'https://syscapi-inv.azurewebsites.net/api';

  constructor(private http: HttpClient) { }

  getQRGen(): Observable<QRDATA[]>{
    return this.http.get<QRDATA[]>(this.apiURL + '/AR_INV-QRcodProdGet/getQRGen');
  }

}
