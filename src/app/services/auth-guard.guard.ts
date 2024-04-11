import { Inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, NavigationCancel, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import {catchError, map, Observable, throwError, of} from 'rxjs';
import {AuthService} from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(
    // @Inject(AuthService) private auth: AuthService,
    private authService : AuthService,
    private router: Router,
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> {
    return of(this.authService.isAuthenticated ? true : this.router.parseUrl('/login'));
  }

}
