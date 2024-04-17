import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesComponent } from './courses.component';
import {CourseComponent} from "./course/course.component";
import {CourseListComponent} from "./course-list/course-list.component";
import {
  ActionsSubject,
  ReducerManager,
  ReducerManagerDispatcher,
  StateObservable,
  Store, StoreModule
} from "@ngrx/store";
import {CUSTOM_ELEMENTS_SCHEMA, InjectionToken, NO_ERRORS_SCHEMA} from "@angular/core";
import {reducers} from "../../store";
import {BreadcrumbModule} from "primeng/breadcrumb";
import {CommonModule} from "@angular/common";
import {SearchComponent} from "../core/search/search.component";
import {ButtonModule} from "primeng/button/button";
import {RouterTestingModule} from "@angular/router/testing";

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoreModule.forRoot(reducers), CommonModule,
        BreadcrumbModule, RouterTestingModule ],
      declarations: [CoursesComponent, CourseComponent, CourseListComponent, SearchComponent],
      providers: [Store],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
    // await TestBed.configureTestingModule({
    //   declarations: [CoursesComponent, CourseComponent, CourseListComponent],
    //   providers: [
    //     Store,
    //     StateObservable,
    //     ActionsSubject,
    //     ReducerManager,
    //     ReducerManagerDispatcher
    //   ]
    // }).compileComponents();
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
