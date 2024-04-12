import { Injectable } from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import * as fromCoursesActions from '../actions/courses-actions.actions';
import { CoursesService } from 'src/app/services/courses.service';
import { catchError, map, tap, switchMap, withLatestFrom } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { State } from '../../../';
import { selectCoursesCount } from '../selectors/courses-selectors.selectors';
import { of } from 'rxjs';
import {Router} from "@angular/router";

@Injectable()
export class CoursesEffectsEffects {
  public coursesEffect$ = createEffect(() => this.actions$.pipe(
    ofType(fromCoursesActions.getCourses),
    withLatestFrom(this.store.select(selectCoursesCount)),
    switchMap(([{ limit }, count]) => this.coursesService.getCoursesList( limit || count + 3).pipe(
      map((data) => fromCoursesActions.getCoursesSuccess({ data })),
      catchError((error) => of(fromCoursesActions.getCoursesFailure({ error })))
    ))
  ));

  public searchCourses$ = createEffect(() => this.actions$.pipe(
    ofType(fromCoursesActions.searchCourses),
    switchMap(({ input }) => this.coursesService.searchCourses(input).pipe(
      map((data) => fromCoursesActions.searchCoursesSuccess({ data })),
      catchError((error) => of(fromCoursesActions.searchCoursesFailure({ error })))
    ))
  ))

  public deleteCourse$ = createEffect(() => this.actions$.pipe(
    ofType(fromCoursesActions.deleteCourse),
    switchMap(({ courseId }) => this.coursesService.deleteCourse(courseId).pipe(
      map((data) => fromCoursesActions.deleteCourseSuccess({ courseId })),
      catchError((error) => of(fromCoursesActions.deleteCourseFailure({ error })))
    ))
  ))

  public deleteCourseSuccess$ = createEffect(() => this.actions$.pipe(
    ofType(fromCoursesActions.deleteCourseSuccess),
    map(() => fromCoursesActions.getCourses({}))
  ))

  public addCourse$ = createEffect(() => this.actions$.pipe(
    ofType(fromCoursesActions.addCourse),
    switchMap(({ course }) => this.coursesService.createCourse(course).pipe(
      map((data) => fromCoursesActions.addCourseSuccess({ course })),
      tap(() => this.router.navigate(['/courses'])),
      catchError((error) => of(fromCoursesActions.addCourseFailure({ error })))
    ))
  ))

  public editCourse$ = createEffect(() => this.actions$.pipe(
    ofType(fromCoursesActions.editCourse),
    switchMap(({ course }) => this.coursesService.updateCourse(course).pipe(
      map((data) => fromCoursesActions.editCourseSuccess({ course })),
      tap(() => this.router.navigate(['/courses'])),
      catchError((error) => of(fromCoursesActions.editCourseFailure({ error })))
    ))
  ))



  constructor(private actions$: Actions, private coursesService: CoursesService, private store: Store<State>, private router: Router) { }
}
