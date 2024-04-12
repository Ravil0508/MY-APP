import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAuth from '../reducer/auth-reducer.reducer'
export const selectAuthState = createFeatureSelector<fromAuth.authState>(fromAuth.authReducerFeatureKey)

export const selectAuthUser = createSelector(
  selectAuthState,
  (state) => state.user
)

export const isAuth = createSelector(
  selectAuthState,
  (state) => state.isAuth
);

export const selectUser = createSelector(
  selectAuthState,
  (state) => state
);

