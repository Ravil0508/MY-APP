import {createAction, createActionGroup, emptyProps, props} from '@ngrx/store';
import { User } from 'src/app/model/user';

export const Login = createAction(
  '[Auth] Login',
  props<{ login: string, password: string }>()
);

export const LoginSuccess = createAction(
  '[Auth] Login Success',
  props<{ user: User }>()
);

export const LoginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: any }>()
);

export const GetCurrentUser = createAction(
  '[Auth] GetCurrentUser',
);

export const GetCurrentUserSuccess = createAction(
  '[Auth] GetCurrentUser Success',
  props<{ user: User }>()
);

export const GetCurrentUserFailure = createAction(
  '[Auth] GetCurrentUser Failure',
  props<{ error: any }>()
);
export const Logout = createAction(
  '[Auth] Logout',
);
