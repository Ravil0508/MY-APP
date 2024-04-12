import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromCourses from '../store/store/courses/reducer/courses-reducer.reducer';
import * as fromAuth from '../store/store/auth/reducer/auth-reducer.reducer';

export interface State {
  [fromCourses.coursesReducerFeatureKey]: fromCourses.State;
  [fromAuth.authReducerFeatureKey]: fromAuth.authState;
}

export const reducers: ActionReducerMap<State> = {
  [fromCourses.coursesReducerFeatureKey]: fromCourses.reducer,
  [fromAuth.authReducerFeatureKey]: fromAuth.reducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
