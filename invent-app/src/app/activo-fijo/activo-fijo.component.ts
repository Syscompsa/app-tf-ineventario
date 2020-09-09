import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { ConfigService } from '../Services/config.service';
import { DataCallService } from '../Services/data-call.service';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css'; // optional for styling
import { Router } from '@angular/router';
import { QRDATA } from '../Models/QRDATA';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-activo-fijo',
  templateUrl: './activo-fijo.component.html',
  styleUrls: ['./activo-fijo.component.css']
})
export class ActivoFijoComponent implements OnInit {
  constructor(public conf: ConfigService,
    public data: DataCallService,
    public router: Router) { }

  //#region "@INPUTS VALUES"
  // estas son variables para los values de los inputs
  private _Factual: any;
  private _FMod:    any;
  private _FFin:    any;
  private _FCrea:   any;
  private _FCust:   any;
  private _FeInde:  any;
  private _FCompra: any;
  private _Imagen:  any;
  private _Placa:   any;
  private _CLase:   any;
  private _NProd:   any;
  private _Custodio:any;
  private _Depart:  any;
  private _Serie:   any;
  private _Valor:   any;
  private _Activo:  any;
  private _Referido:any;
  private _USC:     any;
  private _USM:     any;
  private _USF:     any;
  private _GRP:     any;
  private _MRC:     any;
  private _PROV:    any;
  private _MODL:    any;
  private _VUTL:    any;
  private _VRES:    any;
  private _CGAS:    any;
  private _CDAN:    any;
  private _CDAR:    any;
  private _VNOR:    any;
  private _VREVAL:  any;
  private _COLOR:   any;
  private _CIUD:    any;
  //#endregion
  //#region "@Input()" 

  @Input()
  set Factual(value: any){
    this._Factual = value;
  }
  get Factual():any {
    return this._Factual;
  }
  
  @Input()
  set FMod(value: any){
    this._FMod = value;
  }
  get FMod():any {
    return this._FMod;
  }

  @Input()
  set FFin(value: any){
    this._FFin = value;
  }
  get FFin():any {
    return this._FFin;
  }

  @Input()
  set FCrea(value: any){
    this._FCrea = value;
  }
  get FCrea():any {
    return this._FCrea;
  }

  @Input()
  set FCust(value: any){
    this._FCust = value;
  }
  get FCust():any {
    return this._FCust;
  }
  
  @Input()
  set FeInde(value: any){
    this._FeInde = value;
  }
  get FeInde():any {
    return this._FeInde;
  }
  
  @Input()
  set FCompra(value: any){
    this._FCompra = value;
  }
  get FCompra():any {
    return this._FCompra;
  }

  @Input()
  set Imagen(value: any){
    this._Imagen = value;
  }
  get Imagen():any {
    return this._Imagen;
  }

  @Input()
  set Placa(value: any){
    this._Placa = value;
  }
  get Placa():any {
    return this._Placa;
  }
  
  @Input()
  set CLase(value: any){
    this._CLase = value;
  }
  get CLase():any {
    return this._CLase;
  }

  @Input()
  set NProd(value: any){
    this._NProd = value;
  }
  get NProd():any {
    return this._NProd;
  }

  @Input()
  set Custodio(value: any){
    this._Custodio = value;
  }
  get Custodio():any {
    return this._Custodio;
  }

  @Input()
  set Depart(value: any){
    this._Depart = value;
  }
  get Depart():any {
    return this._Depart;
  }

  @Input()
  set Serie(value: any){
    this._Serie = value;
  }
  get Serie():any {
    return this._Serie;
  }

  @Input()
  set Valor(value: any){
    this._Valor = value;
  }
  get Valor():any {
    return this._Valor;
  }

  @Input()
  set Activo(value: any){
    this._Activo = value;
  }
  get Activo():any {
    return this._Activo;
  }

  @Input()
  set Referido(value: any){
    this._Referido = value;
  }
  get Referido():any {
    return this._Referido;
  }

  @Input()
  set USC(value: any){
    this._USC = value;
  }
  get USC():any {
    return this._USC;
  }

  @Input()
  set USM(value: any){
    this._USM = value;
  }
  get USM():any {
    return this._USM;
  }

  @Input()
  set USF(value: any){
    this._USF = value;
  }
  get USF():any {
    return this._USF;
  }

