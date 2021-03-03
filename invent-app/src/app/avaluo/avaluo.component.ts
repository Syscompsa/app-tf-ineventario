import { Component, OnInit } from '@angular/core';
import { ANEXODP12A120FService } from '../Services/anexo-dp12-a120-f.service';
import { DataCallService } from '../Services/data-call.service';
import Swal from 'sweetalert2';

import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_spiritedaway from "@amcharts/amcharts4/themes/spiritedaway";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";


import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/animations/scale.css';
import 'tippy.js/animations/scale-subtle.css';
import 'tippy.js/animations/scale-extreme.css';
import { cleanFormat } from '@amcharts/amcharts4/.internal/core/utils/Utils';
import { MantenimientoCustodiosService } from '../Services/mantenimiento-custodios.service';
import { Router } from '@angular/router';
import { ok } from 'assert';
// import { timeStamp } from 'console';
// am4core.useTheme(am4themes_moonrisekingdom);
// am4core.useTheme(am4themes_animated);

am4core.useTheme(am4themes_spiritedaway);
am4core.useTheme(am4themes_animated);

@Component({
  selector: 'app-avaluo',
  templateUrl: './avaluo.component.html',
  styleUrls: ['./avaluo.component.css']
})

export class AvaluoComponent implements OnInit {

  constructor( public data: DataCallService,
               public route: Router,
               private anexo: ANEXODP12A120FService,
               public mantCust: MantenimientoCustodiosService ) { }

  ngOnInit() {
    //this.getDep12a120F();
    this.Call_Inventariadores();
    this.screen();
    this.getCustod('a', 'asc');
    this.SearchDep(0);
    // this.controlAv();
  }
  
  //#region inputs TH TABLE
  public _In_des: boolean = false;
  public _In_bar: boolean = false;
  public _In_pad: boolean = false;
  public _In_refer: boolean = false;
  public _In_cust: boolean = false;
  //#endregion

  public _filter_barra;
  public _filter_refer;
  public _filter_desc;
  public _filter_cpadre;
  public _filter_cust;

  public inventChoice: string;
  public _CustBusqueda;

  public fechActual: any = new Date();

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

  public labelDescription: string;
  public _vUtilNg: any;
  public _aComerNg: any;
  public _metTecnicaNg: string;
  public _observNg: string;
  public _nPageContDIV = 16;

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

  public custCount: number = 0;

  public editCards: boolean = false;

  public controlUpdate: boolean;

  public _contsCostos: boolean = true;
  public _bColorExpand: string = 'steelblue';


  //#region NGMODEL Mantenimiento de custodios
  
  public _Mant_codigo;
  public _Mant_apellidos;
  public _Mant_nombres;
  public _Mant_ciudad;
  public _Mant_departamento;
  public _Mant_telfA;
  public _Mant_telfB;
  public _Mant_activo;
  public _Mant_inactivo;
  public _Mant_empleado;
  public _Mant_proveedor;
  
  //#endregion

  async screen() {
    let contsNewData = document.getElementById('contsNewData');
    contsNewData.style.height = screen.height + 'px';
  }

  reporte() {
    this.route.navigate(['/Seguimiento'])
  }

  desbloqDes(a){
    this._In_des = a;
  }

  desbloqBarra(a){
    this._In_bar = a;
  }
  
  desbloqPadre(a){
    this._In_pad = a;
  }

  desbloqRefer(a) {
    this._In_refer = a;
  }

  desbloqCust(a) {
    this._In_cust = a;
  }

  expandTable() {
    let a = document.getElementById('expand');
    
    switch (this._contsCostos) {
      case true:
        this._contsCostos = false;
        this._bColorExpand = 'orangered';
        a.setAttribute('class', 'icon-left-3');
        //console.log(this._contsCostos);
        break;
      
      case false:
        this._contsCostos = true;
        this._bColorExpand = 'steelblue';
        a.setAttribute('class', 'icon-right-3');

        //console.log(this._contsCostos);
        break;
    
      default:
        break;
    
    }
  }

