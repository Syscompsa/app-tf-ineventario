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

  public dataQRExtract: QRDATA[] = [];
  public https = 'https://alp-cloud.com:8445/api/AR_INV-QRcodProdGet/getPlaca/';

  constructor(public QRData: GQRService, public data: DataCallService) { }

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
  public cont;

  QRDataFunc() {
    this.QRData.getQRGen().subscribe(x => {
      this.dataQRExtract = x;
      console.log("this.dataQRExtract");
      console.log(this.dataQRExtract);
      const dataQRDiv = document.getElementById('dataQR');
      // const placa = [];
     this.cont = this.dataQRExtract.length;
     // console.log(this.cont)
    });
  }

  // createQR(obj, http) {
  //   const qr = qrcode(4, 'L');
  //   qr.addData(http);
  //   qr.make();
  //   obj.innerHTML = qr.createImgTag();
  // }

  createQRO(placa){
    var qr = qrcode(4, 'L');
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
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Estás seguro?',
      text: "Esta acción no se puede revertir!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí, eliminarlo!',
      cancelButtonText: 'No, eliminar!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.data.delProduct(a).subscribe(x => {
          this.QRDataFunc();
        });
        swalWithBootstrapButtons.fire(
          'Eliminado!',
          `Tu producto con placa ${a}, ha sido eliminado exitosamente`,
          'success'
        )
      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelar',
          'Tu producto ha sido salvado :)',
          'error'
        )
      }
    })
  }

}
