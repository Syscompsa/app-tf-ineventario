import { Component, OnInit, Input, ViewChild, ElementRef, Inject } from '@angular/core';
import { ConfigService } from '../Services/config.service';
import { DataCallService } from '../Services/data-call.service';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css'; // optional for styling
import { Router } from '@angular/router';
import { QRDATA } from '../Models/QRDATA';
import Swal from 'sweetalert2';
import { Dp12a120 } from '../Models/Dp12a120';
import { WebuserService } from '../Services/webuser.service';




@Component({
  selector: 'app-activo-fijo',
  templateUrl: './activo-fijo.component.html',
  styleUrls: ['./activo-fijo.component.css']
})
export class ActivoFijoComponent implements OnInit {
  constructor(public conf: ConfigService,
              public data: DataCallService,
              public router: Router,
              public us: WebuserService
              ) { }
    //#endregion

    //#region "@Input()"

  @Input()
  set Factual(value: any) {
    this._Factual = value;
  }
  get Factual(): any {
    return this._Factual;
  }

  @Input()
  set FMod(value: any) {
    this._FMod = value;
  }
  get FMod(): any {
    return this._FMod;
  }

  @Input()
  set FFin(value: any) {
    this._FFin = value;
  }
  get FFin(): any {
    return this._FFin;
  }

  @Input()
  set FCrea(value: any) {
    this._FCrea = value;
  }
  get FCrea(): any {
    return this._FCrea;
  }

  @Input()
  set FCust(value: any) {
    this._FCust = value;
  }
  get FCust(): any {
    return this._FCust;
  }

  @Input()
  set FeInde(value: any) {
    this._FeInde = value;
  }
  get FeInde(): any {
    return this._FeInde;
  }

  @Input()
  set FCompra(value: any) {
    this._FCompra = value;
  }
  get FCompra(): any {
    return this._FCompra;
  }

  @Input()
  set Imagen(value: any) {
    this._Imagen = value;
  }
  get Imagen(): any {
    return this._Imagen;
  }

  @Input()
  set Placa(value: any) {
    this._Placa = value;
  }
  get Placa(): any {
    return this._Placa;
  }

  @Input()
  set CLase(value: any) {
    this._CLasse = value;
  }
  get CLase(): any {
    return this._CLasse;
  }

  @Input()
  set NProd(value: any) {
    this._NProd = value;
  }
  get NProd(): any {
    return this._NProd;
  }

  @Input()
  set Custodio(value: any) {
    this._Custodio = value;
  }
  get Custodio(): any {
    return this._Custodio;
  }

  @Input()
  set Depart(value: any) {
    this._Depart = value;
  }
  get Depart(): any {
    return this._Depart;
  }

  @Input()
  set Serie(value: any) {
    this._Serie = value;
  }
  get Serie(): any {
    return this._Serie;
  }

  @Input()
  set Valor(value: any) {
    this._Valor = value;
  }
  get Valor(): any {
    return this._Valor;
  }

  @Input()
  set Activo(value: any) {
    this._Activo = value;
  }
  get Activo(): any {
    return this._Activo;
  }

  @Input()
  set Referido(value: any) {
    this._Referido = value;
  }
  get Referido(): any {
    return this._Referido;
  }

  @Input()
  set USC(value: any) {
    this._USC = value;
  }
  get USC(): any {
    return this._USC;
  }

  @Input()
  set USM(value: any) {
    this._USM = value;
  }
  get USM(): any {
    return this._USM;
  }

  @Input()
  set USF(value: any) {
    this._USF = value;
  }
  get USF(): any {
    return this._USF;
  }

  @Input()
  set GRP(value: any) {
    this._GRP = value;
  }
  get GRP(): any {
    return this._GRP;
  }

  @Input()
  set MRC(value: any) {
    this._MRC = value;
  }
  get MRC(): any {
    return this._MRC;
  }

  @Input()
  set PROV(value: any) {
    this._PROV = value;
  }
  get PROV(): any {
    return this._PROV;
  }

  @Input()
  set MODL(value: any) {
    this._MODL = value;
  }
  get MODL(): any {
    return this._MODL;
  }

  @Input()
  set VUTL(value: any) {
    this._VUTL = value;
  }
  get VUTL(): any {
    return this._VUTL;
  }

  @Input()
  set VRES(value: any) {
    this._VRES = value;
  }
  get VRES(): any {
    return this._VRES;
  }

  @Input()
  set CGAS(value: any) {
    this._CGAS = value;
  }
  get CGAS(): any {
    return this._CGAS;
  }

