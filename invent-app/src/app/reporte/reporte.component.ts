import { Component, OnInit } from '@angular/core';
import { DataCallService } from '../Services/data-call.service';
import { WebuserService } from '../Services/webuser.service';
import Swal from 'sweetalert2';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpEventType } from '@angular/common/http';

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
  public filter;
  public filterPost;
  public prodInv;
  public rep: boolean = false;
  public imgGet;
  public actColor;
  public filterPicture;
  public optionSel;
  public depts;
  public lista:string[]=["Con Foto","Sin Foto"];
  public a;
  public b;
  public FilterLength;
  public ProdFilter;
  public especificData;
  public getInvParam;
  public env = environment;
  public placCodec;

  constructor( public dateCall: DataCallService, public us: WebuserService, private http: HttpClient ) { }

  ngOnInit() {
    this.fechActual();
    this.getInvParam = 'NF006';
    this.getInvent();
    this.getDep('a');
    console.log(document.getElementById('rightDir'));
    this.connValidate();
  }

  connValidate() {
    if(navigator.onLine) {
      goOnline();
  } else {
    goOffline();
  }
  
  window.addEventListener('offline', goOffline);
  window.addEventListener('online', goOnline);
  
  function goOnline() {
      document.body.classList.remove('offline');
      document.body.classList.add('online');
      // Hacer algo más al ir online
  }
  
  function goOffline() {
      document.body.classList.remove('online');
      document.body.classList.add('offline');
      // Hacer algo más al ir offline
  }
  }

  showRep(va) {
    this.rep = true;
  }

  optionSelFunc( OptionSel, dep ) {

    if(OptionSel == 'Con Foto') {
      this.a = 1;
      this.b = 0;
      this.getReports( this.a, this.b, dep);
      this.getInvParam = dep;
      this.getInvent();
    }

    else {
      this.a = 0;
      this.b = 1;
      this.getReports( this.a, this.b, dep);
      this.getInvParam = dep;
      this.getInvent();
    }

  }

  changeParam(z) {    
    // console.log(z);
    let a = document.getElementById('bProg');
    if(a.style.width == '100%') {
      a.style.width = '0%';
    }
    return z;
  }

  public ValueInit;
  public ValueFini;
  public ValuePerc;

  getReports(a,b,d) {
    this.dateCall.getFilterImg(a,b,d).subscribe( y => {
      
      // let a = document.getElementById('prg');
      // console.log(a);

      let apiURL = 'http://localhost:5000/';
      this.http.get(apiURL + 'api/AR_INV-QRcodProdGet/getDataImgFilter/' + a + '/' + b + '/' + d,
                    {observe: 'events', reportProgress: true}).subscribe( event => {

        if (event.type === HttpEventType.DownloadProgress) {
          let a = document.getElementById('bProg');
          this.ValueInit = event.loaded;
          this.ValueFini = event.total;
          this.ValuePerc = (event.loaded / event.total) * 100;
          console.log('Descarga: ' + this.ValuePerc.toFixed(2) + '%');    
          a.style.width = `${this.ValuePerc}%`;       

        }

        if (event.type === HttpEventType.Response) {        
          console.log(HttpEventType.Response);
          console.log(event.body);        
        }

      }
    );

      this.getInvParam = d;
      this.getInvent();
      this.FilterLength = y;
      this.filter = d;
      // console.log(y);
      // console.log(this.prodInv);
      // this.dateCall.getDataForProgress(a,b,d);
      // console.log('Este valor tomado de descarga: ' + this.dateCall.ValuePerc);
      this.ProdFilter = this.FilterLength.length;
      
      
      if(this.FilterLength[0].peso == 0) {
        this.especificData = 'No tiene(n) foto';
      }

      else {
        this.especificData = 'Si tiene(n) foto';
      }

     })
  }


  // createBarProgress(width, value) {
  //   let divProgress = document.getElementById('prg');    

  //   switch(value) {

  //     case 1:
  //       let bProgress = document.createElement('div');
  //           divProgress.appendChild(bProgress);
  //           bProgress.setAttribute('class', 'progress-bar progress-bar-striped progress-bar-animated');
  //           bProgress.setAttribute('role', 'progressbar');
  //           bProgress.setAttribute('aria-valuenow', '0');
  //           bProgress.setAttribute('aria-valuemin', '0');
  //           bProgress.setAttribute('aria-valuemax', '100');
  //           bProgress.style.width = width;
  //           bProgress.style.height = '5px';
  //       break;
      
  //     case 0:
  //       divProgress.removeChild(bProgress);

  //   }

  // }

  getPlacaReport(plac) {
    
    this.dateCall.getImgByPlaca(plac).subscribe(y => {      
      this.imgGet = y;      
      if (this.imgGet[0].foto == '' || this.imgGet[0].foto == null) {
        this.actColor = 'red';
        console.log('Esta vacio' + ' Peso: ' + this.imgGet[0].peso);
      }      
      else {
        this.actColor = 'green';
        console.log('Si tiene imagen' + ' Peso: ' + this.imgGet[0].peso);
      }
    })
  }

  getDep(farm) {
    this.dateCall.getDataDep(farm).subscribe(x => {
      this.dataQRExtract  =   x;
      this.filter         =   farm;
      this.cont           =   this.dataQRExtract.length;
      console.log(this.cont);
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

  getInvent() {
      
      this.dateCall.getReportByParam(this.getInvParam).subscribe(x => {
        this.arrInv = x;
        this.prodInv = this.arrInv.length;
      }

    );
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
          this.getInvParam = 'a';
          this.getInvent();
        });
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
  ventimp.print();
  ventimp.close();
}

public fgdSReport;

fgetDataShowReport() {
  let a = 0;
  if(this.changeParam(this.optionSel) == 'Con Foto') {
    a = 1;
  }
  else {
    a = 0;
  }

  // console.log(a);
  // console.log(this.depts);
  
  this.dateCall.getDataShowReport(this.depts, a).subscribe( b => {
    // console.log('data del reporte por imagenes');
    this.fgdSReport = b;
    console.log(this.fgdSReport);
  })
}

searchByPlaca(a) {
  this.dateCall.getDataShowReport(this.depts, a).subscribe( m => {
    this.fgdSReport = m;
  } )
}

public Dimg;
public Dplaca;
public Ddepa;
public Dclase;
public Dciudad;
public Ddescrip;
public Dcust;
public Dserie;
public Drefer;
public Dusmod;
public Dgractv;
public Dmarca;
public Dcolor;
activateEditTask(m, a, b, c ,d, e, f, g, h, i, j, k, l) {

  let DimgHTML = document.getElementById('Dimg'); 

  this.Dimg       =   m;
  this.Dplaca     =   a;
  this.Ddepa      =   b;
  this.Dclase     =   c;
  this.Dciudad    =   d;
  this.Ddescrip   =   e;
  this.Dcust      =   f;
  this.Dserie     =   g;
  this.Drefer     =   h;
  this.Dusmod     =   i;
  this.Dgractv    =   j;
  this.Dmarca     =   k;
  this.Dcolor     =   l;

  if(this.Dimg == '' || this.Dimg == null) {
    // this.createInputImg(DimgHTML);
    DimgHTML.style.backgroundColor = 'orange';
  }
  else {
    DimgHTML.style.backgroundColor = 'green';
  }

}

createInputImg(b) {
  let a = document.createElement('input');
      a.setAttribute('type', 'text');
      a.setAttribute('class', 'input-control');
      a.appendChild(b);
}

}
