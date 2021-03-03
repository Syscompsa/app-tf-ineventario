import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MantenimientoCustodiosService {


  private apiURL = 'https://alp-cloud.com:8446/';
  constructor(private http: HttpClient) {  }

  
  saveCustodios(content) {
    return this.http.post(this.apiURL + 'api/Custodios/PostCust', content);
  }

  //api/Custodios



}