  @Input()
  set CDAN(value: any) {
    this._CDAN = value;
  }
  get CDAN(): any {
    return this._CDAN;
  }

  @Input()
  set CDAR(value: any) {
    this._CDAR = value;
  }
  get CDAR(): any {
    return this._CDAR;
  }

  @Input()
  set VNOR(value: any) {
    this._VNOR = value;
  }
  get VNOR(): any {
    return this._VNOR;
  }

  @Input()
  set VREVAL(value: any) {
    this._VREVAL = value;
  }
  get VREVAL(): any {
    return this._VREVAL;
  }

  @Input()
  set COLOR(value: any) {
    this._COLOR = value;
  }
  get COLOR(): any {
    return this._COLOR;
  }
  @Input()
  set CIUD(value: any) {
    this._CIUD = value;
  }
  get CIUD(): any {
    return this._CIUD;
  }
              // @Inject('BASE_URL') private baseUrl: string
              public datenow: any;

  //#region "@INPUTS VALUES"
  // estas son variables para los values de los inputs
  private _Factual: any;
  private _FMod: any;
  private _FFin: any;
  private _FCrea: any;
  private _FCust: any;
  private _FeInde: any;
  private _FCompra: any;
  private _Imagen: any;
  private _Placa: any;
  private _CLasse: any;
  private _NProd: any;
  private _Custodio: any;
  private _Depart: any;
  private _Serie: any;
  private _Valor: any;
  private _Activo: any;
  private _Referido: any;
  private _USC: any;
  private _USM: any;
  private _USF: any;
  private _GRP: any;
  private _MRC: any;
  private _PROV: any;
  private _MODL: any;
  private _VUTL: any;
  private _VRES: any;
  private _CGAS: any;
  private _CDAN: any;
  private _CDAR: any;
  private _VNOR: any;
  private _VREVAL: any;
  private _COLOR: any;
  private _CIUD: any;
  //#endregion
public placaServices: any = [];
public modelData: any[] = [];
public pId;
public DepArr;
public DepRead;
public reportArr;

  //#region "Obtener la interfaz del componente Configuración de formulario"
public arr: any[] = [];
//#endregion

  //#region "Empaquetamiento de datos INICIO"
  // Variables para ngModel. Empaquetamiento de la infromación obtenida
  // por los inputs   para enviar en una petición HTTP POST
  public _actCont: any;
  public _FeCREA: any;
  public _FeMOD: any;
  public _nProducto: any;
  public _FeDEP: any;
  public _FeCOMP: any;
  public _FeFINAL: any;
  public _FeACT: any;
  public _FeFN: any;
  public _PLAC: any;
  public _CLAS: any;
  public _DP: any;
  public _SER: any;
  public _VLR: any;
  public _REFE: any = localStorage.getItem('User');
  public _UC: any = localStorage.getItem('User');
  public _actvClass: any;
  public _USMO: any = localStorage.getItem('User');
  public _USFI: any = localStorage.getItem('User');
  public _GRPO: any;
  public _MRCA: any;
  public _CLR: any;
  public _PRVR: any;
  public _MDL: any;
  public _VUL: any;
  public _VRE: any;
  public _CGT: any;
  public _CD: any;
  public _CDN: any;
  public _VNO: any;
  public _VRVA: any;
  public _IMGE: any;
  public _ciudClass: any;
  public _ciudRead: any;
  public _Class: any;
  public _cRead: any;
  public _disp: any;
  public _ActiveClass: any;
  public _activeRead: any;


  // Variables para ngModel. Empaquetamiento de la infromación obtenida
  // por los inoputs   para enviar en una petición HTTP POST FIN
  //#endregion

