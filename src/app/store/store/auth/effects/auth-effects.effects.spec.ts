import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { SpyOf, autoSpy } from 'src/app/utils/auto-spy';

import { AuthEffectsEffects } from './auth-effects.effects';

describe('CoursesEffectsEffects', () => {
  let actions$: Observable<any>;
  let effects: AuthEffectsEffects;
  let store: MockStore;
  const authService: SpyOf<AuthService> = autoSpy(AuthService);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthEffectsEffects,
        provideMockActions(() => actions$),
        provideMockStore({ initialState: { auth: [{ login: 'dveselov@diasoft.ru', password: '12345678' }] }  }),
        { provide: AuthService, useValue: authService },
      ]
    });

    effects = TestBed.inject(AuthEffectsEffects);
    store = TestBed.inject(MockStore);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
