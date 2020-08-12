import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-view',
  templateUrl: './home-view.component.html',
  styleUrls: ['./home-view.component.css']
})
export class HomeViewComponent implements OnInit {

  public datenow: any;

  constructor() { }

  ngOnInit() {
    this.fechActual();
    // this.detectHeight();
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
