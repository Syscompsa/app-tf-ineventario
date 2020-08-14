import { Component, OnInit } from '@angular/core';
import { GQRService } from '../Services/gqr.service';
import { Placa_Post_Url } from '../Models/Placa_Post_Url';
// import { resolve } from 'url';
import { QRDATA } from '../Models/QRDATA';
import { DemoService } from '../Services/demo.service';
import { Demo } from '../Models/Demo';
import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})

export class HomeViewComponent implements OnInit {

  public datenow: any;
  public placa: Placa_Post_Url[] = [];
  public product: QRDATA[] = [];
  public productByPlaca: QRDATA[] = [];

  // data form
  public dateInv: Date;
  public invPlaca: string;
  public invNombre: string;
  public invTrue: string;
  public invFalse: string;

  public data: Demo = {
    Placa: this.invPlaca,
    Nombre_P: this.invNombre,
    Custodio: 'Nombre Test Custodio',
    Ciudad: 'Nombre Test Ciudad',
    // tslint:disable-next-line: no-unused-expression
    Fecha_Back:  new Date(),
    Fecha_Inv: this.dateInv,
    Existe: this.invTrue
  };

  constructor(public placas: GQRService,
              public products: GQRService,
              public saveDemo: DemoService,
              public router: Router) { }

  ngOnInit() {
    this.fechActual();
    // this.detectHeight();
    this.placas.getPlaca().subscribe( resp =>
       {
         this.placa = resp ;
         const lengthPlaca = this.placa.length;
         const DataPlaca = this.placa[0].placa_Post;
         //console.log(this.placa);
         //console.log(DataPlaca);
         //console.log(lengthPlaca);
         // this.products.getQRGenById()
         this.products.getProductByPlaca(DataPlaca).subscribe(x => {
           this.productByPlaca = x;
           console.log(this.productByPlaca);
         });
       }
      );
   // this.placas.getQRGenById().subscribe(x => console.log(x));
  }

  // detectHeight(){
  //   let infoCont = document.getElementById('infoCont').style.height;
  //   console.log(infoCont);
  //   if( infoCont == '590px'){
  //     console.log('Llegaste al limite de el alto del div');
  //   }
  // }

  fechActual() {
     // tslint:disable-next-line: prefer-const
    var fecha = new Date(); // Fecha actual
     // tslint:disable-next-line: prefer-const
    var mes: any = fecha.getMonth() + 1; // obteniendo mes
    let dia: any = fecha.getDate(); // obteniendo dia
    // tslint:disable-next-line: prefer-const
    var ano: any = fecha.getFullYear(); // obteniendo año
    if (dia < 10){
        dia = '0' + dia;
      } // agrega cero si el menor de 10
    if (mes < 10)
      mes = '0' + mes; // agrega cero si el menor de 10
    this.datenow = ano + '-' + mes + '-' + dia;
  }

  // saveInv() {
  //   console.log(this.data);
  //   this.router.navigate(['\https://play.google.com/store/apps/details?id=com.gamma.scan']);
  // }

  reporte() {
    Swal.fire({
      icon: 'success',
      title: 'Bien...',
      text: 'Reporte generado con éxito!',
      footer: ''
});
    this.router.navigate(['\Reporte']);
  }

}
