import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { claseGen } from '../Models/AuthMod';

@Injectable({
  providedIn: 'root'
})
export class DataCallService {
  private apiURL = 'https://alp-cloud.com:8445/api/ALPTABLA';

  constructor(private http: HttpClient) { }

  //Obtener data
  getDataModel(codigo) {
    return this.http.get(this.apiURL + '/Modelo/' + codigo);
  }

  getDataGrupoActivo(codigo) {
    return this.http.get(this.apiURL + '/GrupoActivoGen/' + codigo);
  }

  getDataCiud(codigo) {
    return this.http.get(this.apiURL + '/ACTCIU/' + codigo);
  }

  getDataCustodio(codigo){
    return this.http.get(this.apiURL + '/custodio/' + codigo);
  }

  getDataCuentas(codigo){
    return this.http.get(this.apiURL + '/cuentas/'+ codigo);
  }

}

