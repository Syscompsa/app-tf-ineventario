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
  public arr: any = {
    webUsu: '', webPass: '', tipoMu: ''
  }

  constructor(  public userService: WebuserService,
                public router: Router) { }
  ngOnInit() {
    this.verificacion ();
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

  getUser(user) {
    this.userService.getUsByParam(user).subscribe(y => {
        this.arr = y;
        localStorage.setItem('Token', this.arr[0].tipoMu);
    })
  }

  logeo() {
    this.userService.login(this._Iuser)
      .subscribe(x => {
        this.env.header = true;
        this.env.nameUser = x.webUsu;
        localStorage.setItem('User',x.webUsu);
        // localStorage.setItem('Token', x.tipoMu);
        this.verificacion ();
        this.getUser(localStorage.getItem('User'));
        Swal.fire({
                    icon: 'success',
                    title: 'Bien...',
                    text: 'Has ingresado con exito!',
                    footer: ''
      });
      }, err => {
        Swal.fire({
                  icon:  'error',
                  title: 'Oops...',
                  text:  'Verifica tus credenciales!',
                  footer: ''
                });
      });
  }


  verificacion (){
    if (localStorage.getItem('User') != null) {
      this.env.header = true;
      this.router.navigate(['\QRData']);
    }
    else {
      this.router.navigate(['\Login']);
    }
  }



}
