import {Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  @Output() public logoutEvent: EventEmitter<Event> = new EventEmitter<Event>();
  @Input() public isAuthenticated: boolean = false;
  @Input() public username: string = "";

  constructor(private readonly authService: AuthService) { }


  ngOnInit() {
  }

  onLogout() {
    console.log("LogOut");
    this.authService.logout();
    this.logoutEvent.emit();
  }

  onProfile() {
    console.log("User profile");
  }
}