  //#region "@Viewchild, para poder utilizarlos en el focus() reactivo  del formulario INICIO"
  // Variables para desplazarse con focus elementNative INICIO
  @ViewChild('file',    {static: false})   file: ElementRef;      // #file | INPUT ELEMENT
  @ViewChild('fecrea',  {static: false})   fecrea: ElementRef;    // #fecrea | INPUT ELEMENT
  @ViewChild('fedep',   {static: false})   fedep: ElementRef;     // #fedep | INPUT ELEMENT
  @ViewChild('fecomp',  {static: false})   fecomp: ElementRef;    // #fecomp | INPUT ELEMENT
  @ViewChild('femod',   {static: false})   femod: ElementRef;     // #femod | INPUT ELEMENT
  @ViewChild('fefin',   {static: false})   fefin: ElementRef;     // #fefin | INPUT ELEMENT
  @ViewChild('fact',    {static: false})   fact: ElementRef;      // #fact | INPUT ELEMENT
  @ViewChild('fefn',    {static: false})   fefn: ElementRef;      // #fefn | INPUT ELEMENT
  @ViewChild('plac',    {static: false})   plac: ElementRef;      // #plac | INPUT ELEMENT
  @ViewChild('clases',  {static: false})   clases: ElementRef;     // #clase | INPUT ELEMENT
  @ViewChild('btnClase', {static: false})   btnClase: ElementRef;  // #btnClase | BUTTON ELEMENT
  @ViewChild('ciud',    {static: false})   ciud: ElementRef;      // #ciud | INPUT ELEMENT
  @ViewChild('ciudOpt', {static: false})   ciudOpt: ElementRef;   // #ciudOpt | BUTTON ELEMENT
  @ViewChild('custodio', {static: false})   custodio: ElementRef;  // #custodio | INPUT ELEMENT
  @ViewChild('nomProd', {static: false})   nomProd: ElementRef;  // #custodio | INPUT ELEMENT
  @ViewChild('custOpt', {static: false})   custOpt: ElementRef;   // #custOpt | BUTTON ELEMENT
  @ViewChild('serie',   {static: false})   serie: ElementRef;     // #serie | INPUT ELEMENT
  @ViewChild('actv',    {static: false})   actv: ElementRef;      // #actv | INPUT ELEMENT
  @ViewChild('refe',    {static: false})   refe: ElementRef;      // #refe | INPUT ELEMENT
  @ViewChild('usercre', {static: false})   usercre: ElementRef;   // #usercre | INPUT ELEMENT
  @ViewChild('usermo',  {static: false})   usermo: ElementRef;    // #usermo | INPUT ELEMENT
  @ViewChild('userfin', {static: false})   userfin: ElementRef;   // #userfin | INPUT ELEMENT
  @ViewChild('marca',   {static: false})   marca: ElementRef;     // #marca | INPUT ELEMENT
  @ViewChild('color',   {static: false})   color: ElementRef;     // #color | INPUT ELEMENT
  @ViewChild('prov',    {static: false})   prov: ElementRef;      // #prov | INPUT ELEMENT
  @ViewChild('vidul',   {static: false})   vidul: ElementRef;     // #vidul | INPUT ELEMENT
  @ViewChild('cgas',    {static: false})   cgas: ElementRef;      // #cgas | INPUT ELEMENT
  @ViewChild('cdan',    {static: false})   cdan: ElementRef;      // #cdan | INPUT ELEMENT
  @ViewChild('cudpre',  {static: false})   cudpre: ElementRef;    // #cudpre | INPUT ELEMENT
  @ViewChild('vnorm',   {static: false})   vnorm: ElementRef;     // #vnorm | INPUT ELEMENT
  @ViewChild('vreval',  {static: false})   vreval: ElementRef;    // #vreval | INPUT ELEMENT
  // Variables para desplazarse con focus elementNative FIN
  //#endregion

  //#region "ng IF dropdown"
  public optA: boolean;
  public optB: boolean;
  public optC: boolean;
  public optE: boolean;
  public optF: boolean;
  public optG: boolean;
  public optH: boolean;
  public optI: boolean;

    public modelArr;

    public ciudArr;
    // tslint:disable-next-line: member-ordering
    public grupArr;
    public _grupRead;

    public MarcArr;
    public _MarcRead;

    // variables  [(ngModel)] INICIO
    public _CustClass: any;
    public _CustRead: string;
    // variables  [(ngModel)] FIN
    public custArr;

    public cuentasArr;
    public optD;
    public _CuentRead;

    public _CuentClass;

    public cuentasArrB;
    public _CuentClassB;
    public _CuentReadB;

    public cuentasArrC;
    public _CuentClassC;
    public _CuentReadC;

    // tslint:disable-next-line: member-ordering
    public dataimg;
    public img64;

