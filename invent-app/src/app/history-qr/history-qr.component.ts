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
        // modImp.removeChild(document.getElementById(`li-${id}`));
        // this.objectSelectStyle(ids, 'solid', 'rgba(0,0,0,0.2)', '1px');
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

  public LogoTC: string = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAAjCAYAAAAe2bNZAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAw5JREFUeNrsWOtt2zAQtgsNwA3KThBlgnqDqhOEmSDuBNEGgidgN5A7Ad0J5E4gewLZE7hScWd8+UBKctDkVw44SKb4uMd3D3q5eHta9Zz3bCLfdj3vez4NP5aRCUYWD5t87tnCWIoOwvp+7Pmu52KmwINQ33HA9dz0fHlDbkbOaNQyVc/riMQnMePA5wnt1IrqmoNo/Euep4QLn9SCS9mghcM37Mv/RIwb3X8QKAwDGfn1HnyvG9gJvLDvdynNifZy3gvy4rMOAFy/Ag8daG5F27H5QeauYey6KIA2cw5vhfU9B2t2JGQFIc5UojF0YQWWKYWdbLKiKEi5zZAgnnCSw35GuEVj6MJyAg8lhGeKfGQ/I+PdhKVLFMaBm5x8DBCuNbmziFiU8ZDPEEIVNJlEjxXpfURbC3MG+i3Pr/I8gxJKG8hfBqJnA9GqoT6MbxekYYpVCLZgIHeUGBW0BvdJUiZSfRGhjOSJBzn0JJrkVIcWN+QeBPerKCTwEdM6Zhm1QhvBRoB04OcI2RI4S9iAc1EdGSvBeu0M8I6STlwnIslRUmMlOnJjAdFZyztm+dVYM8STmoSlYmkBhXQTTdcLS2aJUMZihmA9yvOO1jxLIAzgfwQseFFgGP9Da57mgLck8+cjlmoi2NE14YYiW7wmkkwEU57AaEkoxUcAZlDnU8JUiWTGljKRVtLPSHIdB0A2MrkQPz/AWEWHHCQx3lPr6oT3gpcj4M9IKVErb8ckdjP9HBKtpb+xKbNzQNyNdHRTmdOKleqRpNcwcJcTQlmQfLf4oPchB7kpUBF+d2qg8P5LDdkNiy3Umq2EtKPSkUM4Own9LTThPPcnROF+MdFcO+pla7gvd6DdhUpEA+HvoFx08K4FNqcke5Xa0iUsh9aghW8NXNoCZN0LHabzAl1LasgxBdanFV3KOliE3ysqB1WkDdA8VMD7BfqZC1izpXJjPoE1DnQT2JPVzlAm9LcHDHyT9x9gUQPP58g5hTwf9U8GDx2Ypx51RVr6yI2Rr7yx5kstGcvC19LyV4ABAAUt9oG/LdAKAAAAAElFTkSuQmCC';

  createLi(idVar, placaText, nombre) {

    const node = document.createElement('li');
    const logo = document.createElement('img');
    node.setAttribute('id', `li-${idVar}`);
    node.setAttribute('class', 'liPrint animated fadeInLeft fast');
    node.style.listStyle = 'none';
    node.style.padding = '2px';

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

    const createDiv = document.createElement('div');
    createDiv.innerHTML = ` &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <img src='${this.LogoTC}' width='15px' height='auto'><br>
                            <strong> Placa: ${placaText} <br>
                            Nombre:  ${nombre} </strong>`;

    createDiv.style.fontSize = '7pt';
    node.appendChild(createSects);
    node.appendChild(createDiv);
    node.appendChild(logo);
    // console.log(placaText);
    const qr = qrcode(4, 'L');
    const urlD =  `https://alp-cloud.com:8446/api/AR_INV-QRcodProdGet/getPlaca/${placaText}`;
    qr.addData(urlD);
    qr.make();
    createSects.innerHTML = qr.createSvgTag(1.6);
    return node;

  }

  limpiarLi() {
    // console.log('Se esta limpiando');

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