  @Input()
  set GRP(value: any){
    this._GRP = value;
  }
  get GRP():any {
    return this._GRP;
  }

  @Input()
  set MRC(value: any){
    this._MRC = value;
  }
  get MRC():any {
    return this._MRC;
  }

  @Input()
  set PROV(value: any){
    this._PROV = value;
  }
  get PROV():any {
    return this._PROV;
  }

  @Input()
  set MODL(value: any){
    this._MODL = value;
  }
  get MODL():any {
    return this._MODL;
  }

  @Input()
  set VUTL(value: any){
    this._VUTL = value;
  }
  get VUTL():any {
    return this._VUTL;
  }

  @Input()
  set VRES(value: any){
    this._VRES = value;
  }
  get VRES():any {
    return this._VRES;
  }

  @Input()
  set CGAS(value: any){
    this._CGAS = value;
  }
  get CGAS():any {
    return this._CGAS;
  }

  @Input()
  set CDAN(value: any){
    this._CDAN = value;
  }
  get CDAN():any {
    return this._CDAN;
  }

  @Input()
  set CDAR(value: any){
    this._CDAR = value;
  }
  get CDAR():any {
    return this._CDAR;
  }

  @Input()
  set VNOR(value: any){
    this._VNOR = value;
  }
  get VNOR():any {
    return this._VNOR;
  }

  @Input()
  set VREVAL(value: any){
    this._VREVAL = value;
  }
  get VREVAL():any {
    return this._VREVAL;
  }

  @Input()
  set COLOR(value: any){
    this._COLOR = value;
  }
  get COLOR():any {
    return this._COLOR;
  }
  @Input()
  set CIUD(value: any){
    this._CIUD = value;
  }
  get CIUD():any {
    return this._CIUD;
  }
  //#endregion
  
  ngOnInit() {    
    this.getInterfaz();
    this.cleanForm();
  }

