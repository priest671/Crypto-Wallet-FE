import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  // Profile Info
  name: null,
  phoneNumber: null,
  walletAddress: null,
  email: null,
  password: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createUser(state, action) {
      // Profile Info
      state.name = action.payload.name;
      state.phoneNumber = action.payload.phoneNumber;
      state.walletAddress = action.payload.walletAddress;
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
