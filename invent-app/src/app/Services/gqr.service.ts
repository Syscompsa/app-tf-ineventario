import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { QRDATA } from '../Models/QRDATA';
// import { Placa_Post_Url } from '../Models/Placa_Post_Url';
import { URLGestionService } from './url-gestion.service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class GQRService {
  // Para testear local
  private env = environment;
  public apiURL = this.Ugestion.changeURL(this.env.HTTPSECURE, this.env.HOST, this.env.PORT);

  constructor(private http: HttpClient, private Ugestion: URLGestionService) { }
  //opA: string , opB: string
  getWorkers(opA, opB) {
    return this.http.get(this.apiURL + '/api/AR_dp08r/getworkers/' + opA + '/' + opB);
  }

}
