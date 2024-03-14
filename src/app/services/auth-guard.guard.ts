import { Inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, NavigationCancel, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
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
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (!this.authService.isAuthenticated) {
      return this.router.parseUrl('/login');
    } else {
      return true;
    }
  }

}
