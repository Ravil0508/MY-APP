
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let mockAuthService: any;
  let mockStore: any;
  let mockChangeDetectorRef: any;

  beforeEach(() => {
    mockAuthService = jasmine.createSpyObj('AuthService', ['isAuthenticated', 'logout']);
    mockStore = jasmine.createSpyObj('Store', ['select', 'dispatch']);
    mockChangeDetectorRef = jasmine.createSpyObj('ChangeDetectorRef', ['detectChanges']);

    mockAuthService.isAuthenticated.and.returnValue(true);
    mockStore.select.and.returnValue(of({}));

    component = new HeaderComponent(mockAuthService, mockChangeDetectorRef, mockStore);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
