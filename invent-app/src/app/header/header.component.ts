import { Component, OnInit } from '@angular/core';
import { WebuserService } from '../Services/webuser.service';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public env = environment;
  public User;

  constructor(public userService: WebuserService,
    public router: Router) { }

  ngOnInit() {
    this.getuser();
  }

  logOut() {
    this.userService.logout();
    this.router.navigate(['\login']);
    this.env.header = false;
  }

  getuser(){
   this.User = localStorage.getItem('User');
   console.log(this.User)
  }

  fechActual(){
    return new Date();
  }

}
