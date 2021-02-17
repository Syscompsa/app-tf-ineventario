import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class URLGestionService {

  constructor() { }

  // 'https://alp-cloud.com:8449'

  public urlServ ;

  public changeURL( HTTPSECURE, HOST, PORT ) {  
    // if( (HOST == '-' && PORT == '-' && HTTPSECURE == '-')
    //  || (HOST == '' && PORT == '' && HTTPSECURE == '') ) {
      
    //   //PARA ACCEDER AL SERVER LOCAL
    //   HTTPSECURE = 'http'
    //   HOST       = 'localhost'
    //   PORT       = '5000'

    //   this.urlServ = `${HTTPSECURE}://${HOST}:${PORT}`;
    
    // }

    // else {
      return this.urlServ = `${HTTPSECURE}://${HOST}:${PORT}`;
    //}

  }


}
