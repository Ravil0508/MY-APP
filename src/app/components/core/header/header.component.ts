import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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
  getUserFlag = false;

  constructor(private readonly authService: AuthService,
              private cdr: ChangeDetectorRef
  ) { }


  ngOnInit() {
  }

  onLogout() {
    this.logoutEvent.emit(this.username);
    this.getUserFlag = false;
  }

  get isAuth():boolean{
    this.isAuthenticated = this.authService.isAuthenticated;
    if (this.isAuthenticated && !this.getUserFlag)
    {
      this.authService.GetUserInfo().subscribe(
        (user: any) => {
          console.log(user);
          if (user[0]) {
            console.log("Пользователь найден");
            this.username = user[0].email
          }
        }
      )
      this.getUserFlag = true;
      this.cdr.detectChanges();
    }
    return this.isAuthenticated ;
  }

  ngAfterContentChecked(): void {
    if (this.isAuthenticated) {
    }
  }
}
