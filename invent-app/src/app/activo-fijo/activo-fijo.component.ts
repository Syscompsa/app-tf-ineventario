import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-activo-fijo',
  templateUrl: './activo-fijo.component.html',
  styleUrls: ['./activo-fijo.component.css']
})
export class ActivoFijoComponent implements OnInit {

  constructor() { }

  private _Factual: any;
  private _FMod: any;
  private _FFin: any;
  private _FCrea: any;
  private _FCust: any;

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

  ngOnInit() {
  }


}
