import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  address: null,
  balance: null,
  coins: [],
};

const walletSlice = createSlice({
  name: "wallet",
  initialState,
  reducers: {
    initializeWallet(state, action) {
      state.address = action.payload.address;
      state.coins = action.payload.coins;
    },
    setBalance(state, action) {
      state.balance = action.payload;
    },
  },
});

export const walletActions = walletSlice.actions;
export default walletSlice.reducer;