  //#region "Obtener la interfaz del componente Configuración de formulario"
public arr: any[] = []
  getInterfaz() {
    this.conf.getConfig().subscribe(
      x=>{
        this.arr = [
          this.Placa      = x[0].placa_i,       // 1
          this.CLase      = x[0].clase_i,       // 2
          this.NProd      = x[0].nombre_i,      // 3
          this.Custodio   = x[0].custodio_i,    // 4
          this.Depart     = x[0].dpto_i,        // 5
          this.CIUD       = x[0].ciudad_i,      // 6
          this.Serie      = x[0].serie_i,       // 7
          this.Valor      = x[0].valor_i,       // 8
          this.Activo     = x[0].activo_i,      // 9
          this.Referido   = x[0].refer_i,       // 10
          this.FCrea      = x[0].feccrea_i,     // 11
          this.USC        = x[0].usucrea_i,     // 12
          this.FMod       = x[0].fecmodi_i,     // 13
          this.USM        = x[0].usumodi_i,     // 14
          this.FFin       = x[0].fecfin_i,      // 15
          this.USF        = x[0].userfin_i,     // 16
          this.GRP        = x[0].grupo_i,       // 17
          this.MRC        = x[0].marca_i,       // 18
          this.COLOR      = x[0].color_i,       // 19
          this.FCrea      = x[0].fechac_i,      // 20
          this.FeInde     = x[0].fechac_i,      // 21
          this.PROV       = x[0].proveedor_i,   // 22
          this.MODL       = x[0].modelo_i,      // 23
          this.VUTL       = x[0].vidautil_i,    // 24
          this.VRES       = x[0].valres_i,      // 25
          this.Factual    = x[0].fechaa_i,      // 26
          this.FCust      = x[0].fcustodio,     // 27
          this.CGAS       = x[0].cgasto_i,      // 28
          this.CDAN       = x[0].cdan_i,        // 29
          this.CDAR       = x[0].cdar_i,        // 30
          this.VNOR       = x[0].val_normal_i,  // 32
          this.VREVAL     = x[0].val_reval_i,   // 33
          this.Imagen     = x[0].imagen         // 34
        ]        
        
        if(this.arr[0] == '0') { this.arr.push([ this.Placa = false ]) }
        else { this.arr.push([ this.Placa = true ]) }
        
        if(this.arr[1] == '0') { this.arr.push([ this.CLase = false ]) }
        else { this.arr.push([ this.CLase = true ]) }

        if(this.arr[2] == '0') { this.arr.push([ this.NProd = false ]) }
        else { this.arr.push([ this.NProd = true ]) }
        
        if(this.arr[3] == '0') { this.arr.push([ this.Custodio = false ]) }
        else { this.arr.push([ this.Custodio = true ]) }

        if(this.arr[4] == '0') { this.arr.push([ this.Depart = false ]) }
        else { this.arr.push([ this.Depart = true ]) }

        if(this.arr[5] == '0') { this.arr.push([ this.Depart = false ]) }
        else { this.arr.push([ this.Depart = true ]) }
   
        if(this.arr[6] == '0') { this.arr.push([ this.CIUD = false ]) }
        else { this.arr.push([ this.CIUD = true ]) }
   
        if(this.arr[7] == '0') { this.arr.push([ this.Serie = false ]) }
        else { this.arr.push([ this.Serie = true ]) }
   
        if(this.arr[8] == '0') { this.arr.push([ this.Valor = false ]) }
        else { this.arr.push([ this.Valor = true ]) }
   
        if(this.arr[9] == '0') { this.arr.push([ this.Activo = false ]) }
        else { this.arr.push([ this.Activo = true ]) }
   
        if(this.arr[10] == '0') { this.arr.push([ this.Referido = false ]) }
        else { this.arr.push([ this.Referido = true ]) }
   
        if(this.arr[11] == '0') { this.arr.push([ this.FCrea = false ]) }
        else { this.arr.push([ this.FCrea = true ]) }
   
        if(this.arr[12] == '0') { this.arr.push([ this.USC = false ]) }
        else { this.arr.push([ this.USC = true ]) }
   
        if(this.arr[13] == '0') { this.arr.push([ this.FMod = false ]) }
        else { this.arr.push([ this.FMod = true ]) }
   
        if(this.arr[14] == '0') { this.arr.push([ this.USM = false ]) }
        else { this.arr.push([ this.USM = true ]) }
   
        if(this.arr[15] == '0') { this.arr.push([ this.FFin = false ]) }
        else { this.arr.push([ this.FFin = true ]) }
   
        if(this.arr[16] == '0') { this.arr.push([ this.USF = false ]) }
        else { this.arr.push([ this.USF = true ]) }
   
        if(this.arr[17] == '0') { this.arr.push([ this.GRP = false ]) }
        else { this.arr.push([ this.GRP = true ]) }
   
        if(this.arr[18] == '0') { this.arr.push([ this.MRC = false ]) }
        else { this.arr.push([ this.MRC = true ]) }
   
        if(this.arr[19] == '0') { this.arr.push([ this.COLOR = false ]) }
        else { this.arr.push([ this.COLOR = true ]) }
   
        if(this.arr[20] == '0') { this.arr.push([ this.FCrea = false ]) }
        else { this.arr.push([ this.FCrea = true ]) }
   
        if(this.arr[21] == '0') { this.arr.push([ this.FeInde = false ]) }
        else { this.arr.push([ this.FeInde = true ]) }
           
        if(this.arr[22] == '0') { this.arr.push([ this.PROV = false ]) }
        else { this.arr.push([ this.PROV = true ]) }

        if(this.arr[23] == '0') { this.arr.push([ this.MODL = false ]) }
        else { this.arr.push([ this.MODL = true ]) }

        if(this.arr[24] == '0') { this.arr.push([ this.VUTL = false ]) }
        else { this.arr.push([ this.VUTL = true ]) }

        if(this.arr[24] == '0') { this.arr.push([ this.VRES = false ]) }
        else { this.arr.push([ this.VRES = true ]) }

        if(this.arr[25] == '0') { this.arr.push([ this.Factual = false ]) }
        else { this.arr.push([ this.Factual = true ]) }

        if(this.arr[26] == '0') { this.arr.push([ this.FCust = false ]) }
        else { this.arr.push([ this.FCust = true ]) }

        if(this.arr[27] == '0') { this.arr.push([ this.CGAS = false ]) }
        else { this.arr.push([ this.CGAS = true ]) }

        if(this.arr[28] == '0') { this.arr.push([ this.CDAN = false ]) }
        else { this.arr.push([ this.CDAN = true ]) }

        if(this.arr[29] == '0') { this.arr.push([ this.CDAR = false ]) }
        else { this.arr.push([ this.CDAR = true ]) }

        if(this.arr[30] == '0') { this.arr.push([ this.VNOR = false ]) }
        else { this.arr.push([ this.VNOR = true ]) }

        if(this.arr[31] == '0') { this.arr.push([ this.VREVAL = false ]) }
        else { this.arr.push([ this.VREVAL = true ]) }

        if(this.arr[32] == '0') { this.arr.push([ this.Imagen = false ]) }
        else { this.arr.push([ this.Imagen = true ]) }

      }
    )
  }  
//#endregion

