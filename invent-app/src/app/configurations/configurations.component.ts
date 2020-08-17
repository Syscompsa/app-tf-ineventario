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


  public fMod;

  public toggle;

  public fActual = this.toggle;
  

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
  public _fec;
  public _usuc;
  public _fmod;
  public _usm;
  public _ufin;
  public _grupo;
  public _color;
  public _prov;
  public _mp;
  public _vut;
  public _vre;
  public _finc;
  public _fcu;
  public _cgas;
  public _cdan;
  public _cdar;
  public _vnor;
  public _vrev;
  public _img;
  // ngModel fin

  constructor() { }

  ngOnInit() {
    
  }

  controller(o, so, objs) {
    let obj = <HTMLInputElement> document.getElementById(o);
    let sobj = <HTMLInputElement> document.getElementById(so);
    // console.log(obj.value);
    switch(obj.value){
      case '0':
        obj.style.opacity = '0.5';
        sobj.style.color = 'red';
        this.toggle = false;
        objs = false;
        console.log('Togle ' + this.toggle);
        console.log('Fecha ' + this.fActual);
        break;
      case '1':
        obj.style.opacity = '1';
        sobj.style.color = 'green';
        this.toggle = true;
        objs = true;
        console.log('Togle ' + this.toggle);
        console.log('Fecha ' + this.fActual);
        break;
      default:
        sobj.style.color = 'green';
        this.toggle = true;
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
