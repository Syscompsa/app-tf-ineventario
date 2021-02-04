import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { QRDATA } from '../Models/QRDATA';
import { Placa_Post_Url } from '../Models/Placa_Post_Url';

@Injectable({
  providedIn: 'root'
})

export class GQRService {
  // Para testear local
  private apiURL = 'https://alp-cloud.com:8446/api';

  constructor(private http: HttpClient) { }

  getQRGenById(Placa): Observable<QRDATA[]> {
    return this.http.get<QRDATA[]>(this.apiURL + '/AR_INV-QRcodProdGet/getPlaca/' + Placa);
  }

  getQRGenByPlaca(Placa): Observable<Placa_Post_Url[]>  {
    return this.http.get<Placa_Post_Url[]>(this.apiURL + '/AR_INV-QRcodProdGet/getPlaca/' + Placa);
  }

  getPlaca(): Observable<Placa_Post_Url[]>{
    return this.http.get<Placa_Post_Url[]>(this.apiURL + '/AR_INV-QRcodProdGet/GetProduct');
  }

  getProductByPlaca(GetPlaca): Observable<QRDATA[]> {
    return this.http.get<QRDATA[]>(this.apiURL + '/AR_INV-QRcodProdGet/getPlacaProduct/' + GetPlaca);
  }

  getDataQRByCustName(CustName) {
    return this.http.get(this.apiURL + '/ALPTABLA/GetUserByCod/' + CustName);
  }

  getQR_F() {
    return this.http.get(this.apiURL + '/AR_INV-QRcodProdGet/getQRGen');
  }

}
