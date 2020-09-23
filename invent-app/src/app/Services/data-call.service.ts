import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { claseGen } from '../Models/AuthMod';
import { QRDATA } from '../Models/QRDATA';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Dp12a120 } from '../Models/Dp12a120';

@Injectable({
  providedIn: 'root'
})
export class DataCallService {
  private apiURL = 'https://alp-cloud.com:8445/';
  private apiURLPOST = 'https://alp-cloud.com:8445/api/AR_INV-QRcodProdGet';

  constructor(private http: HttpClient) { }

  updateProduct(content: Dp12a120): Observable<Dp12a120> {
    return this.http.put<Dp12a120>(this.apiURL + 'api/AR_INV-QRcodProdGet/productUpdate/' + content.id, content)
  }

  delProduct(placa) {
    return this.http.get(this.apiURL + 'api/AR_INV-QRcodProdGet/DeletProduct/' + placa);
  }

  // Obtener data
  getDataModel(codigo) {
    return this.http.get(this.apiURL + 'api/ALPTABLA/Modelo/' + codigo);
  }

  getDataMarca(codigo) {
    return this.http.get(this.apiURL + 'api/ALPTABLA/MasterIA1/' + codigo);
  }

  getDataGrupoActivo(codigo) {
    return this.http.get(this.apiURL + 'api/ALPTABLA/GrupoActivoGen/' + codigo);
  }

  getDataCiud(codigo) {
    return this.http.get(this.apiURL + 'api/ALPTABLA/ACTCIU/' + codigo);
  }

  getDataDep(codigo) {
    return this.http.get(this.apiURL + 'api/ALPTABLA/DPTOS/' + codigo);
  }

  getDataCustodio(codigo) {
    return this.http.get(this.apiURL + 'api/ALPTABLA/custodio/' + codigo);
  }

  getDataCuentas(codigo) {
    return this.http.get(this.apiURL + 'api/ALPTABLA/cuentas/' + codigo);
  }

  getDataGrup(codigo) {
    return this.http.get(this.apiURL + 'api/Grup/GetGrupo/' + codigo);
  }

  saveDataInv(content: Dp12a120): Observable<Dp12a120> {
    return this.http.post<Dp12a120>(this.apiURL + 'api/AR_INV-QRcodProdGet/ProductoSave/', content);
  }

  // Servicios para Reporteria...
  saveReport(content) {
    return this.http.post(this.apiURL + 'api/Reporteria/reportSave/', content);
  }

  getReport() {
    return this.http.get(this.apiURL + 'api/Reporteria/getReporte/');
  }

  getReportByParam(param) {
    return this.http.get(this.apiURL + 'api/Reporteria/GetReporteGenByParam/' + param);
  }

  getDptoReporte(master) {
    return this.http.get(this.apiURL + 'api/Reporteria/GetDptoReporte/' + master);
  }

  getMarcaReporte(master) {
    return this.http.get(this.apiURL + 'api/Reporteria/GetMarcaReporte/' + master);
  }


  getCustodioReporte(master) {
    return this.http.get(this.apiURL + 'api/Reporteria/GetCustodioReporte/' + master);
  }

  delReport(id) {
    return this.http.get(this.apiURL + 'api/Reporteria/DeleteReporte/' + id);
  }

  getDataByPlaca() {
    return this.http.get(this.apiURL + 'api/AR_INV-QRcodProdGet/GetProduct');
  }

  getDataByPlacaId(placa) {
    return this.http.get(this.apiURL + 'api/AR_INV-QRcodProdGet/getPlacaProduct/' + placa);
  }

}

