import { Router } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import { autoSpy, SpyOf } from './utils/auto-spy';

describe('AppComponent', () => {
  let app: AppComponent;
  const { build, httpClient } = setup<AppComponent>();

  beforeEach(() => {
    // TestBed.configureTestingModule({});
    app = build();
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'my-app'`, () => {
    expect(app.title).toEqual('my-app');
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
      return new AppComponent(authService , router);
    }
  };
  return builder;
}
