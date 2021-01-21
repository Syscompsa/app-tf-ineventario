import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ANEXODP12A120FService {

  private apiURL = 'https://alp-cloud.com:8446/';

  constructor(private http: HttpClient) { }

  saveAnexos(content) {
    return this.http.post(this.apiURL + 'api/anexos/PostAnexo/', content);
  }

  putAnexos(placa, content) {
    return this.http.put(this.apiURL + 'api/anexos/PutAnexo/' + placa, content);
  }

  selectAnexos(placa) {
    return this.http.get(this.apiURL + 'api/anexos/SelectAnexo/' + placa);
  }
  
  deletAnexos(id) {
    return this.http.get(this.apiURL + 'api/anexos/DeletAnexo/' + id);
  }

}
