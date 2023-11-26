import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';

import { appConfigSlice } from './config.slice';
import { authSlice } from './auth.slice';
import { alertSlice } from './alert.slice';
import { commonListSlice } from './list/common.slice';
import { commonEntrySlice } from './entry/common.slice';

export let store;

const makeStore = () =>
  (store = configureStore({
    reducer: {
      [authSlice.name]: authSlice.reducer,
      [alertSlice.name]: alertSlice.reducer,
      [appConfigSlice.name]: appConfigSlice.reducer,
      [commonListSlice.name]: commonListSlice.reducer,
      [commonEntrySlice.name]: commonEntrySlice.reducer
    },
    devTools: true
  }));

export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore['getState']>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

export const wrapper = createWrapper<AppStore>(makeStore);
