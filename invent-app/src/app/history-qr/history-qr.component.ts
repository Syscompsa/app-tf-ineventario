import { Component, OnInit } from '@angular/core';
import { GQRService } from '../Services/gqr.service';
import { QRDATA } from '../Models/QRDATA';
import * as qrcode from 'qrcode-generator';
// const qrcode = require('qrcode-generator');


@Component({
  selector: 'app-history-qr',
  templateUrl: './history-qr.component.html',
  styleUrls: ['./history-qr.component.css']
})
export class HistoryQRComponent implements OnInit {

  public dataQRExtract: QRDATA[] = [];
  public https = 'https://alp-cloud.com:8445/api/AR_INV-QRcodProdGet/getPlaca/';

  constructor(public QRData: GQRService) { }

  ngOnInit() {
    this.QRDataFunc();
    // this.QRData.getQRGen().subscribe(x => {
    //   console.log(x)
    // })
  }

  prints() {
    // const a = document.getElementById('const');
    window.print();    
  }

  QRDataFunc() {
    this.QRData.getQRGen().subscribe(x => {
      this.dataQRExtract = x;
      console.log("this.dataQRExtract");
      console.log(this.dataQRExtract);
      const dataQRDiv = document.getElementById('dataQR');
      // const placa = [];
      console.log(this.https.length);
      console.log(this.dataQRExtract);
      // for (let i = 0; i <= this.dataQRExtract.length; i++) {
      //   const createPlaca = document.createElement('div');
      //   createPlaca.setAttribute('id', this.dataQRExtract[i].id.toString());
      //   createPlaca.setAttribute('class', 'el');
      //   dataQRDiv.appendChild(createPlaca);

      //   const dataDiv =  document.getElementById(this.dataQRExtract[i].id.toString());
      //   dataDiv.style.border = 'solid 0.5px gray';
      //   dataDiv.style.width = '140px';
      //   dataDiv.style.marginTop = '5px';
      //   dataDiv.style.backgroundColor = 'white';
      //   dataDiv.style.borderRadius = '5px';
      //   dataDiv.style.borderStyle = 'dashed';
      //   dataDiv.style.padding = '15px';
      //   dataDiv.style.fontSize = '9pt';

      //   const url = this.https + this.dataQRExtract[i].placa;

      //   this.createQR(dataDiv, url);

      //   const createDataA = document.createElement('p');
      //   createDataA.textContent =  ` No. Placa:  ${this.dataQRExtract[i].placa}`;
      //   const createDataB = document.createElement('p');
      //   createDataB.textContent =  ` Nombre:  ${this.dataQRExtract[i].nombre}`;

      //   createPlaca.appendChild(createDataA);
      //   createPlaca.appendChild(createDataB);
      //   if (screen.width <= 510) {
      //     dataDiv.style.width = '100%';
      //   }
      // }
    });
  }

  createQR(obj, http) {
    const qr = qrcode(4, 'L');
    qr.addData(http);
    qr.make();
    obj.innerHTML = qr.createImgTag();
  }

  createQRO(placa, data){
    var qr = qrcode(4, 'L');
    const url = this.https + data
    qr.addData(url);
    qr.make();
    document.getElementById(placa).innerHTML = qr.createImgTag();
  }

  // Estafuncion cambia la altura de este div al momento de imprimir
  changeHeight(h) {
    const dataQR = document.getElementById('dataQR');
    dataQR.style.height = h;
  }

}
