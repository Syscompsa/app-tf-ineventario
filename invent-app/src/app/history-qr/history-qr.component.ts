import { Component, OnInit } from '@angular/core';
import { GQRService } from '../Services/gqr.service';
// import { QRDATA } from '../Models/QRDATA';
import * as qrcode from 'qrcode-generator';
// import { DataCallService } from '../Services/data-call.service';
// const qrcode = require('qrcode-generator');
import Swal from 'sweetalert2';
import { createPopper } from '@popperjs/core';
import { PageEvent } from '@angular/material/paginator';
import { QRGeneratorService } from '../Services/qr-generator.service';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-history-qr',
  templateUrl: './history-qr.component.html',
  styleUrls: ['./history-qr.component.css']
})
// public data: DataCallService, 
export class HistoryQRComponent implements OnInit {
  constructor(public QRData: GQRService, public QRmethod: QRGeneratorService) { }

  public _nPageCont: any = 1;
  public dataQRExtract: any;
  // public https = 'https://alp-cloud.com:8446/api/AR_INV-QRcodProdGet/getPlaca/';
  public conterA = true;
  public conterB = false;
  public departemento;
  public cont;
  public SearchDep = '0';
  public custodios;
  public cantCust;
  public Marcas;
  public Mcs;
  public filtro;
  public IDS;
  public ida = 1;
  public idb = 2;
  public impr;
  public ensi = true;
  public pixelBorder = 2;
  public contadorProdAct = 0;
  public placaData;
  public arr: any = [];
  public indice;
  public contador = 0;
  public tooltipView;
  public filterPost = '';
  public filterPostCust = '';
  public adnimBool = false;
  public QRCOUNT = 0;
  public sesHiystPrint;

  public env = environment;


  ngOnInit() {
    this.sesHiystPrint = localStorage.getItem('hystPrint');
    this._nPageCont = localStorage.getItem('hystPrint');
    // this.getMarcRep();
    // this.getQR_F();
    //this.viewOptionsB();
    
    const a = document.getElementById('prevImprimir');
    console.log(a);
    a.style.transform = 'translate(-155px)';

    this.getWorkers();

  }


  getWorkers() {
    console.log(this.QRData.getWorkers('b', 'a000').subscribe( WORKERS => {
      this.dataQRExtract = WORKERS;
      this.contadorProdAct = this.dataQRExtract.length;
      console.log( this.dataQRExtract );      
    }));
  }

  createQR(id, Data){
    this.QRmethod.createQRO(id, '', Data, 'EXPOSYNERGY S.A.');
  }


  shist(a) {
    localStorage.setItem('hystPrint', a);
    this.sesHiystPrint = localStorage.getItem('hystPrint');
    // console.log(a);
  }

  overProduct(ids, disp) {
    const tooltip = document.getElementById(ids);
    tooltip.style.display = 'none';
    tooltip.style.display = disp;
  }

  imprimirUnidad(placa) {

    const ids = document.getElementById(`box-${placa}`);
    const contenidoPrev = document.getElementById(`contenidoPrev`);
    const modImp = document.getElementById('modalPrint');
    let counLi = document.getElementsByTagName('li');

    switch (this.ensi) {

      case true:
        this.ensi = false;
        // this.showContLi(true);
        contenidoPrev.appendChild(this.createLi(placa));
        this.QRCOUNT = counLi.length - (8);
        ids.style.border = 'dashed 2px green';
        ids.style.borderRadius = '5px';
        ids.style.boxShadow = '3px 3px 7px rgba(0,0,0,0.5)';
        ids.style.transition = 'ease all 0.5s';
        // modImp.appendChild(this.createLi(id, placa));
        break;

      case false:
        this.ensi = true;
        // this.showContLi(false);
        contenidoPrev.removeChild(document.getElementById(`li-${placa}`));
        this.QRCOUNT = counLi.length - (8);
        ids.style.border = 'solid 1px gray';
        ids.style.borderRadius = '0px';
        ids.style.boxShadow = '3px 3px 7px rgba(0,0,0,0.0)';
        ids.style.transition = 'ease all 0.5s';
        break;
    }

  }

  public imgLogo: string = '';
  uploadFotoLogo() {

  }


