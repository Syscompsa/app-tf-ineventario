import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configurations',
  templateUrl: './configurations.component.html',
  styleUrls: ['./configurations.component.css']
})
export class ConfigurationsComponent implements OnInit {
  public minRange: any = 0;
  public maxRange: any = 1;
  public rValue: any;
  public datenow;
  public IdInp;
  public toggle;

  // variables para los Inputs comunicacion de compronentes INICIO
  public fActual: any;
  public refers: any;
  public fMod: any;
  public fecFin: any;
  public feCreac: any;
  public feCusto: any;
  // variables para los Inputs comunicacion de compronentes FIN
  
  // ngModel inicio
  public _placa;
  public _clase;
  public _nombre;
  public _custodio;
  public _dpto;
  public _serie;
  public _valor;
  public _activo;
  public _refer;
  public _fac:any = 0;
  public _fec;
  public _usuc;
  public _fmod: any = 0;
  public _usm;
  public _ufin;
  public _grupo;
  public _color;
  public _prov;
  public _mp;
  public _vut;
  public _vre;
  public _ffin: any = 0;
  public _finc: any = 0 ;
  public _fcu: any = 0;
  public _cgas;
  public _cdan;
  public _cdar;
  public _vnor;
  public _vrev;
  public _img;
  public _fc: any = 0;
  // ngModel fin

  constructor() { }

  ngOnInit() {
    
  }

  fac(id) {
    let a = <HTMLInputElement> document.getElementById('_fac');
    this._fac = a.value;
    this.dynamicSwitch(a, id, a);
    switch(this.fActual){
      case '0':
        this.fActual = false;
        break;
      case '1':
        this.fActual = true;
        break;
    }
    // console.log('fActual');    
    // console.log(this.fActual);
  }

  feMod(id) {
    let a = <HTMLInputElement> document.getElementById('_feMod');    
    this._fmod = a.value;
    this.dynamicSwitch(a, id, a);
    // console.log(a);
    switch(this.fMod){
      case '0':
        this.fMod = false;
        break;
      case '1':
        this.fMod = true;
        break;
    }
    // console.log(this.fMod)
  }

  feFin(id) {
    let a = <HTMLInputElement> document.getElementById('_feFin'); 
    // console.log(a);   
    this._ffin = a.value;
    this.dynamicSwitch(a, id, a);
    // console.log(a);
    switch(this.fecFin){
      case '0':
        this.fecFin = false;
        break;
      case '1':
        this.fecFin = true;
        break;
    }
    console.log(this._ffin)
  }

  feCrea(id) {

    let a = <HTMLInputElement> document.getElementById('_feCrea'); 
    // console.log(a);   
    this._fc = a.value;
    this.dynamicSwitch(a, id, a);
    switch(this.feCreac){
      case '0':
        this.feCreac = false;
        break;
      case '1':
        this.feCreac = true;
        break;
    }

    // console.log(this.feCreac)

  }

  feCust(id) {

    let a = <HTMLInputElement> document.getElementById('_fCust'); 
    // console.log(a);   
    this._fcu = a.value;
    this.dynamicSwitch(a, id, a);
    switch(this.feCusto){
      case '0':
        this.feCusto = false;
        break;
      case '1':
        this.feCusto = true;
        break;
    }

    console.log(this._fcu)

  }

  feComp(id) {

    let a = <HTMLInputElement> document.getElementById('_fCust'); 
    console.log(a);   
    // this._fcu = a.value;
    // this.dynamicSwitch(a, id, a);
    // switch(this.feCusto){
    //   case '0':
    //     this.feCusto = false;
    //     break;
    //   case '1':
    //     this.feCusto = true;
    //     break;
    // }

    // console.log(this._fcu)

  }



  changeTagColor(id, cid, color) {
    let b = document.getElementById(id)
    let c = document.getElementById(cid);
    b.style.color = color;
  }

  dynamicSwitch(a, id, cid){
    switch(a.value) {
      case '0':
        cid.style.opacity = '0.5';
        this.changeTagColor(id, cid,  'red');
        break;
    
      case '1':
        cid.style.opacity = '1';
        this.changeTagColor(id, cid, 'green');
        break;
    
      default:
        cid.style.opacity = '0.5';
        this.changeTagColor(id, cid, 'red'); 
        break;
    }
  }

  saveInterfaz(){
    console.log('activ save')
  }

  porDefecto(){
    console.log('defecto activo')
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

}



// recycle code
// switch(obj.value){
  //   case '0':
  //     obj.style.opacity = '0.5';
  //     sobj.style.color = 'red';
  //     this.toggle = false;
  //     this.fActual = false;
  //     break;
  //   case '1':
  //     obj.style.opacity = '1';
  //     sobj.style.color = 'green';
  //     this.toggle = true;
  //     this.fActual = true;
  //     break;
  //   default:
  //     sobj.style.color = 'green';
  //     this.toggle = true;
  //     this.fActual = false;
  //     break;
  // }

  // controller(o, so) {
  //   let obj = <HTMLInputElement> document.getElementById(o);
  //   let sobj = <HTMLInputElement> document.getElementById(so);
  //   this.inpChange(obj);
    
  // }