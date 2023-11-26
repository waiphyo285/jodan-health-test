import { createSlice } from '@reduxjs/toolkit';
// import { HYDRATE } from 'next-redux-wrapper';

import { AppState } from './store';

// Type for our state
export interface AuthState {
  userInfo: any;
  isAuthenticated: boolean;
}

// Initial state
const initialState: AuthState = {
  userInfo: {},
  isAuthenticated: false
};

// Actual slice
export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Action to set the authentication status
    setAuthState(state, action) {
      state.userInfo = action.payload.userInfo;
      state.isAuthenticated = action.payload.accessToken ? true : false;
    },
    resetAuthState(state) {
      state.userInfo = {};
      state.isAuthenticated = false;
    }
  }

  // Special reducer for hydrating the state. Special case for next-redux-wrapper
  // extraReducers: {
  //   [HYDRATE]: (state, action) => {
  //     return {
  //       ...state,
  //       ...action.payload.auth
  //     };
  //   }
  // }
});

export const { setAuthState, resetAuthState } = authSlice.actions;

export const selectAuthUser = (state: AppState) => state?.auth?.userInfo;

export default authSlice.reducer;
