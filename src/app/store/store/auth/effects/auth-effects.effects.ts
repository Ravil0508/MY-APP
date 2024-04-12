import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import * as fromAuthActions from '../actions/auth-actions.actions';
import { catchError, map, tap, mergeMap, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { State } from '../../../';
import {Router} from "@angular/router";

@Injectable()
export class AuthEffectsEffects {

  public login$ = createEffect(() => this.actions$.pipe(
    ofType(fromAuthActions.Login),
    switchMap(({ login, password }) => this.authService.login(login, password).pipe(
      map((user) => fromAuthActions.LoginSuccess({ user })),
      tap(() => this.router.navigate(['/courses'])),
      catchError((error) => of(fromAuthActions.LoginFailure({ error })))
    ))
  ))

  public getCurrentUser$ = createEffect(() => this.actions$.pipe(
    ofType(fromAuthActions.GetCurrentUser),
    mergeMap(() => this.authService.GetUserInfo().pipe(
      map((user) => fromAuthActions.GetCurrentUserSuccess({ user })),
      catchError((error) => of(fromAuthActions.GetCurrentUserFailure({ error })))
    ))
  ))

  constructor(private actions$: Actions, private store: Store<State>, private authService: AuthService, private router: Router) { }
}
