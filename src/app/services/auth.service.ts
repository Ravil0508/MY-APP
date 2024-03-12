import {  Injectable,  } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class AuthService {
  authenticated: boolean = false;
  loginStr: string="";
  passwordStr: string="";
  localSt: string | null = "";


  constructor() {

  }


  public login(login:string, password:string)
  {
    console.log("Выполнен вход в систему");
    console.log(login + " " + password);
    this.loginStr=login;
    localStorage.setItem(login, password);

  }


  public logout()
  {
    console.log("Выход "+ this.loginStr );
    localStorage.removeItem(this.loginStr);

  }

  public get isAuthenticated (): boolean
  {
    console.log("!!!isAuthenticated");
    this.localSt=localStorage.getItem(this.loginStr);

    if (this.localSt!){
      this.authenticated = true;

    }

    return this.authenticated;
  }

  public set isAuthenticated(t: boolean)
  {
    this.authenticated = t;
  }



  public GetUserInfo (): string
  {
    return  this.loginStr;
  }
}
