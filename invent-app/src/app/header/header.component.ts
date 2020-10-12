import { Component, OnInit } from '@angular/core';
import { WebuserService } from '../Services/webuser.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { resolve } from 'url';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public userService: WebuserService,
              public router: Router) { }

  public env = environment;
  public User;
  public app;
  public arr: any = {
    webUsu: '', webPass: '', tipoMu: ''
  }

//Concilio 10:26 am Octubre 20 - 6
//Aprobado por Jose Vera, Ing. Carrion, Cintia Carrion, Jose Carrion 
  public report = 'Movimiento de Inventario';
  public actFijo = 'Modificación de Activos';
  public mActivos = 'Listado de Activos';
  public Site;
  public conf;

  ngOnInit() {
    this.validateTypeUser();
    this.getuser();
    this.evaluoScreen();
  }

  logOut() {
    this.userService.logout();
    this.router.navigate(['\login']);
    this.env.header = false;
  }


  validateTypeUser() {
    if(localStorage.getItem('Token') != 'A ') {
      this.conf = false;
    } else {
      this.conf = true;
    }
    // switch (a) {
    //   case 'A':
    //     this.conf = true;
    //     console.log('Es administrador');
    //     break;
        
    //   case 'N':
    //     this.conf = false;
    //     console.log('Es un usuario Normal');
    //     break;
    //   default:
    //     this.conf = true;
    //     break;
    // }
  }

  getuser() {
   this.User = localStorage.getItem('User');
  }

  active(id, text, hideA, hideB, Rooute) {
    const a = document.getElementById(id);
    const b = document.getElementById(hideA);
    const c = document.getElementById(hideB);
    this.Site = text;
    this.router.navigate([Rooute]);
    a.style.borderBottom = 'solid 2px steelblue';
    b.style.backgroundColor = 'transparent';
    b.style.color = 'gray';
    c.style.backgroundColor = 'transparent';
    c.style.color = 'gray';
  }

  fechActual() {
    return new Date();
  }

  evaluoScreen() {
   if (screen.width <= 800) {
      this.app = true;
   } else {
     this.app = false;
   }
 }
}
