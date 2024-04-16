import { Router } from '@angular/router';
import {createMockStore, MockStore} from '@ngrx/store/testing';
import { State } from 'src/app/store';
import { autoSpy, SpyOf } from 'src/app/utils/auto-spy';
import { AuthComponent } from './auth.component';


describe('LoginComponent', () => {
  let component: AuthComponent;
  const { build } = setup<AuthComponent>();

  beforeEach(() => {
    component = build();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});


function setup<T>(): { default: () => any; build: () => T; router: SpyOf<Router>, store: MockStore<State>, [key: string]: any } {
  const initialState = { isLoading: false, pokemons: [], pokemonId: null } as unknown as State;
  const router: SpyOf<Router> = autoSpy(Router);
  const store: MockStore<State> = createMockStore({ initialState })
  const builder = {
    router,
    store,
    default(): any {
      return builder;
    },
    build(): any {
      return new AuthComponent(router, store);
    }
  };
  return builder;
}

