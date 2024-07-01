import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';

export interface AuthState {
  token: string | null;
}

export const initialState: AuthState = {
  token: localStorage.getItem('authToken')
};

export const authReducer = createReducer(
  initialState,
  on(AuthActions.loginSuccess, (state, { token }) => {
    localStorage.setItem('authToken', token);
    return { ...state, token };
  }),
  on(AuthActions.logout, state => {
    localStorage.removeItem('authToken');
    return { ...state, token: null };
  })
);
