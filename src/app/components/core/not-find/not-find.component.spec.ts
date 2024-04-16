import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { autoSpy, SpyOf } from 'src/app/utils/auto-spy';

import { NotFindComponent } from './not-find.component';

describe('NotFoundComponent', () => {
  let component: NotFindComponent;

  const { build } = setup<NotFindComponent>();

  beforeEach(() => {
    // TestBed.configureTestingModule({});
    component = build();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

function setup<T>(): { default: () => any; build: () => T; router: SpyOf<Router>,   [key: string]: any } {
  const router: SpyOf<Router> = autoSpy(Router);
  const builder = {
    router,
    default(): any {
      return builder;
    },
    build(): any {
      return new NotFindComponent( router);
    }
  };
  return builder;
}
