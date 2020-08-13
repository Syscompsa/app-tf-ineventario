import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {
  public datenow: any;
  constructor() { }

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

 prints() {
  // const a = document.getElementById('const');
  window.print();
}

}
