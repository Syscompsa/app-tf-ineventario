import { Component, OnInit } from '@angular/core';
import { GQRService } from '../Services/gqr.service';
import { QRDATA } from '../Models/QRDATA';
import * as qrcode from 'qrcode-generator' 
//const qrcode = require('qrcode-generator');  


@Component({
  selector: 'app-history-qr',
  templateUrl: './history-qr.component.html',
  styleUrls: ['./history-qr.component.css']
})
export class HistoryQRComponent implements OnInit {

  public dataQRExtract: QRDATA[] = [];
  public https = 'https://syscapi-inv.azurewebsites.net/api/AR_INV-QRcodProdGet/getPlaca/';

  constructor(public QRData: GQRService) { }

  ngOnInit() {
    this.QRDataFunc();
  }

  prints(){
    let a = document.getElementById('const');
    window.print();
  }
  
  QRDataFunc() {
    this.QRData.getQRGen().subscribe(x =>{
      this.dataQRExtract = x;
      let dataQRDiv = document.getElementById('dataQR');
      let placa = [];
      console.log(this.https.length)
      console.log(this.dataQRExtract);
      for(let i = 0; i <= this.dataQRExtract.length; i++)
      {
        
        let createPlaca = document.createElement('div');
        createPlaca.setAttribute('id', this.dataQRExtract[i].id.toString());
        createPlaca.setAttribute('class', 'el');       
  
        
        
        dataQRDiv.appendChild(createPlaca);

        let dataDiv =  document.getElementById(this.dataQRExtract[i].id.toString());
        dataDiv.style.border = "solid 0.5px gray";
        dataDiv.style.width = "300px";
        dataDiv.style.marginTop = "5px";
        dataDiv.style.backgroundColor = "white";
        dataDiv.style.borderRadius = "5px";
        dataDiv.style.borderStyle = "dashed";
        dataDiv.style.padding = "15px";
        dataDiv.style.fontSize = "9pt";

        let url = this.https + this.dataQRExtract[i].placa

        this.createQR(dataDiv, url);
        
        let createDataA = document.createElement('p');
        createDataA.textContent =  ` No. Placa:  ${this.dataQRExtract[i].placa}`;
        let createDataB = document.createElement('p');
        createDataB.textContent =  ` Nombre:  ${this.dataQRExtract[i].nombre}`;
                
        createPlaca.appendChild(createDataA);
        createPlaca.appendChild(createDataB);
      
        
      }



    });
  }

  createQR(obj, http){
    var qr = qrcode(4, 'L');
        qr.addData(http);
        qr.make();
        obj.innerHTML = qr.createImgTag();
  }
  


}
