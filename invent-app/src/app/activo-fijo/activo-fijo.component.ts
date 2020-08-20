import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-activo-fijo',
  templateUrl: './activo-fijo.component.html',
  styleUrls: ['./activo-fijo.component.css']
})
export class ActivoFijoComponent implements OnInit {

  constructor() { }

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
  }


}