  animhide() {

    const a = document.getElementById('prevImprimir');
    const b = document.getElementById('spclo');
    const c = document.getElementById('closeI');
    
    switch (this.adnimBool) {

      case true:
        this.adnimBool = false;
        a.style.animation = 'ease prevImprimirAnim 0.5s';
        setTimeout(() => {
          a.style.transform = 'translate(-155px)';
          c.style.backgroundColor = 'orange';
          c.style.color = 'black';
          b.setAttribute('class', 'icon-right-open');
        }, 500);
        break;

      case false:
        this.adnimBool = true;
        a.style.animation = 'ease prevImprimirAnimC 0.5s';
        b.setAttribute('class', 'icon-left-open');
        setTimeout(() => {
          a.style.transform = 'translate(0px)';
          c.style.backgroundColor = 'cornflowerblue';
          c.style.color = 'rgb(52, 21, 102)';
          b.setAttribute('class', 'icon-left-open');
        }, 500);
        break;

      default:
        break;

    }

  }

  public contEt: number;
  public contEtiquetas: boolean;
  showContEtiq(a) {
   this.contEtiquetas = a;
   return this.contEt;
  }

  public _wCharge;

  createLi(placaText) {

    const node = document.createElement('li');
    const logo = document.createElement('img');
    node.setAttribute('id', `li-${placaText}`);
    node.setAttribute('class', 'liPrint animated fadeInLeft fast');
    node.style.listStyle = 'none';
    node.style.padding = '2px';

    //#region estilos
    // node.style.borderBottom = 'dashed 1px gray';
    const createSects = document.createElement('section');
    node.style.width = '160px';
    node.style.height = '78px';
    node.style.marginBottom = '12px';
    node.style.marginTop = '12px';
    node.style.display = 'flex';
    node.style.justifyContent = 'center';
    node.style.alignItems = 'center';
    node.style.backgroundColor = 'whitesmoke';
//#endregion

    const createDiv = document.createElement('div');
    createDiv.innerHTML = ` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <img src='${this.imgLogo}' width='50px' height='auto'>`

    createDiv.style.fontSize = '7pt';
    node.appendChild(createSects);
    node.appendChild(createDiv);
    node.appendChild(logo);
    const qr = qrcode(4, 'L');
    // const urlD =  `https://alp-cloud.com:8446/api/AR_INV-QRcodProdGet/getPlaca/${placaText}`;
    qr.addData(placaText);
    qr.make();
    createSects.innerHTML = qr.createSvgTag(1.6);

    //this.QRmethod.createQRO(placaText, imgs, data);

    return node;

  }


  limpiarLi() {

    const lis = document.getElementsByTagName('li');
    const contenidoPrev = document.getElementById(`contenidoPrev`);
    contenidoPrev.removeChild(lis[3]);
    this.QRCOUNT = lis.length - (8);

  }

  imprSelec(a) {
    var ficha = document.getElementById(a);
    ficha.style.fontFamily = 'arial';
	  let ventimp = window.open(' ', 'popimpr');
	  ventimp.document.write( ficha.innerHTML);
	  ventimp.document.close();
    ventimp.print();
    ventimp.close();
	}

  objectSelectStyle(obj, color, styleBorder, tam) {
    obj.style.border = `${styleBorder} ${tam} ${color}`;
    obj.style.transition = `ease all 0.5s`;
  }

  retAnim(param) {
   const an = document.getElementById('an');
   an.style.animationName = param;
  }

  filter(a) {
    this.filtro = a;
  }

  viewOptionsA() {
    this.conterA = false;
    this.conterB = true;
    const a = document.getElementById('bnA');
    const b = document.getElementById('bnB');
    a.style.color = 'white';
    a.style.backgroundColor = 'rgba(0,0,0,0.4)';
    a.style.borderTopRightRadius = '6px';
    a.style.borderTopLeftRadius = '6px';
    a.style.boxShadow = '0px 0px 7px rgba(0,0,0,0.6)';
    a.style.borderRight = 'solid 1px #777777';
    a.style.borderTop = 'solid 1px #B8B8B8';
    a.style.borderLeft = 'solid 1px #CACACA';
    b.style.borderRight = 'solid 0px transparent';
    b.style.borderTop = 'solid 0px transparent';
    b.style.borderLeft = 'solid 0px transparent';
    b.style.boxShadow = '0px 0px 7px rgba(0,0,0,0.0)';
    b.style.backgroundColor = 'transparent';
    b.style.color = 'gray';
  }


  prints() {
    var ficha = document.getElementById('dataQR');
    let ventimp = window.open(' ', 'popimpr');
    ventimp.document.write( ficha.innerHTML );
    ventimp.document.close();
    // ficha.style.fontFamily = 'Arial';
    ventimp.print();
    ventimp.close();
  }

  // Estafuncion cambia la altura de este div al momento de imprimir
  changeHeight(h) {
    const dataQR = document.getElementById('dataQR');
    dataQR.style.height = h;
  }

}
