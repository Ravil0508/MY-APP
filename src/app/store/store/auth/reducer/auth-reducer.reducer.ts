import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/model/user';
import * as fromUsersActions from '../actions/auth-actions.actions';

export const authReducerFeatureKey = 'authReducer';

export interface authState {
  user: User;
  isAuth: boolean;

}

export const initialState: authState = {
  user: { id: 0, firstName: '', lastName: '', token: '', email: '', password: '' },
  isAuth: false,

};

export const reducer = createReducer(
  initialState,
  on(fromUsersActions.Login, state => state),
  on(fromUsersActions.LoginSuccess, (state, { user }) => ({ ...state, user, isAuth: true })),
  on(fromUsersActions.GetCurrentUser, (state) => ({ ...state })),
  on(fromUsersActions.GetCurrentUserSuccess, ((state, { user }) => ({ ...state, user }))),
  on(fromUsersActions.Logout, state => ({ ...initialState }))

);

