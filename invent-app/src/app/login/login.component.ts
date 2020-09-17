import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import 'sweetalert2/src/sweetalert2.scss';
import { WebuserService } from '../Services/webuser.service';
import { Iwebuser } from '../Models/webuser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  passwordType: string = 'password';
  passwordShow: boolean = false;
  password: string = '';
  usuario: string = '';

  // tslint:disable-next-line: variable-name
  public _Iuser: Iwebuser = { webUsu: '', webPass: '' };
  env = environment;

  constructor(  public userService: WebuserService,
                public router: Router) { }
  ngOnInit() {
    if (localStorage.getItem('User') != '' || localStorage.getItem('User') != null || localStorage.getItem('User') != undefined) {
      this.env.header = true;
      this.router.navigate(['\HomeView']);
    }
    else {
      this.router.navigate(['\Login']);
    }
  } 

  passwordHidShow() {
    console.log('activado');
    if (!this.passwordShow) {
      this.passwordShow = true;
      this.passwordType = 'text';
    } else {
      this.passwordShow = false;
      this.passwordType = 'password';
    }
  }


  logeo() {
    this.userService.login(this._Iuser)
      .subscribe(x => {
        this.env.header = true;
        this.env.nameUser = x.webUsu;
        localStorage.setItem('User',x.webUsu);
        Swal.fire({
                    icon: 'success',
                    title: 'Bien...',
                    text: 'Has ingresado con exito!',
                    footer: ''
      });
      // tslint:disable-next-line: no-unused-expression
      this.router.navigate(['\HomeView']);

      }, err => {
        Swal.fire({
                  icon:  'error',
                  title: 'Oops...',
                  text:  'Verifica tus credenciales!',
                  footer: ''
                });
      });
  }



}
