

import { Router } from '@angular/router';
import { createMockStore, MockStore } from '@ngrx/store/testing';
import { ConfirmationService } from 'primeng/api';
import { State } from 'src/app/store';
import { autoSpy, SpyOf } from 'src/app/utils/auto-spy';
import { CourseListComponent } from './course-list.component';


describe('CourseListComponent', () => {
  let component: CourseListComponent;
  const { build } = setup<CourseListComponent>();

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
      return new CourseListComponent(new ConfirmationService, router, store );
    }
  };
  return builder;
}

