import { TestBed } from '@angular/core/testing';
import {CanActivateFn, Router} from '@angular/router';

import { AuthGuardGuard } from '././auth-guard.guard';
import {autoSpy, SpyOf} from "../utils/auto-spy";
import {AuthService} from "./auth.service";

describe('authGuardGuard', () => {
  let guard: AuthGuardGuard;
  const { build, httpClient } = setup<AuthGuardGuard>();

  beforeEach(() => {
    guard = build();
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

function setup<T>(): { default: () => any; build: () => T; router: SpyOf<Router>,  authService: SpyOf<AuthService>, [key: string]: any } {
  const router: SpyOf<Router> = autoSpy(Router);
  const authService: SpyOf<AuthService> = autoSpy(AuthService);
  const builder = {
    router,
    authService,
    default(): any {
      return builder;
    },
    build(): any {
      return new AuthGuardGuard(authService , router);
    }
  };
  return builder;
}
