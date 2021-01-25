import { Component, OnInit } from '@angular/core';
import { ANEXODP12A120FService } from '../Services/anexo-dp12-a120-f.service';
import { DataCallService } from '../Services/data-call.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-avaluo',
  templateUrl: './avaluo.component.html',
  styleUrls: ['./avaluo.component.css']
})
export class AvaluoComponent implements OnInit {

  constructor( public data: DataCallService, private anexo: ANEXODP12A120FService ) { }

  ngOnInit() {
    //this.getDep12a120F();
    this.Call_Inventariadores();
    this.screen();
  }

  public arrData: any = [];
  public arrDataInv: any = [];
  public optionSel;
  public invCount;
  public invProd;
  public pageActual: number = 1;
  public _nPag: number = 10;
  public invName;
  public _img;
  public arrImg: any = [];
  public ImgCont: boolean = false;
  public plInv;
  public cMods: boolean = false ;

  public arrAnexo: any = [];

  public _vUtilNg: number = 0 ;
  public _aComerNg: number = 0;
  public _metTecnicaNg: string;
  public _observNg: string;


  public placaText: string;
  public codBarraText: string;

  public anexosCounts:number ;
  public controlArr: any = [];

  public controlTextAnexos:boolean;

//#region NgMoel Update anexos

  public _editVidUtil;
  public _avComer;
  public _mTecnica;
  public _observac;

//#endregion

  public editCards: boolean = false;

  public controlUpdate: boolean;

  async screen() {
    let contsNewData = document.getElementById('contsNewData');
    contsNewData.style.height = screen.height + 'px';
  }

  getImgByPlaca(COD) {
    this.data.geIMGDp12a120F(COD).subscribe( z => {
      this.arrImg = z;
      this.ImgCont = true;
      this._img = this.arrImg[0].imagen;
      this.plInv = COD;
      console.log(z);
    })
  }

  controlModal(a, placa, codBarra) {
    this.cMods = a;
    this.placaText = placa;
    this.codBarraText = codBarra;
    // console.log(this.cMods);
  }

  Call_Inventariadores() {
    this.data.Get_Inventariadores().subscribe( inv => {
      this.arrDataInv = inv;
      this.invCount =  this.arrDataInv.length;
    })
  }

  close() {
    this.ImgCont = false;
  }

  invChoice = (a) => this.invName = a;

  getDep12a120F(inv) {

    this.data.getDp12a120F(inv).subscribe( data => {
      this.arrData = data;
      this.invProd = this.arrData.length;
      this.invChoice(inv);
      console.log(this.arrData);
    })

  }

  public a: boolean = false;
  editTableCodBar(x) {
    // console.log('activado');
    x.style.backgroundColor = 'yellowgreen';
    switch (this.a) {
      case true:
        this.a = false;
        this.editCards = this.a;
        console.log(this.editCards);
        break;

      case false:
        this.a = true;
        console.log(this.editCards);
        this.editCards = this.a;
        break;

      default:
        break;
    }

  }

  insertanexo(placa, codBarra) {

    let arr: any = {
      placa: placa,
      codBarra: codBarra,
      vidutil: this._vUtilNg,
      avcomer: this._aComerNg,
      metodtec: this._metTecnicaNg,
      observaciones: this._observNg
    }

    console.log(arr);

    this.anexo.saveAnexos(arr).subscribe(anexo => {
      this.arrAnexo = anexo;
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Se guardó con exito',
        html: '<p> Placa: ' + placa +  '</p>',
        showConfirmButton: false,
        timer: 2000
      })
      console.log(this.arrAnexo);
    })
  }

  controlDataAnexo(placa) {
    this.controlAvaluo(true);
    this.anexo.selectAnexos(placa).subscribe( control => {
      this.controlArr = control;
      console.log(this.controlArr);
      this.anexosCounts = this.controlArr.length;
      if(this.anexosCounts == 0) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Esta placa no tiene anexos'
        })
        this.controlAvaluo(false);
      }

    })
  }

  controlAvaluo(a) {
    this.controlTextAnexos = a;
  }

  closeInfAnexo(){
    this.controlTextAnexos = false;
  }

  cotrolUp(a) {
    this.controlUpdate = a;
  }

  valueInputsUpdate(x) {
    let a = <HTMLInputElement> document.getElementById(x);
    return x.value;
  }

  updateAnexo(id, placa, codBarra, vidautil, avcomer, metodtec, observaciones) {

    let arr: any = {
      Id: id,
      placa: placa,
      codBarra: codBarra,
      vidutil: vidautil,
      avcomer: avcomer,
      metodtec: metodtec,
      observaciones: observaciones
    }

    console.log(arr);
    this.anexo.putAnexos(id, arr).subscribe( x => {
      this.controlDataAnexo(placa);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Se actualizó información con éxito',
        html: '<p> Placa: ' + placa +  '</p>',
        showConfirmButton: false,
        timer: 2000
      })

    })
  }

  deleteAnexo(id, placa) {
    this.anexo.deletAnexos(id).subscribe( del => {
        this.controlDataAnexo(placa);
        console.log(del);
    });
  }

}

