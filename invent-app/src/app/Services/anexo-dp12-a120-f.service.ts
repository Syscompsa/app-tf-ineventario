import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ANEXODP12A120FService {

  private apiURL = 'https://alp-cloud.com:8446/';
  constructor(private http: HttpClient) {  }
  
  saveAnexos(content) {
    return this.http.post(this.apiURL + 'api/anexos/PostAnexo/', content);
  }

  putAnexos(placa, content) {
    return this.http.put(this.apiURL + 'api/anexos/PutAnexo/' + placa, content);
  }

  selectAnexos(placa) {
    return this.http.get(this.apiURL + 'api/anexos/SelectAnexo/' + placa);
  }

  SelectAnexoGen() {
    return this.http.get(this.apiURL + 'api/anexos/SelectAnexoGen/' );
  }
  
  deletAnexos(id) {
    return this.http.get(this.apiURL + 'api/anexos/DeletAnexo/' + id);
  }

  updateForElement(PLACA, ELEMENT, CODIGO) { 
    return this.http.get(this.apiURL + 'api/anexos/UpdateElement/' + PLACA + '/' + ELEMENT + '/' + CODIGO);
  }

  getFechaIngreso( DATE, INVENTOR ) {
    return this.http.get(this.apiURL + 'api/AR_INV-QRcodProdGet/GetDp12a120FDate/' + DATE + '/' + INVENTOR);
  }

  getReporte(INV) {
    return this.http.get(this.apiURL + 'api/Diario/GetReporteUser/' + INV );
  }
  
  getReporteCust(CUST) {   
    return this.http.get(this.apiURL + 'api/Diario/GetReporteCustodio/' + CUST );
  }

  getCustodiosByReport(CUST, ORDER) {
    return this.http.get(this.apiURL + 'api/AR_INV-QRcodProdGet/GetCustodios/' + CUST + '/' + ORDER);
  }

  getDep(DEP) {
    return this.http.get(this.apiURL + 'api/Diario/GetDeptALP/' + DEP );
  }

  getReportDep(DEP) {
    return this.http.get(this.apiURL + 'api/Diario/GetReportByOption/' + DEP );
  }

  getCodigEmpleados(cod, topOption) {
    return this.http.get(this.apiURL + 'api/diario/GeneratePlaca/'+ cod + '/' + topOption );
  }

  deleteCust(CODEC) {
    return this.http.get(this.apiURL + 'api/diario/DeleteCust/' + CODEC);
  }

}


