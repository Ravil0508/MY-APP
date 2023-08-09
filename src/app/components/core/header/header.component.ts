import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  username = 'Имя пользователя';

  onLogout() {
    console.log("LogOut");
  }

  onProfile() {
    console.log("User profile");
  }
}
