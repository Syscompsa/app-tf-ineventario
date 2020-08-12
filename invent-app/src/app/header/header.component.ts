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

  constructor(public userService: WebuserService,
    public router: Router) { }

  ngOnInit() {
  }

  logOut() {
    this.userService.logout();
    this.router.navigate(['\login']);
    this.env.header = false;
  }

  fechActual(){
    return new Date();
  }

}
