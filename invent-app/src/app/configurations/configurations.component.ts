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
  public feInde: any;
  public fCompra: any;
  public Imge: any;
  public placa: any;
  public Clas: any;
  public nProd: any;
  public nCustodios: any;
  public ndepar: any;
  public nSerie: any;
  public nValor: any;
  public nActivo: any;
  public nUsuc: any;
  public nUsm: any;
  public UsFin: any;
  public nGroup: any;
  public mArca: any;
  public ProvVar: any;
  public ModVar: any;
  public VitVar: any;
  public ValrVar: any;
  // variables para los Inputs comunicacion de compronentes FIN
  
  // ngModel inicio
  public _placa: any = 0;
  public _clase: any = 0;
  public _nombre: any = 0;
  public _custodio: any = 0;
  public _dpto: any = 0;
  public _serie: any = 0;
  public _valor: any = 0;
  public _activo: any = 0;
  public _refer: any = 0;
  public _fac:any = 0;
  public _fec;
  public _usuc: any = 0;
  public _fmod: any = 0;
  public _usm: any = 0;
  public _ufin: any = 0;
  public _grupo: any = 0;
  public _marca: any = 0;
  public _color;
  public _prov: any = 0;
  public _mp: any = 0;
  public _vut: any = 0;
  public _vre: any = 0 ;
  public _ffin: any = 0;
  public _finc: any = 0 ;
  public _fcu: any = 0;
  public _ide: any = 0;
  public _fComp: any = 0;
  public _cgas;
  public _cdan;
  public _cdar;
  public _vnor;
  public _vrev;
  public _img: any = 0;
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
    // console.log(this._ffin)
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
   // console.log(this.feCusto);
  }

  feIndepre(id) {
    let a = <HTMLInputElement> document.getElementById('_iDep'); 
    // console.log(a);   
    this._ide = a.value;
    this.dynamicSwitch(a, id, a);
    switch(this.feInde){
      case '0':
        this.feInde = false;
        break;
      case '1':
        this.feInde = true;
        break;
    }
    console.log(this.feInde)
  }
  
  IMG(id) {
    let a = <HTMLInputElement> document.getElementById('img'); 
    // console.log(a);   
    this._img = a.value;
    this.dynamicSwitch(a, id, a);
    switch(this.Imge){
      case '0':
        this.Imge = false;
        break;
      case '1':
        this.Imge = true;
        break;
    }
   // console.log(this.Imge)
  }

  feComp(id) {
    let a = <HTMLInputElement> document.getElementById('fComp'); 
    // console.log(a);   
    this._ide = a.value;
    this.dynamicSwitch(a, id, a);
    switch(this.fCompra){
      case '0':
        this.fCompra = false;
        break;
      case '1':
        this.fCompra = true;
        break;
    }
    // console.log(this.fCompra)
  }

  cPlaca(id) {

    let a = <HTMLInputElement> document.getElementById('_pla'); 
   // console.log(a);
    this._placa = a.value;
    this.dynamicSwitch(a, id, a);
    switch(this.placa){
      case '0':
        this.placa = false;
        break;
      case '1':
        this.placa = true;
        break;
    }

    // console.log(this.fCompra)

  }
  
  Class(id) {

    let a = <HTMLInputElement> document.getElementById('_class'); 
    // console.log(a);
    this._clase = a.value;
    this.dynamicSwitch(a, id, a);
    switch(this.Clas) {
      case '0':
        this.Clas = false;
        break;
      case '1':
        this.Clas = true;
        break;
    }

    // console.log(this.fCompra)

  }

  nProduc(id) {

    let a = <HTMLInputElement> document.getElementById('_nPr'); 
    // console.log(a);
    this._nombre = a.value;
    this.dynamicSwitch(a, id, a);
    switch(this.nProd) {
      case '0':
        this.nProd = false;
        break;
      case '1':
        this.nProd = true;
        break;
    }

    // console.log(this.fCompra)

  }

  nDeps(id) {
    let a = <HTMLInputElement> document.getElementById('_dpto');
    // console.log(a);
    this._dpto = a.value;
    this.dynamicSwitch(a, id, a);
    switch(this.ndepar) {
      case '0':
        this.ndepar = false;
        break;
      case '1':
        this.ndepar = true;
        break;
    }
    // console.log(this.fCompra)
  }

  nCust(id) {

    let a = <HTMLInputElement> document.getElementById('_custodio');
    // console.log(a);
    this._custodio = a.value;
    this.dynamicSwitch(a, id, a);
    switch(this.nCustodios) {
      case '0':
        this.nCustodios = false;
        break;
      case '1':
        this.nCustodios = true;
        break;
    }
    // console.log(this.fCompra)
  }
  
  SerieFunc(id) {
    let a = <HTMLInputElement> document.getElementById('_serie');
    // console.log(a);
    this._serie = a.value;
    this.dynamicSwitch(a, id, a);
    switch(this.nSerie) {
      case '0':
        this.nSerie = false;
        break;
      case '1':
        this.nSerie = true;
        break;
    }
    // console.log(this.fCompra)
  }
  
  nValorFunc(id) {
    let a = <HTMLInputElement> document.getElementById('valor');
    // console.log(a);
    this._valor = a.value;
    this.dynamicSwitch(a, id, a);    
    switch(this.nValor) {      
      case '0':
        this.nValor = false;
        break;
      case '1':
        this.nValor = true;
        break;
    }
    // console.log(this.fCompra)
  }

  nActivoFunc(id) {
    let a = <HTMLInputElement> document.getElementById('activo');
    // console.log(a);
    this._activo = a.value;
    this.dynamicSwitch(a, id, a);    
    switch(this.nActivo) {      
      case '0':
        this.nActivo = false;
        break;
      case '1':
        this.nActivo = true;
        break;
    }
    // console.log(this.fCompra)
  }

  nRefersFunc(id) {
    let a = <HTMLInputElement> document.getElementById('refer');
    // console.log(a);
    this._refer = a.value;
    this.dynamicSwitch(a, id, a);    
    switch(this.refers) {
      case '0':
        this.refers = false;
        break;
      case '1':
        this.refers = true;
        break;
    }
    // console.log(this.fCompra)
  }

  nUsucr(id) {
    let a = <HTMLInputElement> document.getElementById('usuc');
    // console.log(a);
    this._usuc = a.value;
    this.dynamicSwitch(a, id, a);
    switch(this.nUsuc) {
      case '0':
        this.nUsuc = false;
        break;
      case '1':
        this.nUsuc = true;
        break;
    }
    // console.log(this.nUsuc)
  }

  nUsmr(id) {
    let a = <HTMLInputElement> document.getElementById('usm');
    // console.log(a);
    this._usm = a.value;
    this.dynamicSwitch(a, id, a);
    switch(this.nUsm) {
      case '0':
        this.nUsm = false;
        break;
      case '1':
        this.nUsm = true;
        break;
    }
    // console.log(this.nUsuc)
  }

  nUsFin(id) {
    let a = <HTMLInputElement> document.getElementById('ufin');
    // console.log(a);
    this._ufin = a.value;
    this.dynamicSwitch(a, id, a);
    switch(this.UsFin) {
      case '0':
        this.UsFin = false;
        break;
      case '1':
        this.UsFin = true;
        break;
    }
    // console.log(this.nUsuc)
  }

  nGroupFun(id) {
    let a = <HTMLInputElement> document.getElementById('grupo');
    // console.log(a);
    this._grupo = a.value;
    this.dynamicSwitch(a, id, a);
    switch(this.nGroup) {
      case '0':
        this.nGroup = false;
        break;
      case '1':
        this.nGroup = true;
        break;
    }
    // console.log(this.nUsuc)
  }

  nMarca(id) {
    let a = <HTMLInputElement> document.getElementById('marca');
    // console.log(a);
    this._marca = a.value;
    this.dynamicSwitch(a, id, a);
    switch(this.mArca) {
      case '0':
        this.mArca = false;
        break;
      case '1':
        this.mArca = true;
        break;
    }
    // console.log(this.nUsuc)
  }

  ProvFunc(id) {
    let a = <HTMLInputElement> document.getElementById('prov');
    // console.log(a);
    this._prov = a.value;
    this.dynamicSwitch(a, id, a);
    switch(this.ProvVar) {
      case '0':
        this.ProvVar = false;
        break;
      case '1':
        this.ProvVar = true;
        break;
    }
    // console.log(this.nUsuc)
  }

  ModFunc(id) {
    let a = <HTMLInputElement> document.getElementById('mp');
    // console.log(a);
    this._mp = a.value;
    this.dynamicSwitch(a, id, a);
    switch(this.ModVar) {
      case '0':
        this.ModVar = false;
        break;
      case '1':
        this.ModVar = true;
        break;
    }
    // console.log(this.nUsuc)
  }

  VitFunc(id) {
    let a = <HTMLInputElement> document.getElementById('vut');
    // console.log(a);
    this._vut = a.value;
    this.dynamicSwitch(a, id, a);
    switch(this.VitVar) {
      case '0':
        this.VitVar = false;
        break;
      case '1':
        this.VitVar = true;
        break;
    }
    // console.log(this.nUsuc)
  }

  ValrFunc(id) {
    let a = <HTMLInputElement> document.getElementById('vre');
    // console.log(a);
    this._vre = a.value;
    this.dynamicSwitch(a, id, a);
    switch(this.ValrVar) {
      case '0':
        this.ValrVar = false;
        break;
      case '1':
        this.ValrVar = true;
        break;
    }
    // console.log(this.nUsuc)
  }


  //configuraciones
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