    lista:string[]=["Bueno","Mal estado","Obsoleto"];
    public optionSel;
  ngOnInit() {
    this.getInterfaz();
    this.fechActual();
    this.data.getDataByPlaca().subscribe( x => {

       this.placaServices = x;


       const placaNow = this.placaServices[0].placa_Post;
       console.log(this.placaServices);
       this.data.getDataByPlacaId(placaNow)
       .subscribe(resp => {
        this.modelData[0] = resp;
        this._IMGE = this.modelData[0][0].imagenbit;
        console.log(this.modelData[0])
        this._nProducto = this.modelData[0][0].nombre;
        this._DP = this.modelData[0][0].dpto
        this._PLAC = this.modelData[0][0].placa;
        // console.log(this._PLAC);
        this.pId = this.modelData[0][0].id;

        this._actCont = this.modelData[0][0].af_control;
        this._CustClass = this.modelData[0][0].custodio;
        // // console.log("Departamentos: " + this.modelData[0].dpto);
        this._SER       = this.modelData[0][0].serie;
        this._VLR       = this.modelData[0][0].vaL_NORMAL;
        this._REFE      = localStorage.getItem('User');
        // this._UC        = this.modelData[0][0].usucrea;
        this._actvClass = this.modelData[0][0].activo;
        // this._USMO      = this.modelData[0][0].usumodi;
        // this._USFI      = this.modelData[0][0].userfin;
        this._GRPO      = this.modelData[0][0].grupo;
        this._MRCA      = this.modelData[0][0].marca;
        this._CLR       = this.modelData[0][0].color;
        this._PRVR      = this.modelData[0][0].proveedor;
        this._MDL       = this.modelData[0][0].modelo;
        // this._VUL       = this.modelData[0][0].vidautil;
        // this._VRE       = this.modelData[0][0].valoR_RESI;
        // this._CGT       = this.modelData[0][0].cgasto;
        // this._CD        = this.modelData[0][0].cdan;
        // this._CDN       = this.modelData[0][0].cdar;
        // this._VNO       = this.modelData[0][0].vaL_NORMAL;
        // this._VRVA      = this.modelData[0][0].vaL_REVAL;
        // this._VLR      = this.modelData[0][0].valor;
        this._ciudClass = this.modelData[0][0].ciudad;
        this._Class     = this.modelData[0][0].clase;
        // this._ActiveClass = '';
        // this._FeCREA    = this.modelData[0][0].feccrea.slice(0, 10);
        // this._FeMOD     = this.modelData[0][0].fecmodi.slice(0, 10);
        // this._FeDEP     = this.modelData[0][0].fechac.slice(0, 10);
        // this._FeCOMP    = this.modelData[0][0].horafin.slice(0, 10);
        // this._FeFINAL   = this.modelData[0][0].fecfin.slice(0, 10);
        // this._FeACT     = new Date();
        // this._FeFN      = this.modelData[0][0].fcustodio.slice(0, 10);


        //Envia el reprte cuando carguen estos datos



      }, err => {
        this.cleanForm();
      }
      );
    });
  }


  sendReporte() {
    this.reportArr = {
      fechaInv: new Date(),
      placaInv: this._PLAC,
      descripInv: this._nProducto,
      custodio: this._CustClass,
      ciudad: this._ciudClass,
      campoA: this._DP,
      campoB: "--"
    };
    this.data.saveReport(this.reportArr).subscribe(x => {

      this.reportArr = x;
      // console.log('this.reportArr');
      // console.log(this.reportArr);
    });
  }

