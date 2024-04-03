import {  Injectable,  } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})


export class AuthService {
  token: string = "";
  passwordStr: string = "";
  loginStr: string="";
  localSt: string | null = "";
  static isAuthenticated: boolean;
  private readonly usersUrl = 'http://localhost:3000/users';


  constructor(private readonly httpClient: HttpClient) {

  }


  public login(login: string, password: string): Observable<any> {
    console.log("Попытка вход в систему");
    console.log(login + " " + password);
    return this.httpClient.get(`${this.usersUrl}?email=${login}&password=${password}`)
  }


  public logout(login: string) {
    console.log("Выход: " + login);
    localStorage.removeItem('Token');

  }

  public get isAuthenticated (): boolean
  {
    return !!localStorage.getItem('Token');
  }

  public GetUserInfo(): Observable<any> {
    const token = localStorage.getItem('Token');
    return this.httpClient.get(`${this.usersUrl}?token=${token}`)
  }

  setToken(token: string) {
    this.token = token
  }

  getToken(): string {
    return this.token
  }
}
