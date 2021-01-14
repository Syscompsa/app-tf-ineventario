import { Component, OnInit } from '@angular/core';
import { GQRService } from '../Services/gqr.service';
import { QRDATA } from '../Models/QRDATA';
import * as qrcode from 'qrcode-generator';
import { DataCallService } from '../Services/data-call.service';
// const qrcode = require('qrcode-generator');
import Swal from 'sweetalert2';
import { createPopper } from '@popperjs/core';
import { PageEvent } from '@angular/material/paginator';


@Component({
  selector: 'app-history-qr',
  templateUrl: './history-qr.component.html',
  styleUrls: ['./history-qr.component.css']
})
export class HistoryQRComponent implements OnInit {
  constructor(public QRData: GQRService, public data: DataCallService) { }

  public dataQRExtract: any;
  public https = 'https://alp-cloud.com:8446/api/AR_INV-QRcodProdGet/getPlaca/';
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
  public pageActual: number = 1;
  public adnimBool = true;
  public QRCOUNT = 0;

  ngOnInit() {
    this.getMarcRep();
    this.viewOptionsB();
  }

  getDep(master) {
    this.data.getDptoReporte(master).subscribe(x => {
      this.dataQRExtract = x;
      this.contadorProdAct = this.dataQRExtract.length;
      console.log(this.dataQRExtract);
    });
  }

  overProduct(ids, disp) {
    const tooltip = document.getElementById(ids);
    tooltip.style.display = 'none';
    tooltip.style.display = disp;
  }

  // public CountLIs: boolean;
  // showContLi(a) {
  //   return this.CountLIs = a;
  // }

  // controlLi(a, placa, nombre) {
  //   for (let i = 0; i <= a; i++) {
  //     console.log(i);
  //     this.imprimirUnidad(placa, nombre);
  //   }
  // }

  imprimirUnidad(placa, nombre) {

    const ids = document.getElementById(`box-${placa}`);
    const contenidoPrev = document.getElementById(`contenidoPrev`);
    const modImp = document.getElementById('modalPrint');
    let counLi = document.getElementsByTagName('li');

    switch (this.ensi) {

      case true:
        this.ensi = false;
        // this.showContLi(true);
        contenidoPrev.appendChild(this.createLi(placa, placa, nombre));
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


  createQRO(placa) {
    const qr = qrcode(4, 'L');
    const url = `https://alp-cloud.com:8446/api/AR_INV-QRcodProdGet/getPlaca/${placa}`;
    qr.addData(url);
    qr.make();
    // qr.isDark(2, 2);
    // qr.addData('Esto es un Activo', 'Alphanumeric');
    document.getElementById(placa).innerHTML = qr.createSvgTag(1.9);
  }


  animhide() {

    let a = document.getElementById('prevImprimir');
    let b = document.getElementById('spclo');
    let c = document.getElementById('closeI');
    switch (this.adnimBool) {

      case true:
        this.adnimBool = false;
        a.style.animation = 'ease prevImprimirAnim 0.5s';
        setTimeout(() => {
          a.style.transform = 'translate(-185px)';
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

  public LogoTC: string = 'data:image/png;base64,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'
  createLi(idVar, placaText, nombre) {

    const node = document.createElement('li');
    const logo = document.createElement('img');
    node.setAttribute('id', `li-${idVar}`);
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
                            <img src='${this.LogoTC}' width='50px' height='auto'>`
                            // <strong style="font-family: arial;"> Placa: ${placaText} <br>
                            // ${nombre} </strong>;

    createDiv.style.fontSize = '7pt';
    node.appendChild(createSects);
    node.appendChild(createDiv);
    node.appendChild(logo);
    const qr = qrcode(4, 'L');
    const urlD =  `https://alp-cloud.com:8446/api/AR_INV-QRcodProdGet/getPlaca/${placaText}`;
    qr.addData(urlD);
    qr.make();
    createSects.innerHTML = qr.createSvgTag(1.6);
    return node;

  }

  limpiarLi() {

    const lis = document.getElementsByTagName('li');
    const contenidoPrev = document.getElementById(`contenidoPrev`);
    contenidoPrev.removeChild(lis[3]);
    this.QRCOUNT = lis.length - (8);

  }

  imprSelec() {
    var ficha = document.getElementById('contenidoPrev');
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

  getProductCustodio(custodio) {
    this.data.getCustodioReporte(custodio).subscribe( x => {
      this.dataQRExtract = x;
      console.log('Estos son lo datos de la tabla que genera QR');
      console.log(this.dataQRExtract);
      this.contadorProdAct = this.dataQRExtract.length;
    });
  }

  getID(IDS, a) {

    switch (IDS) {
      case 1:
        this.filter(a);
        this.getProductCustodio(this.filtro);
        break;
      case 2:
        this.filter(a);
        this.getProductMarca(this.filtro);
        break;
    }
    console.log(IDS);

  }


  public fPost;
  getProductMarca(marca) {
    this.data.getMarcaReporte(marca).subscribe( x => {
      this.dataQRExtract = x;
      // console.log(this.dataQRExtract);
      this.contadorProdAct = this.dataQRExtract.length;
    });
  }

  // getQRbyCustName(CustName) {
  //   this.QRData.getDataQRByCustName(CustName).subscribe(QRDATA => {
  //     this.dataQRExtract = QRDATA;
  //     console.log(QRDATA);
  //     this.contadorProdAct = this.dataQRExtract.length;
  //   });
  // }

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

  viewOptionsB() {
    this.conterB = false;
    this.conterA = true;
    const a = document.getElementById('bnA');
    const b = document.getElementById('bnB');
    b.style.color = 'white';
    b.style.backgroundColor = 'rgba(0,0,0,0.4)';
    b.style.borderTopRightRadius = '6px';
    b.style.borderTopLeftRadius = '6px';
    b.style.borderRight = 'solid 1px #777777';
    b.style.borderTop = 'solid 1px #B8B8B8';
    b.style.borderLeft = 'solid 1px #CACACA';
    a.style.borderRight = 'solid 0px transparent';
    a.style.borderTop = 'solid 0px transparent';
    a.style.borderLeft = 'solid 0px transparent';
    b.style.boxShadow = '0px 0px 7px rgba(0,0,0,0.6)';
    a.style.boxShadow = '0px 0px 7px rgba(0,0,0,0.0)';
    a.style.color = 'gray';
    a.style.backgroundColor = 'transparent';
  }


  getCustoRep() {
    this.data.getDataCustodio(this.filterPost).subscribe( x => {
      this.custodios = x;
      this.cantCust = this.custodios.length;
      // console.log(this.custodios);
    });
  }


  getMarcRep() {
    this.data.getDataMarca('0').subscribe( z => {
      this.Marcas = z;
      this.Mcs = this.Marcas.length;
      // console.log(this.Marcas);
    });
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

  delProd(a) {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    });

    swalWithBootstrapButtons.fire({
      title: 'Estás seguro?',
      text: 'Esta acción no se puede revertir!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminarlo!',
      cancelButtonText: 'No, eliminar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.data.delProduct(a).subscribe(x => {
          this.getDep(this.SearchDep);
        });
        swalWithBootstrapButtons.fire(
          'Eliminado!',
          `Tu producto con placa ${a}, ha sido eliminado exitosamente`,
          'success'
        );
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelar',
          'Tu producto ha sido salvado :)',
          'error'
        );
      }
    });
  }

}
