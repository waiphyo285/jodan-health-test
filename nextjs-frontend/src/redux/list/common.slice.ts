import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import CommonService from '@/services/general/Common';
import { storeKeys } from '@/utilities/constants/storeKeys';
import { httpStatus } from '@/utilities/constants/httpStatus';
import { dataTable } from '@/utilities/constants/application';

const initialValue = {
  data: [],
  pageInfo: {
    page: dataTable.PAGE_SIZE_0,
    pageSize: dataTable.PAGE_SIZE_0,
    totalRowCount: dataTable.ROW_COUNT_0
  },
  reloadTable: false
};

const initialState = {
  [storeKeys.USER]: initialValue,
  [storeKeys.USER_ROLE]: initialValue,

  [storeKeys.REGION]: initialValue,
  [storeKeys.TOWNSHIP]: initialValue
};

export const getListData = createAsyncThunk(
  'common/getListByFilter',
  async ({ url, storeKey }: any) => CommonService.getList(url, storeKey)
);

export const getPageData = createAsyncThunk(
  'common/getListByPage',
  async ({ url, pageInfo, storeKey }: any) =>
    CommonService.getListByPage(url, pageInfo, storeKey)
);

export const deleteData = createAsyncThunk(
  'common/deleteById',
  async ({ url, id, storeKey }: any) =>
    CommonService.deleteById(url, id, storeKey)
);

export const commonListSlice = createSlice({
  name: 'commonList',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(<any>getListData.fulfilled, (state, action) => {
        const storeKey = action.meta.arg.storeKey;

        if (storeKey && state[storeKey]) {
          state[storeKey] = {
            ...state[storeKey],
            data: action.payload
          };
        }
      })
      .addCase(<any>getPageData.fulfilled, (state, action) => {
        const storeKey = action.meta.arg.storeKey;

        // const matches = action.meta.arg.url.match(/\/(.*?)\//);
        // const storeKey = matches && matches.length ? matches[1] : '';

        if (storeKey && state[storeKey]) {
          state[storeKey] = {
            ...state[storeKey],
            data: action.payload.data,
            pageInfo: action.payload.pageInfo,
            reloadTable: false
          };
        }
      })
      .addCase(<any>deleteData.fulfilled, (state, action) => {
        // const recordId = action.meta.arg.id;
        const storeKey = action.meta.arg.storeKey;
        const statusCode = action.payload?.statusCode;
        const updatedData = action.payload?.data;

        const isAffected = updatedData && statusCode === httpStatus.OK;

        if (isAffected && storeKey && state[storeKey]) {
          state[storeKey] = {
            ...state[storeKey],
            reloadTable: true
          };
        }
      });
  }
});
