import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import CommonService from '@/services/general/Common';

const actionsValue = {
  recordId: '',
  actionType: '',
  openEntryModal: false,
  openConfirmAlert: false
};

const initialState = {
  formData: {
    initialValues: {},
    actionsValues: actionsValue
  }
};

export const getOneData = createAsyncThunk(
  'common/getOneById',
  async ({ url, id, storeKey }: any) =>
    CommonService.getOneById(url, id, storeKey)
);

export const createData = createAsyncThunk(
  'common/createOne',
  async ({ url, data, storeKey }: any) =>
    CommonService.createOne(url, data, storeKey)
);

export const updateData = createAsyncThunk(
  'common/updateById',
  async ({ url, data, storeKey }: any) =>
    CommonService.updateById(url, data.id, data, storeKey)
);

export const commonEntrySlice = createSlice({
  name: 'commonEntry',
  initialState,
  reducers: {
    updateFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    updateInitialValues: (state, action) => {
      state.formData.initialValues = action.payload;
    },
    updateActionsValues: (state, action) => {
      state.formData.actionsValues = action.payload;
    },
    resetFormData: (state) => {
      state.formData = { initialValues: {}, actionsValues: actionsValue };
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(<any>getOneData.fulfilled, (state, action) => {
        state.formData.initialValues = action.payload;
      })
      .addCase(<any>createData.fulfilled, (state, _action) => {
        state.formData.initialValues = {}; // reset
        state.formData.actionsValues = actionsValue;
      })
      .addCase(<any>updateData.fulfilled, (state, _action) => {
        state.formData.initialValues = {}; // reset
        state.formData.actionsValues = actionsValue;
      });
  }
});

export const {
  updateFormData,
  updateInitialValues,
  updateActionsValues,
  resetFormData
} = commonEntrySlice.actions;
