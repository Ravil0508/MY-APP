import { Component } from '@angular/core';
import {AuthService} from "./services/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor (private readonly auth: AuthService ){

  }

  public isAuthenticated: boolean = false;
  public username: string = "";
  title = 'my-app';

  login(event: any){
    this.isAuthenticated = this.auth.isAuthenticated;
    this.auth.login;
    this.username = this.auth.GetUserInfo();
  }

  logout(event: any)
  {
    this.isAuthenticated = this.auth.isAuthenticated;
  }
}
