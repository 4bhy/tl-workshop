import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    registerReq: (state, action) => {
      state.registerLoading = true;
    },
    registerSuccess: (state, action) => {
      state.registerLoading = false;
      state.userInfo = action.payload;
    },
    registerFail: (state, action) => {
      state.registerLoading = false;
      state.registerError = action.payload;
    },
  },
});

export default registerSlice.reducer;

export const { registerReq, registerSuccess, registerFail } =
  registerSlice.actions; 
