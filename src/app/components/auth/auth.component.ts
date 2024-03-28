import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit ,Output} from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  @Output() public loginEvent: EventEmitter<string> = new EventEmitter<string>();

  constructor(
    private authService: AuthService,
    private router: Router,
    )
  {

  }

  login: string ="";
  password: string ="";
  authenticated: boolean = false;

  ngOnInit(): void {
  }

  public loginAuth(){
    console.log( this.authService.isAuthenticated);
    this.authService.login(this.login, this.password);
    this.authenticated =  this.authService.isAuthenticated;
    console.log( this.authService.isAuthenticated);
    if (this.authenticated)
    {
      this.loginEvent.emit(this.login);
      this.router.navigate(['/courses']);
    }
  }
}
