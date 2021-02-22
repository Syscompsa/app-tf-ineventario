import { Component, OnInit } from '@angular/core';
import { GQRService } from '../Services/gqr.service';
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
  public dateInv: Date;
  public invPlaca: string;
  public invNombre: string;
  public invTrue: string;
  public invFalse: string;

  constructor(public placas: GQRService,
              public products: GQRService,
              
              public router: Router) { }

  ngOnInit() {
    this.fechActual();
  }

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

  // reporte() {

  //   Swal.fire({
  //     icon: 'success',
  //     title: 'Bien...',
  //     text: 'Reporte generado con éxito!',
  //     footer: ''
  //   });

  //   this.router.navigate(['\Reporte']);
  
  // }

}
