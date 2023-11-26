import { createSlice } from '@reduxjs/toolkit';
import { httpStatus } from '@/utilities/constants/httpStatus';
import { alertMessage } from '@/utilities/constants/application';

const initialValue = {
  showAlert: false,
  statusCode: httpStatus.OK,
  severity: alertMessage.INFO,
  description: ''
};

const initialState = {
  stackBar: initialValue
};

export const alertSlice = createSlice({
  name: 'alert',
  initialState,
  reducers: {
    updateStackBar: (state, action) => {
      state.stackBar = { ...state.stackBar, ...action.payload };
    },
    resetStackBar: (state, _action) => {
      state.stackBar = { ...state.stackBar, showAlert: false };
    }
  }
});

export const { updateStackBar, resetStackBar } = alertSlice.actions;
