import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { claseGen } from '../Models/AuthMod';
import { QRDATA } from '../Models/QRDATA';

@Injectable({
  providedIn: 'root'
})
export class DataCallService {
  private apiURL = 'https://alp-cloud.com:8445/';
  private apiURLPOST = 'https://alp-cloud.com:8445/api/AR_INV-QRcodProdGet';

  constructor(private http: HttpClient) { }

  //Obtener data
  getDataModel(codigo) {
    return this.http.get(this.apiURL + 'api/ALPTABLA/Modelo/' + codigo);
  }

  getDataGrupoActivo(codigo) {
    return this.http.get(this.apiURL + 'api/ALPTABLA/GrupoActivoGen/' + codigo);
  }

  getDataCiud(codigo) {
    return this.http.get(this.apiURL + 'api/ALPTABLA/ACTCIU/' + codigo);
  }

  getDataCustodio(codigo){
    return this.http.get(this.apiURL + 'api/ALPTABLA/custodio/' + codigo);
  }

  getDataCuentas(codigo){
    return this.http.get(this.apiURL + 'api/ALPTABLA/cuentas/'+ codigo);
  }

  getDataGrup(codigo){
    return this.http.get(this.apiURL + 'api/Grup/GetGrupo/'+ codigo);
  }

  saveDataInv(content: QRDATA): Observable<QRDATA>{
    return this.http.post<QRDATA>(this.apiURLPOST + '/ProductoSave/', content);
  }

  //Servicios para Reporteria...
  saveReport(content) {
    return this.http.post(this.apiURL + 'api/Reporteria/reportSave/', content);
  }

  getReport(){
    return this.http.get(this.apiURL + 'api/Reporteria/getReporte/');
  }

}