  //#region "Empaquetamiento de datos INICIO"
  // Variables para ngModel. Empaquetamiento de la infromación obtenida
  //por los inoputs   para enviar en una petición HTTP POST
  public _FeCREA:    any = toString();
  public _FeMOD:     any = toString();
  public _nProducto: any = toString();
  public _FeDEP:    any = toString();
  public _FeCOMP:   any = toString();
  public _FeFINAL:  any = toString();
  public _FeACT:    any = toString();
  public _FeFN:     any = toString();
  public _PLAC:     any = toString();
  public _CLAS:     any = toString();
  public _DP:       any = toString();
  public _SER:      any = toString();
  public _VLR:      any = toString();
  public _REFE:     any = toString();
  public _UC:       any = toString();
  public _actvClass: any = toString();
  public _USMO:     any = toString();
  public _USFI:     any = toString();
  public _GRPO:     any = toString();
  public _MRCA:     any = toString();
  public _CLR:      any = toString();
  public _PRVR:     any = toString();
  public _MDL:      any = toString();
  public _VUL:      any = toString();
  public _VRE:      any = toString();
  public _CGT:      any = toString();
  public _CD:       any = toString();
  public _CDN:      any = toString();
  public _VNO:      any = toString();
  public _VRVA:     any = toString();
  public _IMGE:     any = toString();
  public _ciudClass: any = toString();
  public _ciudRead: any = toString();
  public _Class: any = toString();
  public _cRead: any = toString();
  public _disp: any = toString();
  public _ActiveClass: any = toString();
  public _activeRead: any = toString();
  // Variables para ngModel. Empaquetamiento de la infromación obtenida
  //por los inoputs   para enviar en una petición HTTP POST FIN
  //#endregion
  
  //#region "@Viewchild, para poder utilizarlos en el focus() reactivo  del formulario INICIO"
  // Variables para desplazarse con focus elementNative INICIO
  @ViewChild('file',    {static: false})   file: ElementRef;      //#file | INPUT ELEMENT
  @ViewChild('fecrea',  {static: false})   fecrea: ElementRef;    //#fecrea | INPUT ELEMENT
  @ViewChild('fedep',   {static: false})   fedep: ElementRef;     //#fedep | INPUT ELEMENT
  @ViewChild('fecomp',  {static: false})   fecomp: ElementRef;    //#fecomp | INPUT ELEMENT
  @ViewChild('femod',   {static: false})   femod: ElementRef;     //#femod | INPUT ELEMENT
  @ViewChild('fefin',   {static: false})   fefin: ElementRef;     //#fefin | INPUT ELEMENT
  @ViewChild('fact',    {static: false})   fact: ElementRef;      //#fact | INPUT ELEMENT
  @ViewChild('fefn',    {static: false})   fefn: ElementRef;      //#fefn | INPUT ELEMENT
  @ViewChild('plac',    {static: false})   plac: ElementRef;      //#plac | INPUT ELEMENT
  @ViewChild('clases',  {static: false})   clases: ElementRef;     //#clase | INPUT ELEMENT
  @ViewChild('btnClase',{static: false})   btnClase: ElementRef;  //#btnClase | BUTTON ELEMENT
  @ViewChild('ciud',    {static: false})   ciud: ElementRef;      //#ciud | INPUT ELEMENT
  @ViewChild('ciudOpt', {static: false})   ciudOpt: ElementRef;   //#ciudOpt | BUTTON ELEMENT
  @ViewChild('custodio',{static: false})   custodio: ElementRef;  //#custodio | INPUT ELEMENT
  @ViewChild('nomProd', {static: false})   nomProd: ElementRef;  //#custodio | INPUT ELEMENT
  @ViewChild('custOpt', {static: false})   custOpt: ElementRef;   //#custOpt | BUTTON ELEMENT
  @ViewChild('serie',   {static: false})   serie: ElementRef;     //#serie | INPUT ELEMENT
  @ViewChild('actv',    {static: false})   actv: ElementRef;      //#actv | INPUT ELEMENT
  @ViewChild('refe',    {static: false})   refe: ElementRef;      //#refe | INPUT ELEMENT
  @ViewChild('usercre', {static: false})   usercre: ElementRef;   //#usercre | INPUT ELEMENT
  @ViewChild('usermo',  {static: false})   usermo: ElementRef;    //#usermo | INPUT ELEMENT
  @ViewChild('userfin', {static: false})   userfin: ElementRef;   //#userfin | INPUT ELEMENT
  @ViewChild('marca',   {static: false})   marca: ElementRef;     //#marca | INPUT ELEMENT
  @ViewChild('color',   {static: false})   color: ElementRef;     //#color | INPUT ELEMENT
  @ViewChild('prov',    {static: false})   prov: ElementRef;      //#prov | INPUT ELEMENT
  @ViewChild('vidul',   {static: false})   vidul: ElementRef;     //#vidul | INPUT ELEMENT
  @ViewChild('cgas',    {static: false})   cgas: ElementRef;      //#cgas | INPUT ELEMENT
  @ViewChild('cdan',    {static: false})   cdan: ElementRef;      //#cdan | INPUT ELEMENT
  @ViewChild('cudpre',  {static: false})   cudpre: ElementRef;    //#cudpre | INPUT ELEMENT
  @ViewChild('vnorm',   {static: false})   vnorm: ElementRef;     //#vnorm | INPUT ELEMENT
  @ViewChild('vreval',  {static: false})   vreval: ElementRef;    //#vreval | INPUT ELEMENT
  // Variables para desplazarse con focus elementNative FIN  
  //#endregion

