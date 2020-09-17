import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../Services/config.service';
import { configPresets } from '../Models/configPresets';
import Swal from 'sweetalert2';

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
  public arr: configPresets[] = [];
  // public _confPres: configPresets[] = [];

  // variables para los Inputs comunicacion de compronentes INICIO
  public fActual:   any;
  public refers:    any;
  public fMod:      any;
  public fecFin:    any;
  public feCreac:   any;
  public feCusto:   any;
  public feInde:    any;
  public fCompra:   any;
  public Imge:      any;
  public placa:     any;
  public Clas:      any;
  public nProd:     any;
  public nCustodios:any;
  public ndepar:    any;
  public nSerie:    any;
  public nValor:    any;
  public nActivo:   any;
  public nUsuc:     any;
  public nUsm:      any;
  public UsFin:     any;
  public nGroup:    any;
  public mArca:     any;
  public ProvVar:   any;
  public ModVar:    any;
  public VitVar:    any;
  public ValrVar:   any;
  public cGastVar:  any;
  public cDan:      any;
  public cDar:      any;
  public vNor:      any;
  public vRval:     any;
  public colorVar:  any;
  public ciudVar:   any;
  // variables para los Inputs comunicacion de compronentes FIN
    
  // ngModel inicio
  public _placa:    any;
  public _clase:    any;
  public _nombre:   any;
  public _custodio: any;
  public _dpto:     any;
  public _serie:    any;
  public _valor:    any;
  public _activo:   any;
  public _refer:    any;
  public _fac:      any;
  public _usuc:     any;
  public _fmod:     any;
  public _usm:      any;
  public _ufin:     any;
  public _grupo:    any;
  public _marca:    any;
  public _color:    any;
  public _prov:     any;
  public _mp:       any;
  public _vut:      any;
  public _vre:      any;
  public _ffin:     any;
  public _finc:     any;
  public _fcu:      any;
  public _ide:      any;
  public _fComp:    any;
  public _cgas:     any;
  public _cdan:     any;
  public _cdar:     any;
  public _vnor:     any;
  public _vrev:     any;
  public _img:      any;
  public _fc:       any;
  public _ciud:     any;
  // ngModel fin

  constructor(public conf: ConfigService) { }

  ngOnInit() {
    this.getinterface();
    let a = document.getElementsByTagName('input'); 
    let b = document.getElementsByTagName('label'); 
    for (let i = 0; i <= a.length; i++) {
      if (a[i].value == '50') {
        // console.log('son todos 0');
        a[i].style.opacity = '0.6';
      }
    }

   // console.log(this.arr);

  }

  //Services CONFIG Inicio
  getinterface(){
    this.conf.getConfig().subscribe( 
      x => {
      this.arr = [
         this._placa    = x[0].placa_i,       // 1
         this._clase    = x[0].clase_i,       // 2
         this._nombre   = x[0].nombre_i,      // 3
         this._custodio = x[0].custodio_i,    // 4
         this._dpto     = x[0].dpto_i,        // 5
         this._ciud     = x[0].ciudad_i,      // 6
         this._serie    = x[0].serie_i,       // 7
         this._valor    = x[0].valor_i,       // 8
         this._activo   = x[0].activo_i,      // 9
         this._refer    = x[0].refer_i,       // 10
         this._fc       = x[0].feccrea_i,     // 11
         this._usuc     = x[0].usucrea_i,     // 12
         this._fmod     = x[0].fecmodi_i,     // 13
         this._usm      = x[0].usumodi_i,     // 14
         this._ffin     = x[0].fecfin_i,      // 15
         this._ufin     = x[0].userfin_i,     // 16
         this._grupo    = x[0].grupo_i,       // 17
         this._marca    = x[0].marca_i,       // 18
         this._color    = x[0].color_i,       // 19
         this._ide      = x[0].fechac_i,      // 20
         this._prov     = x[0].proveedor_i,   // 21
         this._mp       = x[0].modelo_i,      // 22
         this._vut      = x[0].vidautil_i,    // 23
         this._vre      = x[0].valres_i,      // 24
         this._finc     = x[0].fechaa_i,      // 25
         this._fcu      = x[0].fcustodio,     // 26
         this._cgas     = x[0].cgasto_i,      // 27
         this._cdan     = x[0].cdan_i,        // 28
         this._cdar     = x[0].cdar_i,        // 29
         this._valor    = x[0].val_normal_i,  // 30
         this._vnor     = x[0].val_normal_i,  // 31
         this._vrev     = x[0].val_reval_i,   // 32
         this._img      = x[0].imagen         // 33
        ]
         console.log(this.arr)       
         console.log(x);
     }
     
    )
    
  }

  //Services CONFIG Fin

  fac(id) {
    let a = <HTMLInputElement> document.getElementById('_fac');
    this.fActual = a.value;
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
    this.feCusto = a.value;
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

  //OJO ESTO HAY QUE RESOLVER BUG
  feComp(id) {
    let a = <HTMLInputElement> document.getElementById('fComp'); 
    // console.log(a);   
    this.fCompra = a.value;
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

  cGastFunc(id) {
    let a = <HTMLInputElement> document.getElementById('cgas');
    // console.log(a);
    this._cgas = a.value;
    this.dynamicSwitch(a, id, a);
    switch(this.cGastVar) {
      case '0':
        this.cGastVar = false;
        break;
      case '1':
        this.cGastVar = true;
        break;
    }
    // console.log(this.nUsuc)
  }

  cDanFunc(id) {
    let a = <HTMLInputElement> document.getElementById('cdan');
    // console.log(a);
    this._cdan = a.value;
    this.dynamicSwitch(a, id, a);
    switch(this.cDan) {
      case '0':
        this.cDan = false;
        break;
      case '1':
        this.cDan = true;
        break;
    }
    // console.log(this.nUsuc)
  }

  cDarFunc(id) {
    let a = <HTMLInputElement> document.getElementById('cdar');
    // console.log(a);
    this._cdar = a.value;
    this.dynamicSwitch(a, id, a);
    switch(this.cDar) {
      case '0':
        this.cDar = false;
        break;
      case '1':
        this.cDar = true;
        break;
    }
    // console.log(this.nUsuc)
  }

  valNormal(id) {
    let a = <HTMLInputElement> document.getElementById('cdar');
    // console.log(a);
    this._cdar = a.value;
    this.dynamicSwitch(a, id, a);
    switch(this.cDar) {
      case '0':
        this.cDar = false;
        break;
      case '1':
        this.cDar = true;
        break;
    }
    // console.log(this.nUsuc)
  }

  ciudFunc(id) {
    let a = <HTMLInputElement> document.getElementById('_ciud');
    // console.log(a);
    this.ciudVar = a.value;
    this.dynamicSwitch(a, id, a);
    switch(this.ciudVar) {
      case '0':
        this.ciudVar = false;
        break;
      case '1':
        this.ciudVar = true;
        break;
    }
    // console.log(this.nUsuc)
  }


  vNorFunc(id) {
    let a = <HTMLInputElement> document.getElementById('vnor');
    // console.log(a);
    this._vnor = a.value;
    this.dynamicSwitch(a, id, a);
    switch(this.vNor) {
      case '0':
        this.vNor = false;
        break;
      case '1':
        this.vNor = true;
        break;
    }
    // console.log(this.nUsuc)
  }

  vRvalFunc(id) {
    let a = <HTMLInputElement> document.getElementById('vrev');
    // console.log(a);
    this._vrev = a.value;
    this.dynamicSwitch(a, id, a);
    switch(this.vRval) {
      case '0':
        this.vRval = false;
        break;
      case '1':
        this.vRval = true;
        break;
    }
    // console.log(this.nUsuc)
  }

  colorFunc(id) {
    let a = <HTMLInputElement> document.getElementById('color');
    // console.log(a);
    this.colorVar = a.value;
    this.dynamicSwitch(a, id, a);
    switch(this.colorVar) {
      case '0':
        this.colorVar = false;
        break;
      case '1':
        this.colorVar = true;
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

  saveInterfaz() {
    let arr : configPresets = {
      id           : 1,
      placa_i      : this._placa,
      clase_i      : this._clase,
      nombre_i     : this._nombre,
      custodio_i   : this._custodio,
      dpto_i       : this._dpto,
      ciudad_i     : this._ciud,
      serie_i      : this._custodio,
      valor_i      : this._valor,
      activo_i     : this._activo,
      refer_i      : this._refer,
      feccrea_i    : this._fc,
      usucrea_i    : this._usuc,
      fecmodi_i    : this._fmod,
      usumodi_i    : this._usm,
      fecfin_i     : this._ffin,
      horafin_i    : this._fac,
      userfin_i    : this._ufin,
      barra_i      : '0',
      grupo_i      : this._grupo,
      marca_i      : this._marca,
      color_i      : this._color,
      fechac_i     : this._fac,
      proveedor_i  : this._prov,
      modelo_i     : this._mp,
      vidautil_i   : this._vut,
      valres_i     : this._vre,
      valor2_i     :'0',
      fechaa_i     : this._ide,
      fcustodio    : this._fcu,
      cgasto_i     : this._cgas,
      cdan_i       : this._cdan,
      cdar_i       : this._cdar,
      val_normal_i : this._vnor,
      val_reval_i  : this._vrev,
      imagen       : this._img,
      valor_resi_i : this._vre,
      valor_res2_i : '0',
      xxx_i        : '0'
    }
    
    console.log(arr);
    this.conf.updateConfig(arr).subscribe(x => {
      arr = x ;
        Swal.fire({
        icon: 'success',
        title: '¡Bien!...',
        text: 'Haz cambiado tu interfáz con éxito!'
      })
      this.getinterface();
    });

    // console.log(arr);
  }

  porDefecto(){
    console.log('defecto activo')
  }


  
}
