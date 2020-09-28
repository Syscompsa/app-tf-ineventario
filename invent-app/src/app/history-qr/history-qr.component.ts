import { Component, OnInit } from '@angular/core';
import { GQRService } from '../Services/gqr.service';
import { QRDATA } from '../Models/QRDATA';
import * as qrcode from 'qrcode-generator';
import { DataCallService } from '../Services/data-call.service';
// const qrcode = require('qrcode-generator');
import Swal from 'sweetalert2';

@Component({
  selector: 'app-history-qr',
  templateUrl: './history-qr.component.html',
  styleUrls: ['./history-qr.component.css']
})
export class HistoryQRComponent implements OnInit {
  constructor(public QRData: GQRService, public data: DataCallService) { }

  public dataQRExtract: any;
  public https = 'https://alp-cloud.com:8445/api/AR_INV-QRcodProdGet/getPlaca/';
  public conterA = true;
  public conterB = false;
  public departemento;
  public cont;
  public SearchDep = 'Farmacia';
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

  ngOnInit() {
    this.getDep(this.SearchDep);
    this.getCustoRep();
    this.getMarcRep();
    this.viewOptionsB();
  }

  getDep(master) {
    this.data.getDptoReporte(master).subscribe(x => {
      this.dataQRExtract = x;
      this.cont = this.dataQRExtract.length;
      console.log(this.dataQRExtract);
    });
  }

  imprimirUnidad(id, placa) {
    const ids = document.getElementById(`box-${id}`);
    const contenidoPrev = document.getElementById(`contenidoPrev`);
    switch (this.ensi) {
      case true:
        this.ensi = false;
        console.log(this.ensi);
        contenidoPrev.appendChild(this.createLi(id, placa));
        this.objectSelectStyle(ids, 'dashed', '#0AC1AD', '2px');
        break;
      case false:
        this.ensi = true;
        console.log(this.ensi);
        contenidoPrev.removeChild(document.getElementById(`li-${id}`));
        this.objectSelectStyle(ids, 'solid', 'rgba(0,0,0,0.2)', '1px');
        break;
    }
  }

  createLi(idVar, placaText) {
    const node = document.createElement('li');
    node.innerText = placaText;
    node.setAttribute('id', `li-${idVar}`);
    node.setAttribute('class', 'animated fadeInLeft fast');
    return node;
  }

  limpiarLi() {
    console.log('Se esta limpiando');
    const lis = document.getElementsByTagName('li');
    const contenidoPrev = document.getElementById(`contenidoPrev`);
    contenidoPrev.removeChild(lis[3]);
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
    this.data.getCustodioReporte(custodio).subscribe(x => {
      this.dataQRExtract = x;
      console.log(this.dataQRExtract);
    });
  }

  getProductMarca(marca) {
    this.data.getMarcaReporte(marca).subscribe( x => {
      this.dataQRExtract = x;
      console.log(this.dataQRExtract);
    });
  }

  filter(a) {
    this.filtro = a;
   // console.log(this.filtro);
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

  getID(IDS, a) {
    switch (IDS) {
      case 1:
        this.filter(a);
        // console.log(this.filtro);
        this.getProductCustodio(this.filtro);
        // console.log('se ha elegido filtrar por custodio');
        break;
      case 2:
        this.filter(a);
        // console.log(this.filtro);
        this.getProductMarca(this.filtro);
        // console.log('se ha elegido filtrar por marca');
        break;
    }
    console.log(IDS);
  }

  getCustoRep() {
    this.data.getDataCustodio('0').subscribe( x => {
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
    // const a = document.getElementById('dataQR');
    window.print();
  }

  createQRO(placa) {
    const qr = qrcode(4, 'L');
    const url = `https://alp-cloud.com:8445/api/AR_INV-QRcodProdGet/getPlaca/${placa}`;
    qr.addData(url);
    qr.make();
    document.getElementById(placa).innerHTML = qr.createImgTag();
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
          // this.QRDataFunc();
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
