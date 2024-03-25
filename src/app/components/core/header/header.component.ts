import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  username = 'Имя пользователя';

  ngOnInit() {
  }

  onLogout() {
    console.log("LogOut");
  }

  onProfile() {
    console.log("User profile");
  }
}
