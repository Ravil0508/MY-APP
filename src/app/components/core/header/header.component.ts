import {ChangeDetectorRef, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import { State } from 'src/app/store';
import {GetCurrentUser, Logout} from "../../../store/store/auth/actions/auth-actions.actions";
import {selectAuthUser} from "../../../store/store/auth/selectors/auth-selectors.selectors";
import {clearCourses} from "../../../store/store/courses/actions/courses-actions.actions";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit{
  @Output() public logoutEvent= new EventEmitter<string>();
  @Input() public isAuthenticated = false;
  @Input() public username = "";
  getUserFlag = false;
  authUser$: Observable<any>;

  constructor(
    private readonly authService: AuthService,
              private cdr: ChangeDetectorRef,
              private store: Store<State>,
  ) {
    this.authUser$ = this.store.select(selectAuthUser);
  }


  ngOnInit() {
    this.store.dispatch(GetCurrentUser());
  }

  onLogout() {
    this.logoutEvent.emit(this.username);
    this.getUserFlag = false;
    this.store.dispatch(clearCourses());
    this.store.dispatch(Logout());
  }

  get isAuth():boolean{
    this.isAuthenticated = this.authService.isAuthenticated;
    return this.isAuthenticated;
  }

  ngAfterContentChecked(): void {
    if (this.isAuthenticated) {
    }
  }
}