  getInterfaz() {
    this.conf.getConfig().subscribe(
      x => {
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
        ];

        if (this.arr[0] == '0') { this.arr.push([ this.Placa = false ]); } else { this.arr.push([ this.Placa = true ]); }

        if (this.arr[1] == '0') { this.arr.push([ this.CLase = false ]); } else { this.arr.push([ this.CLase = true ]); }

        if (this.arr[2] == '0') { this.arr.push([ this.NProd = false ]); } else { this.arr.push([ this.NProd = true ]); }

        if (this.arr[3] == '0') { this.arr.push([ this.Custodio = false ]); } else { this.arr.push([ this.Custodio = true ]); }

        if (this.arr[4] == '0') { this.arr.push([ this.Depart = false ]); } else { this.arr.push([ this.Depart = true ]); }

        if (this.arr[5] == '0') { this.arr.push([ this.Depart = false ]); } else { this.arr.push([ this.Depart = true ]); }

        if (this.arr[6] == '0') { this.arr.push([ this.CIUD = false ]); } else { this.arr.push([ this.CIUD = true ]); }

        if (this.arr[7] == '0') { this.arr.push([ this.Serie = false ]); } else { this.arr.push([ this.Serie = true ]); }

        if (this.arr[8] == '0') { this.arr.push([ this.Valor = false ]); } else { this.arr.push([ this.Valor = true ]); }

        if (this.arr[9] == '0') { this.arr.push([ this.Activo = false ]); } else { this.arr.push([ this.Activo = true ]); }

        if (this.arr[10] == '0') { this.arr.push([ this.Referido = false ]); } else { this.arr.push([ this.Referido = true ]); }

        if (this.arr[11] == '0') { this.arr.push([ this.FCrea = false ]); } else { this.arr.push([ this.FCrea = true ]); }

        if (this.arr[12] == '0') { this.arr.push([ this.USC = false ]); } else { this.arr.push([ this.USC = true ]); }

        if (this.arr[13] == '0') { this.arr.push([ this.FMod = false ]); } else { this.arr.push([ this.FMod = true ]); }

        if (this.arr[14] == '0') { this.arr.push([ this.USM = false ]); } else { this.arr.push([ this.USM = true ]); }

        if (this.arr[15] == '0') { this.arr.push([ this.FFin = false ]); } else { this.arr.push([ this.FFin = true ]); }

        if (this.arr[16] == '0') { this.arr.push([ this.USF = false ]); } else { this.arr.push([ this.USF = true ]); }

        if (this.arr[17] == '0') { this.arr.push([ this.GRP = false ]); } else { this.arr.push([ this.GRP = true ]); }

        if (this.arr[18] == '0') { this.arr.push([ this.MRC = false ]); } else { this.arr.push([ this.MRC = true ]); }

        if (this.arr[19] == '0') { this.arr.push([ this.COLOR = false ]); } else { this.arr.push([ this.COLOR = true ]); }

        if (this.arr[20] == '0') { this.arr.push([ this.FCrea = false ]); } else { this.arr.push([ this.FCrea = true ]); }

        if (this.arr[21] == '0') { this.arr.push([ this.FeInde = false ]); } else { this.arr.push([ this.FeInde = true ]); }

        if (this.arr[22] == '0') { this.arr.push([ this.PROV = false ]); } else { this.arr.push([ this.PROV = true ]); }

        if (this.arr[23] == '0') { this.arr.push([ this.MODL = false ]); } else { this.arr.push([ this.MODL = true ]); }

        if (this.arr[24] == '0') { this.arr.push([ this.VUTL = false ]); } else { this.arr.push([ this.VUTL = true ]); }

        if (this.arr[24] == '0') { this.arr.push([ this.VRES = false ]); } else { this.arr.push([ this.VRES = true ]); }

        if (this.arr[25] == '0') { this.arr.push([ this.Factual = false ]); } else { this.arr.push([ this.Factual = true ]); }

        if (this.arr[26] == '0') { this.arr.push([ this.FCust = false ]); } else { this.arr.push([ this.FCust = true ]); }

        if (this.arr[27] == '0') { this.arr.push([ this.CGAS = false ]); } else { this.arr.push([ this.CGAS = true ]); }

        if (this.arr[28] == '0') { this.arr.push([ this.CDAN = false ]); } else { this.arr.push([ this.CDAN = true ]); }

        if (this.arr[29] == '0') { this.arr.push([ this.CDAR = false ]); } else { this.arr.push([ this.CDAR = true ]); }

        if (this.arr[30] == '0') { this.arr.push([ this.VNOR = false ]); } else { this.arr.push([ this.VNOR = true ]); }

        if (this.arr[31] == '0') { this.arr.push([ this.VREVAL = false ]); } else { this.arr.push([ this.VREVAL = true ]); }

        if (this.arr[32] == '0') { this.arr.push([ this.Imagen = false ]); } else { this.arr.push([ this.Imagen = true ]); }

      }
    );
  }
  //#endregion

    focus(inputs) {
    // console.log('Estamos en Focus')
    inputs.nativeElement.focus();
    }

    getDataCall(w, y) {
    // console.log(this._Class);

    const promise = new Promise((resolve, reject) => {
      this.data.getDataClases(this._Class).subscribe(x => {
        this.modelArr = x;
        let _ClassRead = {
          nombre: this.modelArr.nombre
        };
        // console.log(this.modelArr);
        resolve(this._cRead = _ClassRead.nombre );

        const a: string[]  = [
          this._Class  = w,
          this._cRead  = y
        ];
     });
    }).then( res => {
        // console.log('Este es mi valo obtenido: ' +  res);
    });
    this.funcClose(false, true, false, false, false, false, false, false);
    }

    getDataCiudad(w, y) {
    // console.log(this._ciudClass);


    const promise = new Promise((resolve, reject) => {
      this.data.getDataCiud(this._ciudClass ).subscribe(x => {
        this.ciudArr = x;
        let _ClassRead = {
          nombre: this.ciudArr.nombre
        };
        // console.log(this.ciudArr);
        resolve(this._ciudRead = _ClassRead.nombre );

        const a: string[]  = [
          this._ciudClass = w,
          this._ciudRead  = y
        ];

      });
    }).then( res => {
        console.log('Este es mi valo obtenido: ' +  res);
    });
    this.funcClose(true, false, false, false, false, false, false, false);
    }
    getDataGrupo(w, y) {
     // console.log(this._GRPO);
      this.data.getDataGrup(this._GRPO).subscribe(x => {
          this.grupArr = x;
          let _ClassRead = {
            nombre: this.grupArr.nombre
          };
          console.log(this.grupArr);
          this._grupRead = _ClassRead.nombre;
          const a: string[]  = [
            this._GRPO = w,
            this._grupRead = y
          ];
        });
      this.funcClose(false, false, false, false, false, false, true, false);
      }
    getDataMarca(w, y) {
      console.log(this._MRCA);
      const promise = new Promise((resolve, reject) => {
        this.data.getDataMarca(this._MRCA).subscribe(x => {
          this.MarcArr = x;
          let _ClassRead = {
            nombre: this.MarcArr.nombre
          };
          console.log(this.MarcArr);
          resolve(this._MarcRead = _ClassRead.nombre );
          const a: string[]  = [
            this._MRCA = w,
            this._MarcRead = y
          ];

        });
      }).then( res => {
         // console.log('Este es mi valo obtenido: ' +  res);
      });
      this.funcClose(false, false, false, false, false, false, false, true);
    }

    getDataActive() {
     // console.log(this._ciudClass);
      const promise = new Promise((resolve, reject) => {
        this.data.getDataGrupoActivo(this._ActiveClass ).subscribe(x => {
          let _ClassRead = {
            nombre: x[0].nombre
          };
          resolve(this._activeRead = _ClassRead.nombre );

        });
      }).then( res => {
          // let read = <HTMLInputElement> document.getElementById('_ClaseB');
          // read.value = res;
         // console.log('Este es mi valor obtenido: ' +  res);
      });
    }

    getDataCust(w, y) {

      // this.closDrop(m);
      const promise = new Promise((resolve, reject) => {
        this.data.getDataCustodio(this._CustClass )
        .subscribe(
          x => {
          this.custArr = x;
          let _ClassRead = {
            nombre: this.custArr.nombre
          };

          resolve(this._CustRead = _ClassRead.nombre);

          const a: string[]  = [
            this._CustClass = w,
            this._CustRead  = y
          ];

          // this._UC = this.custArr.usucrea;
          // console.log(this.custArr.usucrea);

          });
      }).then( res => {
          console.log(res);
      });
      this.funcClose(false, false, true, false, false, false, false, false);
    }

    getDataDep(w, y) {

      // this.closDrop(m);
      const promise = new Promise((resolve, reject) => {
        this.data.getDataDep(this._DP)
        .subscribe(
          x => {
          this.DepArr = x;
          let _ClassRead = {
            nombre: this.DepArr.nombre
          };

          resolve(this.DepRead = _ClassRead.nombre);

          const a: string[]  = [
            this._DP = w,
            this.DepRead  = y
          ];

          // this._UC = this.custArr.usucrea;
          console.log(this.DepArr.nombre);

          });
      }).then( res => {
          console.log(res);
      });
      this.funcClose(false, false, false, false, false, false, true, false);
    }
    getDataCuent(w, y) {
      const promise = new Promise((resolve, reject) => {
        this.data.getDataCuentas(this._CGT)
        .subscribe(
          x => {
          this.cuentasArr = x;
          let _ClassRead = {
            codigo: this.cuentasArr.codigo
          };
          resolve(this._CuentRead = _ClassRead.codigo);
          const a: string[]  = [
            this._CuentClass = y,
            this._CuentRead  = w
          ];
          // this._UC = this.custArr.usucrea;
          // console.log(a);
          });
      }).then( res => {
        //  console.log(res)
        this._CGT = this._CuentRead;
      });

      this.funcClose(false, false, false, true, false, false, false, false);
    }
    getDataCuentB(w, y) {

      // this.data.getDataCuentas(this._CGT).subscribe(x => {

      // })
      const promise = new Promise((resolve, reject) => {
        this.data.getDataCuentas(this._CD)
        .subscribe(
          x => {
          this.cuentasArrB = x;
          console.log(this.cuentasArrB);
          let _ClassRead = {
            codigo: this.cuentasArrB.codigo
          };
          resolve(this._CuentReadB = _ClassRead.codigo);
          const a: string[]  = [
            this._CuentClassB = y,
            this._CuentReadB  = w
          ];
          // this._UC = this.custArr.usucrea;
          console.log(a);
          });
      }).then( res => {
          this._CD = this._CuentReadB;
      });

      this.funcClose(false, false, false, false, true, false, false, false);
    }
    getDataCuentC(w, y) {
      const promise = new Promise((resolve, reject) => {
        this.data.getDataCuentas(this._CDN)
        .subscribe(
          x => {
          this.cuentasArrC = x;
          console.log(this._CDN);
          console.log(this.cuentasArrC);
          let _ClassRead = {
            codigo: this.cuentasArrB.codigo
          };
          resolve(this._CuentReadC = _ClassRead.codigo);
          const a: string[]  = [
            this._CuentClassC = w,
            this._CuentReadC  = y
          ];

          console.log(a);
          });
      }).then( res => {
          this._CDN = this._CuentReadC;
      });
      this.funcClose(false, false, false, false, false, true, false, false);
    }


  //#region  FUNCIONES PARA OCULTAR LOS DROWDOWN
  // GENERADOS POR LOS INPUTS INICIO
    funcClose(a, b, c, d, e, f, g, h) {
      this.optA = a;
      this.optB = b;
      this.optC = c;
      this.optD = d;
      this.optE = e;
      this.optF = f;
      this.optG = g;
      this.optH = h;
      // this.optI = i;
    }
