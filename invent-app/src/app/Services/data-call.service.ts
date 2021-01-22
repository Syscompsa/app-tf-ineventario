import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { Observable } from 'rxjs';
import { claseGen } from '../Models/AuthMod';
import { QRDATA } from '../Models/QRDATA';
import { Content } from '@angular/compiler/src/render3/r3_ast';
import { Dp12a120 } from '../Models/Dp12a120';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DataCallService {
  private apiURL = 'https://alp-cloud.com:8446/';
  private apiURLPOST = 'https://alp-cloud.com:8446/api/AR_INV-QRcodProdGet';

  // private apiURL = 'http://localhost:5000/';
  // private apiURLPOST = 'http://localhost:5000/api/AR_INV-QRcodProdGet';

  public ValueInit;
  public ValueFini;
  public ValuePerc;
  public env = environment;

  constructor(private http: HttpClient) { }


  geIMGDp12a120F(COD) {
    return this.http.get(this.apiURL + 'api/AR_INV-QRcodProdGet/GetImage_a120F/' + COD);
  }

  getDp12a120F(INV) {
    return this.http.get(this.apiURL + 'api/AR_INV-QRcodProdGet/Get_data_120F/' + INV);
  }

  Get_Inventariadores() {
    return this.http.get(this.apiURL + 'api/AR_INV-QRcodProdGet/Get_Inventariadores')
  }

  updateProduct(id, content) {
    return this.http.put(this.apiURL + 'api/AR_INV-QRcodProdGet/productUpdate/' + id, content);
  }

  getDataProductFilter(COD) {
    return this.http.get(this.apiURL + 'api/AR_INV-QRcodProdGet/apiGETPROD12a120/' + COD);
  }

  getDataBARRA(COD) {
    return this.http.get(this.apiURL + 'api/AR_INV-QRcodProdGet/GetMasterBarra/' + COD);
  }

  delProduct(placa) {
    return this.http.get(this.apiURL + 'api/AR_INV-QRcodProdGet/DeletProduct/' + placa);
  }

  // Obtener data
  getDataModel(codigo) {
    return this.http.get(this.apiURL + 'api/ALPTABLA/Modelo/' + codigo);
  }

  getDataClases(codigo) {
    return this.http.get(this.apiURL + 'api/ALPTABLA/RealClases/' + codigo);
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
    return this.http.get(this.apiURL + 'api/Reporteria/getReporteByParam/' + param);
  }

  fgetDataReportIng(param) {
    return this.http.get(this.apiURL + 'api/AR_INV-QRcodProdGet/getDataReportIng/' + param);
  }

  getImgByPlaca(plac) {
    return this.http.get(this.apiURL + 'api/AR_INV-QRcodProdGet/getImgByPlaca/' + plac);
  }

  getFilterImg(a, b, dep) {
    return this.http.get(this.apiURL + 'api/AR_INV-QRcodProdGet/getDataImgFilter/' + a + '/' + b + '/' + dep);
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

  // https://alp-cloud.com:8445/api/Reporteria/GetRepByCiud/a/a
  getInfoByCiudad(farm, ciud) {
    return this.http.get(this.apiURL + 'api/Reporteria/GetRepByCiud/' + farm + "/" + ciud);
  }

  getDataByPlaca() {
    return this.http.get(this.apiURL + 'api/AR_INV-QRcodProdGet/GetProduct');
  }

  getDataByPlacaId(placa) {
    return this.http.get(this.apiURL + 'api/AR_INV-QRcodProdGet/GetPlacaProduct/' + placa);
  }

  getDataImg(placa) {
    return this.http.get(this.apiURL + 'api/AR_INV-QRcodProdGet/getDataImg/' + placa);
  }

  getDataShowReport(cod, cim) {
    return this.http.get(this.apiURL + 'api/ALPTABLA/GetInfoQuest/' + cod + "/" + cim)
  }


}