  //#region "ng IF dropdown"  
  public optA: boolean;
  public optB: boolean;
  public optC: boolean;
  public optE: boolean;
  public optF: boolean;
  //#endregion


  focus(inputs){
    // console.log('Estamos en Focus')
    inputs.nativeElement.focus();
  }

  public modelArr;  

  getDataCall(w, y) {
    // console.log(this._Class);
     
    const promise = new Promise((resolve, reject) => {
      this.data.getDataModel(this._Class).subscribe(x => {
        this.modelArr = x;
        let _ClassRead = {
          nombre: this.modelArr.nombre
        }
        // console.log(this.modelArr);
        resolve(this._cRead = _ClassRead.nombre );
        
        let a:  string[]  = [
          this._Class  = w,
          this._cRead  = y
        ]
     })
    }).then( res => {
         console.log('Este es mi valo obtenido: ' +  res);
    })
    this.funcClose(false, true, false,false,false,false)
  }

   
    public ciudArr;

    getDataCiudad(w, y) {
    // console.log(this._ciudClass);
     
     
    const promise = new Promise((resolve, reject) => {
      this.data.getDataCiud(this._ciudClass ).subscribe(x => {
        this.ciudArr = x;
        let _ClassRead = {
          nombre: this.ciudArr.nombre
        }
        // console.log(this.ciudArr);
        resolve(this._ciudRead = _ClassRead.nombre );

        let a:  string[]  = [
          this._ciudClass = w,
          this._ciudRead  = y
        ]

      })
    }).then( res => {
        console.log('Este es mi valo obtenido: ' +  res);
    })
    this.funcClose(true, false, false,false,false,false)
    }

    getDataActive() {
     // console.log(this._ciudClass);
      const promise = new Promise((resolve, reject) => {
        this.data.getDataGrupoActivo(this._ActiveClass ).subscribe(x => {
          let _ClassRead = {
            nombre: x[0].nombre
          }
          resolve(this._activeRead = _ClassRead.nombre );
          
        })
      }).then( res => {
          // let read = <HTMLInputElement> document.getElementById('_ClaseB');
          // read.value = res;
          console.log('Este es mi valor obtenido: ' +  res);
      })
    }

    // variables  [(ngModel)] INICIO
    public _CustClass: any;
    public _CustRead: string;
    // variables  [(ngModel)] FIN
    public custArr;
    
