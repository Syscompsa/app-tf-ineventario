import { Component, OnInit } from '@angular/core';
import { GQRService } from '../Services/gqr.service';
import { Placa_Post_Url } from '../Models/Placa_Post_Url';
import { resolve } from 'url';
import { QRDATA } from '../Models/QRDATA';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent implements OnInit {

  public datenow: any;
  public placa: Placa_Post_Url[] = [];
  public product: QRDATA[] = [];
  constructor(public placas: GQRService, public products: GQRService) { }

  ngOnInit() {
    this.fechActual();
    // this.detectHeight();
    this.placas.getPlaca().subscribe( resp => 
       { 
         this.placa = resp ;
         let lengthPlaca = this.placa.length;
         let DataPlaca = this.placa[0].Placa_Post;
         console.log(this.placa);
         console.log(DataPlaca);
         console.log(lengthPlaca);
         // this.products.getQRGenById()      
       }
      )
   // this.placas.getQRGenById().subscribe(x => console.log(x));
  }

  // detectHeight(){
  //   let infoCont = document.getElementById('infoCont').style.height;
  //   console.log(infoCont);
  //   if( infoCont == '590px'){
  //     console.log('Llegaste al limite de el alto del div');
  //   } 
    
  // }

  fechActual(){
    var fecha = new Date(); //Fecha actual
    var mes:any = fecha.getMonth()+1; //obteniendo mes
    let dia:any = fecha.getDate(); //obteniendo dia
    var ano:any = fecha.getFullYear(); //obteniendo año
    if(dia<10){ 
        dia ='0'+dia;
      } //agrega cero si el menor de 10
    if(mes<10)
      mes ='0'+mes //agrega cero si el menor de 10
     this.datenow = ano+"-"+mes+"-"+dia;
  }

}
