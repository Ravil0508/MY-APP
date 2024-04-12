import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnInit ,Output} from '@angular/core';
import {Router} from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import {Observable} from "rxjs";
import {State} from "../../store";
import {select, Store} from "@ngrx/store";
import {selectUser} from "../../store/store/auth/selectors/auth-selectors.selectors";
import {Login} from "../../store/store/auth/actions/auth-actions.actions";

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
    private store: Store<State>,
    )
  {

  }

  login: string ="";
  password: string ="";
  authenticated: boolean = false;

  ngOnInit(): void {
  }

  public loginAuth(myForm: any){
    let login  = myForm.value.login;
    let password = myForm.value.password;

    this.store.dispatch(Login({ login, password }));
  }
}
