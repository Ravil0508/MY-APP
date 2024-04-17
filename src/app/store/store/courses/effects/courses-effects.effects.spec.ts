import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { Observable } from 'rxjs';
import { CoursesService } from 'src/app/services/courses.service';
import { SpyOf, autoSpy } from 'src/app/utils/auto-spy';

import { CoursesEffectsEffects } from './courses-effects.effects';

describe('CoursesEffectsEffects', () => {
  let actions$: Observable<any>;
  let effects: CoursesEffectsEffects;
  let store: MockStore;
  const coursesService: SpyOf<CoursesService> = autoSpy(CoursesService);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CoursesEffectsEffects,
        provideMockActions(() => actions$),
        provideMockStore({ initialState: { course: [{ id: 1, name: 'test' }] }  }),
        { provide: CoursesService, useValue: coursesService },
      ]
    });

    effects = TestBed.inject(CoursesEffectsEffects);
    store = TestBed.inject(MockStore);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
