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
  public dataQRExtract;
  public cont;
  constructor( public dateCall: DataCallService, public us: WebuserService ) { }

  ngOnInit() {
    // setInterval(()=>{
    //   this.getInvent();
    // },300)
    this.fechActual();
    this.getInvent('f');
    // console.log(this.user);
    this.getDep('0');
  }

  getDep(farm) {
    this.dateCall.getDataDep(farm).subscribe(x => {
      this.dataQRExtract = x;
      this.cont = this.dataQRExtract.length;
      console.log(this.dataQRExtract);
    });
  }

  fechActual() {
    // tslint:disable-next-line: prefer-const
   let fecha = new Date(); // Fecha actual
    // tslint:disable-next-line: prefer-const
   let mes: any = fecha.getMonth() + 1; // obteniendo mes
   let dia: any = fecha.getDate(); // obteniendo dia
   // tslint:disable-next-line: prefer-const
   let ano: any = fecha.getFullYear(); // obteniendo año
   if (dia < 10) {
       dia = '0' + dia;
   }
  // agrega cero si el menor de 10
   if (mes < 10) {
    mes = '0' + mes;
   } // agrega cero si el menor de 10
   this.datenow = ano + '-' + mes + '-' + dia;
  }

  getInvent(param) {
      this.dateCall.getReportByParam(param).subscribe(x => {
      this.arrInv = x;
      // console.log('arr');
      // console.log(this.arrInv);
    });
  }

  delRepo(id) {
    Swal.fire({
      title: 'Estás seguro?',
      text: 'Esta desición no es reversible!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, deseo eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.dateCall.delReport(id).subscribe(x => {
          this.getInvent('f'); });
        Swal.fire(
          'Eliminado!',
          'Tu reporte se eliminó con éxito',
          'success'
        );
      }
    });

  }



prints() {
  var ficha = document.getElementById('tableReporte');
  let ventimp = window.open(' ', 'popimpr');
  ventimp.document.write( ficha.innerHTML );
  ventimp.document.close();
  ficha.style.fontFamily = 'Arial';
  ventimp.print( );
  ventimp.close();
}

}
