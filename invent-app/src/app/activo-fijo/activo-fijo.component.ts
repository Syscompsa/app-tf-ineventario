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



  ngOnInit() {
  }


}
