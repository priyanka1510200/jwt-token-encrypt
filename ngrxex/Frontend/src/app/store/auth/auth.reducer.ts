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
    
    return { ...state, token };
  }),
  on(AuthActions.logout, state => { 
    
    return { ...state, token: null };
  })
);