//#endregion

//#region funcion para limpiar el formulario
    cleanForm() {
      this.pId = '';
      this._IMGE = '';
      this._FeCREA    = new Date();
      this._FeMOD     = new Date();
      this._nProducto = '';
      this._FeDEP = new Date();
      this._FeCOMP = new Date();
      this._FeFINAL = new Date();
      this._FeACT = new Date();
      this._FeFN = new Date();
      this._PLAC = '';
      this._CLAS = '';
      this._CustClass = '';
      this._DP = '';
      this._SER = '';
      this._VLR = 0;
      this._REFE = '';
      this._UC = '';
      this._actvClass = '';
      this._USMO  = '';
      this._USFI = '';
      this._GRPO  = '';
      this._MRCA  = '';
      this._CLR   = '';
      this._PRVR  = '';
      this._MDL   = '';
      this._VUL   = 0;
      this._VRE   = 0;
      this._CGT   = '';
      this._CD    = '';
      this._CDN   = '';
      this._VNO   = 0;
      this._VRVA  = 0;
      this._IMGE  = '';
      this._ciudClass = '';
      this._ciudRead = '';
      this._Class = '';
      this._cRead = '';
      this._disp = '';
      this._ActiveClass = '';
      this._activeRead = '';
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Formulario Limpio',
        showConfirmButton: false,
        timer: 1500
      });
    }
    //#endregion



    //#endregion

    //#region "Save function()"
    saveItem() {

      let formArr: any = {
        placa: this._PLAC,
        clase: this._Class,
        nombre: this._nProducto,
        custodio: this._CustClass,
        dpto: this._DP,
        ciudad: this._ciudClass,
        serie: this._SER,
        valor: this._VLR,
        activo: this.varAct,
        refer: this._REFE,
        feccrea: this._FeCREA,
        usucrea: this._UC,
        fecmodi: this._FeMOD,
        usumodi: this._USMO,
        fecfin: this._FeFINAL,
        horafin: this._FeCOMP,
        userfin: this._USFI,
        barra: '',
        grupo: this._GRPO,
        marca: this._MRCA,
        color: this._CLR,
        fechac: this._FeACT,
        proveedor: this._PRVR,
        modelo: this._MDL,
        vidautil: this._VUL,
        valres: this._VRE,
        valoR2: 0,
        fechaa: this._FeDEP,
        fcustodio: this._FeFN,
        cgasto: this._CGT,
        cdan: this._CD,
        cdar: this._CDN,
        vaL_NORMAL: this._VNO,
        vaL_REVAL: this._VRVA,
        imagen: '',
        valoR_RESI: this._VRE,
        valoR_RES2: 0,
        placa_aux: '',
        imagenbit: this._IMGE,
        af_control: this._actCont
      };
      if (this._PLAC == '' || this._PLAC == null || this._PLAC == undefined) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        html: '<p>El campo <strong> PLACA </strong>, es necesario!.<br>' +
        'Para que se pueda generar el código QR.</p>',
      });
    } else {
      const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      });

      swalWithBootstrapButtons.fire({
        title: 'Estás seguro?',
        text: 'Estás creando un nuevo producto!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, deseo crear!',
        cancelButtonText: 'No, deseo crear!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Guardado!',
            'Tu producto ha si añadido.',
            'success'
          );
          this.data.saveDataInv(formArr).subscribe(x => {
            formArr = x;
            console.log(formArr);
          });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelado',
            'Tu producto no ha sido añadido',
            'error'
          );
        }
      });
    }
    }
    //#endregion



    //#region  "Update function()"
    UpdateProduct() {

      this.sendReporte();
      let arr: any = {
        placa: this._PLAC,
        clase: this._Class,
        nombre: this._nProducto,
        custodio: this._CustClass,
        dpto: this._DP,
        ciudad: this._ciudClass,
        serie: this._SER,
        valor: this._VLR,
        activo: this.varAct,
        refer: this._REFE + ' / ' + this.optionSel,
        // feccrea: this._FeCREA,
        usucrea: this._UC,
        // fecmodi: this._FeMOD,
        usumodi: this._USMO,
        // fecfin: this._FeFINAL,
        // horafin: this._FeCOMP,
        userfin:  this._USFI,
        // barra: "",
        grupo: this._GRPO,
        marca: this._MRCA,
        color: this._CLR,
        // fechac: this._FeACT,
        proveedor: this._PRVR,
        modelo: this._MDL,
        vidautil:this._VUL,
        // fechaa: this._FeDEP,
        // fcustodio: this._FeFN,
        cgasto: this._CGT,
        cdan: this._CD,
        cdar: this._CDN,
        vaL_NORMAL: this._VLR,
        vaL_REVAL: this._VRVA,
        // imagen: "",
         valoR_RESI: this._VRE,
        // valoR_RES2: 0.00,
        // placa_aux: "",
         imagenbit: this._IMGE,
         id: this.pId,
        af_control: this._actCont
      };
      // console.log(arr);
      if (this.pId == '') {
        Swal.fire({
          icon: 'info',
          title: 'Oops...',
          text: 'Este producto es nuevo, no puedes actualizarlo!'
        });
      } else {
        console.log(arr);
        this.data.updateProduct(this.pId, arr).subscribe(x => {
          arr = x;
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Tu producto ha sido editado con éxito, se ha generado movimiento de inventario.',
            showConfirmButton: false,
            timer: 1900
          })
          // console.log(arr);
        }
        )
      }
    }
    
    //#endregion
    public varAct;
    activChange() {
      if(this._actvClass == 1) {
        this.varAct = 'S';
        console.log(this.varAct)
      }
      else {
        this.varAct = 'N';
        console.log(this.varAct)
      }
    }

    prueb() {
      console.log('listo')
      console.log(this._USFI )
    }

    actcon() {
     // console.log(this._actCont);
    }

    fechActual() {
      const n =  new Date();
      // Año
      const y = n.getFullYear();
      // Mes
      const m = n.getMonth() + 1;
      // Día
      const d = n.getDate();
      // Lo ordenas a gusto.
     // console.log('Fecha');
      this.datenow = y + '-' + m + '-' + d;
    }

    encodeImageFileAsURL() {
      const filesSelected = document.getElementById('fileUp') as HTMLInputElement;
      const fileId = filesSelected.files;
      const newImage = document.createElement('img');
      newImage.setAttribute('id', 'img');
      newImage.style.width = '100%';
      newImage.style.height = 'auto';
      let base;
      if (fileId.length > 0) {
        const fileToLoad = filesSelected[0];
        const fileReader = new FileReader();

        // tslint:disable-next-line: only-arrow-functions
        fileReader.onload = () => {
          base = fileReader.result;
          newImage.src = base;
          document.getElementById('imgTest').innerHTML = newImage.outerHTML;
          // console.log(base)
        };
        fileReader.onloadend = () => {
          this._IMGE = fileReader.result;
          console.log(this._IMGE);
        };

        const a = fileReader.readAsDataURL(fileId[0]);
        // console.log(a)
        // // tslint:disable-next-line: prefer-for-of
        // for (let i = 0; i < fileId.length; i++) {
        // }

      }

    }


    //#region "SaveReport()"
   saveReport(finv, plainv, desinv, custinv, ciudinv) {
      let arrReport: any = {
        fechaInv: finv,
        placaInv: plainv,
        descripInv: desinv,
        custodio: custinv,
        ciudad:  ciudinv
      };
      this.data.saveReport(arrReport).subscribe(save => {
        arrReport = save;
      });
    }
    //#endregion
}
