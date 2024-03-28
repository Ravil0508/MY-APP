import { Component } from '@angular/core';
import {AuthService} from "./services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor (
    private readonly auth: AuthService,
    private router: Router,
    )
  {

  }

  public isAuthenticated: boolean = false;
  public username: string = "";
  title = 'my-app';

  login(event: any){
    this.isAuthenticated = this.auth.isAuthenticated;
    this.auth.login;
    this.username = this.auth.GetUserInfo();
  }

  logout(login: string)
  {
    console.log("appcomponent appcomponent");
    this.auth.logout(login);
    this.router.navigate(['/login']);
    this.username = "";
  }
}
