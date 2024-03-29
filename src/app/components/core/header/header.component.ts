import {Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  @Output() public logoutEvent= new EventEmitter<string>();
  @Input() public isAuthenticated: boolean = false;
  @Input() public username: string = "";

  constructor(private readonly authService: AuthService) { }


  ngOnInit() {
  }

  onLogout() {
    console.log("appcomponent header");
    this.logoutEvent.emit(this.username);
    this.authService.isAuthenticated = false;
  }

  get isAuth():boolean{
    this.username = this.authService.GetUserInfo();
    return this.authService.isAuthenticated
  }

  onProfile() {
    console.log("User profile");
  }
}
