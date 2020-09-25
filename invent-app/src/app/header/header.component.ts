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


  public report = 'Reporte de Inventario';
  public actFijo = 'Activo Fijo';
  public mActivos = 'Maestro de Activos';
  public Site;

  ngOnInit() {
    this.getuser();
    this.evaluoScreen();
  }

  logOut() {
    this.userService.logout();
    this.router.navigate(['\login']);
    this.env.header = false;
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
