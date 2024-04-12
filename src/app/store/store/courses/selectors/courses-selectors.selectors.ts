import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCourses from '../reducer/courses-reducer.reducer'

export const selectCoursesState = createFeatureSelector<fromCourses.State>(fromCourses.coursesReducerFeatureKey)

export const selectCoursesLoading = createSelector(
  selectCoursesState,
  (state) => state.isLoading
)

export const selectCourses = createSelector(
  selectCoursesState,
  (state) => state.courses
);

export const selectCoursesCount = createSelector(
  selectCourses,
  (courses) => courses.length
);

