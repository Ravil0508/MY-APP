import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { autoSpy, SpyOf } from '../utils/auto-spy';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;
  const authUrl = 'http://localhost:3000';
  const { build, httpClient } = setup<AuthService>();

  beforeEach(() => {
    service = build();
  });

  afterEach(() => {
    httpClient.get.calls.reset();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
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
      return new AuthService(httpClient);
    }
  };
  return builder;
}
