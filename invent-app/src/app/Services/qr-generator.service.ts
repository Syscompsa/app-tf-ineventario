import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { URLGestionService } from './url-gestion.service';
import * as qrcode from 'qrcode-generator';

@Injectable({
  providedIn: 'root'
})
export class QRGeneratorService {

  // ' <div class="animated fadeIn fast"> '                    +
  //                           ' <label for="choiceTable"> Tabla a conectar: </label> '  +
  //                           ' <input id="choiceTable" placeholder="Nombre de tabla" ' +
  //                           ' type="text" style="border: none; '                      +
  //                           ' border-bottom: solid 0.5px white; '                     +
  //                           ' background-color: white; "> ';                          +
  //                           ' </div> '


  public env = environment;
  constructor(private http: HttpClient, private gUrl:URLGestionService) { }

  optionsDesignerQR(valueA, valueB, option, ID) {

    const valID = document.getElementById(ID);
    switch(option) {
      case 'a':
          valID.innerHTML = '';
          break;
      case 'b':
        console.log(option);
          break;
      default:
        console.log(option);
          break;
    }
    
  }

  createQRO(id, imgs, data, EMPRESA) {
    let img = imgs;
    const qr = qrcode(4, 'L');
    // const url = `https://alp-cloud.com:8446/api/AR_INV-QRcodProdGet/getPlaca/${placa}`;
    qr.addData(data);
    qr.make();
    document.getElementById(id).innerHTML = ` <div style="display: flex; font-family: arial; justify-content: center; align-items: center;  padding: 1px;">
                                                <div id="${id}">${qr.createSvgTag(2.0)}</div>
                                                  <div class="text">
                                                    <div id="EMPRESA" style="font-size: 7pt;">
                                                      <strong>${EMPRESA}</strong>
                                                    
                                                    <!--<img src="${img}" style=" width: 40px; height: 35px; margin-top: 25px;">--!><br>
                                                  Cod.: <strong>${data}</strong>
                                                  </div>
                                                <div>
                                              </div>`;
  }


  getWorkers() {
    
  }

}
