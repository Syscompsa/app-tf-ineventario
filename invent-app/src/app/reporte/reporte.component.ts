import { Component, OnInit } from '@angular/core';
import { DataCallService } from '../Services/data-call.service';
import { WebuserService } from '../Services/webuser.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})

export class ReporteComponent implements OnInit {
  public datenow: any;
  public user = localStorage.getItem('User');
  public arrInv;
  constructor( public dateCall: DataCallService, public us: WebuserService ) { }

  ngOnInit() {
    setInterval(()=>{
      this.getInvent();
    },300)
    this.fechActual();
    this.getInvent();
    console.log(this.user);
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

getInvent() {
    this.dateCall.getReport().subscribe(x => {
     this.arrInv = x;
    console.log('arr');
    console.log(this.arrInv);
  })
}

delRepo(id) {
  Swal.fire({
    title: 'Estás seguro?',
    text: "Esta desición no es reversible!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, deseo eliminar!'
  }).then((result) => {
    if (result.isConfirmed) {
      this.dateCall.delReport(id).subscribe(x => {    
        this.getInvent()});
      Swal.fire(
        'Eliminado!',
        'Tu reporte se eliminó con éxito',
        'success'
      )
    }
  })
 
}

 prints() {
  // const a = document.getElementById('const');
  window.print();
}

}