    getDataCust(w, y) {
  
      // this.closDrop(m);
      const promise = new Promise((resolve, reject) => {
        this.data.getDataCustodio(this._CustClass )
        .subscribe(
          x => {
          this.custArr = x;
          let _ClassRead = {
            nombre: this.custArr.nombre
          }
          
          resolve(this._CustRead = _ClassRead.nombre);

          let a:  string[]  = [
            this._CustClass = w,
            this._CustRead  = y
          ]
          
          // this._UC = this.custArr.usucrea;
          console.log(this.custArr.usucrea);

          })
      }).then( res => {
          console.log(res)
      })
      this.funcClose(false, false, true,false,false,false);
    }

    public cuentasArr;
    public optD;
    public _CuentClass;
    public _CuentRead;
    getDataCuent(w, y, object) {
     
     // console.log(object);
      // this.data.getDataCuentas(this._CGT).subscribe(x => {

      // })
      const promise = new Promise((resolve, reject) => {
        this.data.getDataCuentas(object)
        .subscribe(
          x => {
          this.cuentasArr = x;
          let _ClassRead = {
            nombre: this.cuentasArr.nombre
          }
          resolve(this._CuentRead = _ClassRead.nombre);  
          let a:  string[]  = [
            this._CuentClass = w,
            this._CuentRead  = y
          ]
          // this._UC = this.custArr.usucrea;
          console.log(a);
          })
      }).then( res => {
        //  console.log(res)
      })

      this.funcClose(false, false, false,true,false,false);
    }
    public cuentasArrB;
    public _CuentClassB;
    public _CuentReadB;
    getDataCuentB(w, y, object) {
     
      
      console.log(object);
      // this.data.getDataCuentas(this._CGT).subscribe(x => {

      // })
      const promise = new Promise((resolve, reject) => {
        this.data.getDataCuentas(object)
        .subscribe(
          x => {
          this.cuentasArrB = x;
          let _ClassRead = {
            nombre: this.cuentasArrB.nombre
          }
          resolve(this._CuentReadB = _ClassRead.nombre);  
          let a:  string[]  = [
            this._CuentClassB = w,
            this._CuentReadB  = y
          ]
          // this._UC = this.custArr.usucrea;
          console.log(a);
          })
      }).then( res => {
          console.log(res)
      })

      this.funcClose(false, false, false,false,true,false)
    }

    public cuentasArrC;
    public _CuentClassC;
    public _CuentReadC;
    getDataCuentC(w, y, object) {
  
     // console.log(object);
      // this.data.getDataCuentas(this._CGT).subscribe(x => {

      // })
      const promise = new Promise((resolve, reject) => {
        this.data.getDataCuentas(object)
        .subscribe(
          x => {
          this.cuentasArrC = x;
          let _ClassRead = {
            nombre: this.cuentasArrC.nombre
          }
          resolve(this._CuentReadC = _ClassRead.nombre);  
          let a:  string[]  = [
            this._CuentClassC = w,
            this._CuentReadC  = y
          ]
          // this._UC = this.custArr.usucrea;
          console.log(a);
          })
      }).then( res => {
          console.log(res)
      })
      this.funcClose(false, false, false,false,false,true)
    }

  // FUNCIONES PARA OCULTAR LOS DROWDOWN
  // GENERADOS POR LOS INPUTS INICIO
    
    closCus(m) {
      this.optC = m;
    }

    closCiud(m) {
      this.optA = m;
    }

    closModel(m) {
      this.optB = m;
    }

    closCuent(m){
      this.optD = m;
    }

    
    closCuentB(m){
      this.optE = m;
    }

    closCuentC(m){
      this.optF = m;
    }

    funcClose(a,b,c,d,e, f){
      this.optA = a;
      this.optB = b;
      this.optC = c;
      this.optD = d;
      this.optE = e;
      this.optF = f;
    }

  // FUNCIONES PARA OCULTAR LOS DROWDOWN
  // GENERADOS POR LOS INPUTS FIN

    //#region IMAGEN

    // getBaseUrl ()  {
    //   const file = document.querySelector('input[type=file]')['files'][0];
    //   var reader = new FileReader();
    //   let baseString
    //   reader.onloadend = function () {
    //       baseString = reader.result;
    //       let img = document.getElementById('img');
    //       img.setAttribute('src', "data:image/jpg|png;base64," + baseString);
    //       console.log(img);
    //       console.log(baseString); 
    //   };
    //   reader.readAsDataURL(file);
     
