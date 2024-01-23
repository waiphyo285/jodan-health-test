import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import CommonService from '@/services/general/Common';
import { storeKeys } from '@/utilities/constants/storeKeys';
import ls from '@/services/LocalStorage';

const initialState = {
  [storeKeys.USER]: [],
  [storeKeys.USER_ROLE]: [],

  [storeKeys.APP_LEVEL_ACCESS]: [],
  [storeKeys.PAGE_LEVEL_ACCESS]: [],

  [storeKeys.LANGUAGE]: [],
  [storeKeys.RECORD]: []
};

export const getListData = createAsyncThunk(
  'appConfig/getList',
  async ({ url, storeKey }: any): Promise<any> =>
    CommonService.getList(url, storeKey)
);

export const getListFilter = createAsyncThunk(
  'appConfig/getListFilter',
  async ({ url, query, storeKey }: any): Promise<any> =>
    CommonService.getListByFilter(url, query, storeKey)
);

export const appConfigSlice = createSlice({
  name: 'appConfig',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(<any>getListData.fulfilled, (state, action) => {
        const storeKey = action.meta.arg.storeKey;
        if (storeKey) state[storeKey] = action.payload;
      })
      .addCase(<any>getListFilter.fulfilled, (state, action) => {
        const storeKey = action.meta.arg.storeKey;
        if (
          storeKey === storeKeys.PAGE_LEVEL_ACCESS ||
          storeKey === storeKeys.APP_LEVEL_ACCESS
        )
          ls.setItem(storeKey, action.payload);
        if (storeKey) state[storeKey] = action.payload;
      });
  }
});
