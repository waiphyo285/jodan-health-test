import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import CommonService from '@/services/general/Common';
import { storeKeys } from '@/utilities/constants/storeKeys';
import ls from '@/services/LocalStorage';

const initialState = {
  [storeKeys.USER]: [],
  [storeKeys.USER_ROLE]: [],

  [storeKeys.APP_LEVEL_ACCESSES]: [],
  [storeKeys.PAGE_LEVEL_ACCESSES]: [],

  [storeKeys.STATION]: [],

  [storeKeys.REGION]: [],
  [storeKeys.TOWNSHIP]: []
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
          storeKey === storeKeys.PAGE_LEVEL_ACCESSES ||
          storeKey === storeKeys.APP_LEVEL_ACCESSES
        )
          ls.setItem(storeKey, action.payload);
        if (storeKey) state[storeKey] = action.payload;
      });
  }
});
