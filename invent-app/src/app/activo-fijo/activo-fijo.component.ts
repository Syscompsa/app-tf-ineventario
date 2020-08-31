import { Component, OnInit, Input } from '@angular/core';
import { ConfigService } from '../Services/config.service';
import { DataCallService } from '../Services/data-call.service';
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css'; // optional for styling

@Component({
  selector: 'app-activo-fijo',
  templateUrl: './activo-fijo.component.html',
  styleUrls: ['./activo-fijo.component.css']
})
export class ActivoFijoComponent implements OnInit {

  constructor(public conf: ConfigService, public data: DataCallService) { }

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

  ngOnInit() {    
    this.getInterfaz();
   // this.getDataCall();
   // this.getCiudGen();
  }

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
  
  //variables  [(ngModel)] INICIO
  public _Class: string;
  public _cRead: string;
  //variables  [(ngModel)] FIN  
  public modelArr;
  public _disp: string;
  public optC;

  getDataCall(){
    // console.log(this._Class);
    this.optA = false;
    this.optB = true;
    this.optC = false;
    const promise = new Promise((resolve, reject) => {
      this.data.getDataModel(this._Class).subscribe(x => {
        this.modelArr = x;
        let _ClassRead = {
          nombre: x[0].nombre
        }
        console.log(this.modelArr);
        resolve(this._cRead = _ClassRead.nombre );
     })
    }).then( res => {
         console.log('Este es mi valo obtenido: ' +  res);
    })
  }

     //variables  [(ngModel)] INICIO
    public _ciudClass: string;
    public _ciudRead: string;
    //variables  [(ngModel)] FIN

    public optA: boolean;
    public optB: boolean;
    public ciudArr;

    getDataCiudad(){
    // console.log(this._ciudClass);
    this.optA = true;
    this.optB = false;
    this.optC = false;
    
    const promise = new Promise((resolve, reject) => {
      this.data.getDataCiud(this._ciudClass ).subscribe(x => {
        this.ciudArr = x;
        let _ClassRead = {
          nombre: x[0].nombre
        }
        console.log(this.ciudArr);
        resolve(this._ciudRead = _ClassRead.nombre );
      })
    }).then( res => {
        console.log('Este es mi valo obtenido: ' +  res);
    })
    }

    // variables  [(ngModel)] INICIO
    public _ActiveClass: string;
    public _activeRead: string;
    // variables  [(ngModel)] FIN
  
    getDataActive(){
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
          console.log('Este es mi valo obtenido: ' +  res);
      })
    }

    // variables  [(ngModel)] INICIO
    public _CustClass: string;
    public _CustRead: string;
    // variables  [(ngModel)] FIN
    public custArr;

    getDataCust(b) {
      this.optA = false;
      this.optB = false;
      this.optC = true;
      const promise = new Promise((resolve, reject) => {
        this.data.getDataCustodio(this._CustClass ).subscribe(x => {
          this.custArr = x;
  
          let _ClassRead = {
            nombre: x[0].nombre
          }
          resolve(this._CustRead = _ClassRead.nombre);
        })
      }).then( res => {
          // let read = <HTMLInputElement> document.getElementById('_ClaseB');
          // read.value = res;
          console.log('Este es mi valo obtenido: ' +  res);
      })
    }
  
    tooltipo() {
      tippy('#myButton', {
        content: 'My tooltip!',
      });
    }  

    getId (b) { let a = b; console.log(a)};    

}
