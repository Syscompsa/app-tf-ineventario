import { Injectable } from '@angular/core';
import { Iwebuser } from '../Models/webuser';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class WebuserService {
  private apiURL = 'https://alp-cloud.com:8445/api';

  constructor(private http: HttpClient, public router: Router) { }
    
  login(user: Iwebuser): Observable<Iwebuser> {
    return this.http.post<Iwebuser>(this.apiURL + "/UserLogin/login", user);
  }

  logout() {
    localStorage.removeItem("User");
  }

  // estaLogueado(): boolean {

  //   var exp = this.obtenerExistenciaToken();

  //   if (!exp) {
  //     // el token no existe
  //     return false;
  //   }
  //    else {
  //     return true;
  //   }
  // }


  verificacionLog(){
    if(localStorage.getItem('user') == '' || localStorage.getItem('user') == null){
      this.router.navigate(['/login']);
    }
  }

  obtenerExistenciaToken(): string {
    return localStorage.getItem("User");
  }


}
