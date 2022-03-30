import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: null,
  phoneNumber: null,
  email: null,
  password: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    createUser(state, action) {
      state.name = action.payload.name;
      state.phoneNumber = action.payload.phoneNumber;
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
