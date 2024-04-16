import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesComponent } from './courses.component';
import {CourseComponent} from "./course/course.component";
import {CourseListComponent} from "./course-list/course-list.component";
import {ActionsSubject, ReducerManager, ReducerManagerDispatcher, StateObservable, Store} from "@ngrx/store";
import {InjectionToken} from "@angular/core";

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursesComponent, CourseComponent , CourseListComponent],
      providers: [Store, StateObservable, ActionsSubject, ReducerManager, ReducerManagerDispatcher, InjectionToken ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