  public arrCusts: any = [];
  saveCustodios() {

    if(this._Mant_empleado == true) {
      this._Mant_empleado = 'E';
    }
    else {
      this._Mant_empleado = 'P';
    }

    if(this._Mant_activo == true) {
      this._Mant_activo = 'A';
    }
    else {
      this._Mant_activo = 'I';
    }

    this.arrCusts = {
      codigo: this._Mant_codigo,
      apellido: this._Mant_apellidos,
      nombre: this._Mant_nombres,
      ciudad: this._Mant_ciudad,
      dpto: this._Mant_departamento,
      teleF1: this._Mant_telfA,
      teleF2: this._Mant_telfB,
      tipo: this._Mant_empleado,
      estado: this._Mant_activo,
      usucrea: this.invName,
      usumodi: this.invName
    }
    if( this._Mant_codigo == '' || this._Mant_apellidos == '' || this._Mant_nombres == '' || this._Mant_departamento == '' || this._Mant_ciudad == ''   ) {

      //console.log('vacio');

      Swal.fire({
        position: 'center',
        icon: 'error',
        title: 'Completa los campos requeridos (*)',
        //html: '<span class="icon-warning" style="font-size: 7pt; color: gray;"> Hemos detectado que el código está en uso. Intenta con uno diferente </span>',
        showConfirmButton: true,
        timer: 5000
      })

    }
    else {
      this.mantCust.saveCustodios(this.arrCusts).subscribe( mantenim => {
        //console.log(mantenim)
        this.getCustod('a', 'asc');
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'El custodio ha sido guardado con éxito',
          showConfirmButton: false,
          timer: 2000
        })
      }, (err) => {
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'No hemos podido crear el custodio con éxito',
          html: '<span class="icon-warning" style="font-size: 7pt; color: gray;"> Hemos detectado que el código está en uso. Intenta con uno diferente </span>',
          showConfirmButton: true,
          timer: 5000
        })
      } )
  }
    //console.log(this.arrCusts);
    
  }

  deleteCust(CODEC) {
    this.anexo.deleteCust(CODEC).subscribe( delCust => {
      //console.log(delCust);
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: `Custodio con el siguiente código ${CODEC}, eliminado!`,
        showConfirmButton: true,
        timer: 3200
      })
      this.getCustod('a', 'asc');
    }, (err) => {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: `No hemos podido borrar este custodio con el siguiente código ${CODEC}`,
        showConfirmButton: true,
        timer: 3200
      })
    } )
  }

  contCust(b){
    this._Mant_codigo = b;
    
  }

  public lockActive: boolean = false;
  public countCod:number = 10; 
  public _expressColor: string ;
  insertControl(a, value, id) {
    let codigoCust = <HTMLInputElement> document.getElementById(id);
    let operTotal = value - a.length;
    this._expressColor = 'yellowgreen';

    if(operTotal <= value/2 && operTotal >= 1) {
      this._expressColor = 'orange';      
    }
    if(operTotal <= 0) {
      this.disabledInputs(codigoCust, true);
      this._expressColor = 'red';      
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Haz llegado al límite!',
        footer: `Este campo solo acepta ${a.length} caracteres`
      })

      
      this.lockActive= true;
      
    }

    this.countCod = operTotal;

  }
  public closeCodEmp: boolean = false;
  public codEmpArr:any = [];
  getCodEmpl() {
    this.anexo.getCodigEmpleados('_void_', 1).subscribe( cod => {
      this.codEmpArr = cod;
      this.closeCodEmp = true;
    }, (err) => {
      Swal.fire({
        position: 'top'   ,
        icon:     'error' ,
        title:    'Hubo un fallo: ' + err,
        showConfirmButton: true
      })
    }) 
  }

  generateCodEmpl( cod ) {
    this.anexo.getCodigEmpleados(cod,1).subscribe( codUnit => {
      let addTotal = parseInt(cod) + 1;
      this.countCod = 10 - addTotal.toString().length;
      this.closeCodEmp = false;
      this._Mant_codigo = addTotal.toString();
    })
  }

  chanActc(id, val) {
    const a = <HTMLInputElement> document.getElementById('lAc');
    const b = <HTMLInputElement> document.getElementById(id);
    a.setAttribute('class', 'candado icon-unlock');
    b.disabled = val;
    //console.log('activo')
  }

  disabledInputs = (a, b) => a.disabled = b; 

  public arrCbarra: any = [];
  updateCampos( vId, placa, inv, ELEMENT) { 
    let nbarra = <HTMLInputElement> document.getElementById(vId+placa);
    let nBarraValue = nbarra.value;
    
    this.anexo.updateForElement(placa, ELEMENT, nBarraValue).subscribe( CBARRA => {
      console.log(CBARRA);
    });

    Swal.fire ({
      position: 'center',
      icon: 'success',
      title: `${ELEMENT}  se ha añadido`, 
      showConfirmButton: false,
      timer: 3000
    })

    this.getDep12a120F(inv, 'asc', 'a.placa', '0');
  
  }

  getImgByPlaca(COD) {
    this.data.geIMGDp12a120F(COD).subscribe( z => {
      this.arrImg = z;
      this.ImgCont = true;
      this._img = this.arrImg[0].imagen;
      this.plInv = COD;
      //console.log(z);
    })
  }

  controlModal(a, placa, codBarra) {
    this.cMods = a;
    this.placaText = placa;
    this.codBarraText = codBarra;
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
  public prodCountByDate: number;
  public prodArrDate:any = [];
  public fecha: any;
  public cantidad: any;
  public valueSQL: string;
  public dataSQL: string;
  public dataSerach: any;
  public dataSQLs:string = "c.NOMBRE + ' ' +  c.APELLIDO";
  getDep12a120F(inv, a, b, c) {
    
    if ( (b == '' || c == '') || (b == undefined || c == undefined) ) {
      this.valueSQL='a.placa';
      this.dataSQL='0';
      b = this.valueSQL;
      c = this.dataSQL;
    }

    this.dataSerach = c;
    this.inventChoice = inv;
    this.data.getDp12a120F(inv, a, b, c).subscribe( data => {      
      this.arrData = data;
      //console.log(this.arrData)
      this.invProd = this.arrData.length;
      this.invChoice(inv);
      this.createReport(inv);  
      this.controlAv();
    }, (err) => {
      console.log(err);
  })
  }

  public order: boolean = true;
  public orderTy: any;
  public coloRow: string;
  orderType(inv, type, valueDefect) {
    this.labelDescription = `Se está ordenando por ${type}`;
    switch (this.order) {
      case true:
        this.order = false;
        this.orderTy = 'icon-down-big';
        this.coloRow = 'orangered';
        this.getDep12a120F(inv, 'desc', `a.${type}`, `${valueDefect}`);
        break;

      case false:
        this.order = true;
        this.orderTy = 'icon-up-big';
        this.coloRow = 'steelblue';
        this.getDep12a120F(inv, 'asc' , `a.${type}`, `${valueDefect}`);
        break;
     
      default:
        break;
    }
  } 

  public custArr: any = [];
  public _custoSearch: string;
  getCustod(cust, order) {
    this.anexo.getCustodiosByReport(cust, order).subscribe( CUSTOD => {
      this.custArr = CUSTOD;
      this._filter_cust = cust
      this.custCount = this.custArr.length;
      //console.log(this.custArr);
    });  
  }

  public _bColor: string;
  public a: boolean = false;
  editTableCodBar() {
    switch (this.a) {
      case true:
        this.a = false;
        this.editCards = this.a;
        this._bColor = '';
        //console.log(this.editCards);
        break;

      case false:
        this.a = true;
        this._bColor = 'steelblue';
        //console.log(this.editCards);
        this.editCards = this.a;
        break;

      default:
        break;
    }
  }

  public _reportShow: boolean = false;
  public _bColorA: string;
  public _showOtherHead: boolean = true;
  ShowReport() {
    // console.log('activado');
    // x.style.backgroundColor = 'yellowgreen';
    switch (this.a) {
      case true:
        this.a = false;
        this._showOtherHead = true;
        this._reportShow = this.a;
        this._bColorA = '';
        break;

      case false:
        this.a = true;
        this._showOtherHead = false;
        this._bColorA = 'steelblue';
        this._reportShow = this.a;
        break;

      default:
        break;
    }

  }


  public arrReporte:any = [];
  createReport(inv) {
    this.anexo.getReporte(inv).subscribe( DATAREPORT => {
      this.arrReporte = DATAREPORT;
    })
  }

  public _editShow = true;
  edShow(a) {
    this._editShow = a;
  }




//BUSCA POR CUSTODIO
public custAsigActivos: number;
  searchByCust(cust, cod) {
    console.log(cust);
    this.anexo.getReporteCust(cod).subscribe( CUST => {
      this.arrReporte = CUST;
      //console.log(this.arrReporte);
      this._CustBusqueda = cust;
      this._filter_cust = cust;
      this.custAsigActivos = this.arrReporte.length;
      if( this.arrReporte.length == 0)  {

        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Este custodio no tiene activos asignados!',
          footer: ''
        })
      }
      else {

        Swal.fire({
          icon: 'info',
          title: 'Excelente!',
          html: `Este custodio tiene <strong>
                 ${this.arrReporte.length} activos
                 </strong>  asignados!`,

        })
      }
        
    }, (err) => {
      alert(err);
    }

    )
  }

  //BUSCA POR DEPARTAMENTOS
  public arrDEPTS: any = [];
  public _Sdpts: string;
  SearchDep(DEP) {
    this.anexo.getDep(DEP).subscribe( DEPTS => {
      this.arrDEPTS = DEPTS;
    })
  }

  searchByDpt(dpt) {
    this.anexo.getReportDep(dpt).subscribe(dp => {
      this.arrReporte = dp;
      this.custAsigActivos = this.arrReporte.length;
      //console.log(this.arrReporte)
    })
  }
  public arrCiud:any = [];
  public closeCiudEmr: boolean = false;
  getCiudad(cod) {    
    if( cod == 0 ){
      this.data.getDataSmartCiud(cod).subscribe( CIUD => {
        this.arrCiud = CIUD;
        this.closeCiudEmr = true;
      }) 
    }
    else {
      this.data.getDataSmartCiud(cod).subscribe( CIUD => {
        this.arrCiud = CIUD;
        this._Mant_ciudad = cod;      
        this.closeCiudEmr = false;  
      }) 
    }
  }

  public arrDpto:any = [];
  public closeDptoEmr: boolean = false;
  getDpto(cod) {
    if( cod == 0 ){
      this.data.getDataSmartDep(cod).subscribe( CIUD => {
        this.arrDpto = CIUD;
        this.closeDptoEmr = true;
      })
    }
    else {
      this.data.getDataSmartDep(cod).subscribe( CIUD => {
        this.arrDpto = CIUD;
        this._Mant_departamento = cod;      
        this.closeDptoEmr = false;
      })
    }
  }

  //GUARDA LOS ANEXOS HACIA LA PLACA EN LA BASE DE DATOS ANEXOS_DP12A120_F
  insertanexo(placa, codBarra) {

    let arr: any = {
      placa: placa,
      codBarra: codBarra,
      vidutil: this._vUtilNg,
      avcomer: this._aComerNg,
      metodtec: this._metTecnicaNg,
      observaciones: this._observNg
    }

    // console.log(arr);

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
     // console.log(this.arrAnexo);
    })

  }




  public repoAnexoCant: number = 0;
  controlDataAnexo(placa) {  
    
    this.anexo.selectAnexos(placa).subscribe( control => {
      this.controlArr = control;
      this.anexosCounts = this.controlArr.length;
      this.controlAvaluo(true);
      if(this.anexosCounts == 0) {        
        Swal.fire({
          icon:   'error',
          title:  'Oops...',
          text:   'Esta placa no tiene anexos'
        })
        this.controlAvaluo(false);
      }

    })
  }

  public repoAnexo: any = [];

  controlAv() {

    this.anexo.SelectAnexoGen().subscribe( repAnexo => {
      this.repoAnexo = repAnexo;
      //console.log(this.repoAnexo);
    });
  
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

    if(vidautil == 0 || avcomer == 0 || metodtec == '' || observaciones == '') {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Necesitas llenar los demás campos, o no pordás actualizar la demás información'
        //footer: '<a href>Why do I have this issue?</a>'
      })
    }
    else {
      // console.log(arr);
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
       this.cleanFormat();
      })
    }
 
  }

  deleteAnexo(id, placa) {
    this.anexo.deletAnexos(id).subscribe( del => {
        this.controlDataAnexo(placa);
        //console.log(del);
    });
  }


  cleanFormat() {
    this._editVidUtil = 0;
    this._avComer = 0;
    this._mTecnica = '';
    this._observac = ''
  }
  

}