    // }
//#region funcion para limpiar el formulario
    cleanForm(){
      this._IMGE = "";
      this._FeCREA    = new Date();
      this._FeMOD     = new Date();
      this._nProducto = "";
      this._FeDEP = new Date();
      this._FeCOMP = new Date();
      this._FeFINAL = new Date();
      this._FeACT = new Date();
      this._FeFN = new Date();
      this._PLAC = "";
      this._CLAS = "";
      this._CustClass = "";
      this._DP = "";
      this._SER = "";
      this._VLR = 0;
      this._REFE = "";
      this._UC = "";
      this._actvClass = "";
      this._USMO  = "";
      this._USFI = "";
      this._GRPO  = "";
      this._MRCA  = "";
      this._CLR   = "";
      this._PRVR  = "";
      this._MDL   = "";
      this._VUL   = 0;
      this._VRE   = 0;
      this._CGT   = "";
      this._CD    = "";
      this._CDN   = "";
      this._VNO   = 0;
      this._VRVA  = 0;
      this._IMGE  = "";
      this._ciudClass= "";
      this._ciudRead = "";
      this._Class = "";
      this._cRead = "";
      this._disp = "";
      this._ActiveClass = "";
      this._activeRead = "";
    }
    //#endregion

    encodeImageFileAsURL() {

      var filesSelected = <HTMLInputElement> document.getElementById("inputFileToLoad");
    let fileId = filesSelected.files;
      if (fileId.length > 0) {
        var fileToLoad = filesSelected[0];
  
        var fileReader = new FileReader();
  
        fileReader.onloadend = function(fileLoadedEvent) {
          var srcData = fileLoadedEvent.target.result.toString(); // <--- data: base64
  
          var newImage = document.createElement('img');
          newImage.src = srcData;
          newImage.setAttribute('id', 'img');
          newImage.style.width= "100%";
          newImage.style.height= "auto";          
          document.getElementById("imgTest").innerHTML = newImage.outerHTML;
         // alert("Converted Base64 version is " + document.getElementById("imgTest").innerHTML);
         // console.log("Converted Base64 version is " + document.getElementById("imgTest").innerHTML);
        }
        for(var i=0;i<fileId.length;i++){
          fileReader.readAsDataURL(fileId[i]);
       }
      }
    }


    //#endregion

    saveItem(){
    let formArr:QRDATA = {
      placa      : this._PLAC,
      clase      : this._Class,
      nombre     : this._nProducto,
      custodio   : this._CustClass,
      dpto       : this._DP,
      ciudad     : this._ciudClass,
      serie      : this._SER,
      valor      : this._VLR,
      activo     : this._actvClass,
      refer      : this._REFE,
      feccrea    : this._FeCREA,
      usucrea    : this._UC,
      fecmodi    : this._FeMOD,
      usumodi    : this._USMO,
      fecfin     : this._FeFINAL,
      horafin    : '',
      userfin    : this._USFI,
      barra      : '',
      grupo      : this._GRPO,
      marca      : this._MRCA,
      color      : this._CLR,
      fechac     : this._FeACT,
      proveedor  : this._PRVR,
      modelo     : this._MDL,
      vidautil   : this._VUL,
      valres     : this._VRE,
      valor2     : 0,
      fechaa     : this._FeDEP,
      fcustodio  : this._FeMOD,
      cgasto     : this._CGT,
      cdan       : this._CD,
      cdar       : this._CDN,
      val_normal : this._VNO,
      vaL_REVAL  : this._VRVA,
      imagen     : this._IMGE,
      valor_resi : this._VRE,
      valor_res2 : 0,
      xxx        : 0,
      IMAGENBIT  : this._IMGE
    }

    console.log(formArr);
    
    this.data.saveDataInv(formArr).subscribe(x => {
      formArr = x;
      Swal.fire({
        icon: 'success',
        title: '¡Bien!...',
        text: 'Haz guardado tu activo!'
      })
    this.cleanForm();
    })
    // let arrReport: any = {
    //   fechaInv: "2020-09-09T00:00:00",
    //   placaInv: "022202",
    //   descripInv: "TESTINVENTARIO 2",
    //   custodio: "ADMIN",
    //   ciudad: "GUAYAQUIL",
    //   campoA: "--",
    //   campoB: "--"
    // }
    // this.data.saveReport(arrReport).subscribe(y => {
    //   arrReport = y
    // })

    }

 

}
