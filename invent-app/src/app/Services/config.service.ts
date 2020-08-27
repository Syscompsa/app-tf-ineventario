import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { configPresets } from '../Models/configPresets';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private apiURL = 'https://inventario-fijo.azurewebsites.net/api';

  constructor(private http: HttpClient) { }

  //Obtener Configuraciones
  getConfig(): Observable<configPresets> {
    return this.http.get<configPresets>(this.apiURL + '/AR_2-Interface/GetInterfaceConfig');
  }

  //update Config
  updateConfig(Content: configPresets): Observable<configPresets> {
    return this.http.put<configPresets>(this.apiURL + '/AR_2-Interface/UpdateInterfaceConfig/' + Content.id, Content);
  }

    
  
}
