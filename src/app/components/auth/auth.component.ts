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
    this.authService.login(this.login, this.password).subscribe(
      (user: any) => {
        if (user[0]) {
          console.log("Пользователь найден");
          localStorage.setItem('Token', user[0].token);
          this.router.navigate(['/courses']);
        }
      },
      (err) => {
          console.log(err)
      }
    );
  }
}
