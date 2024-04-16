import { HttpClient } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CoursesService } from 'src/app/services/courses.service';
import { autoSpy, SpyOf } from 'src/app/utils/auto-spy';

import { AuthorComponent } from './author.component';

describe('AuthorComponent', () => {
  let component: AuthorComponent;

  const { build, httpClient } = setup<AuthorComponent>();

  beforeEach(() => {
    // TestBed.configureTestingModule({});
    component = build();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

function setup<T>(): { default: () => any; build: () => T; httpClient: SpyOf<HttpClient>, [key: string]: any } {
  const httpClient: SpyOf<HttpClient> = autoSpy(HttpClient);
  const builder = {
    httpClient,
    default(): any {
      return builder;
    },
    build(): any {
      return new AuthorComponent(new CoursesService(httpClient) );
    }
  };
  return builder;
}
