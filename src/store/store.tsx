import { configureStore } from "@reduxjs/toolkit";

import authenticationReducer from "./Authentication/Authentication";
import userReducer from "./User/User";
import walletReducer from "./Wallet/Wallet";

const store = configureStore({
  reducer: {
    authentication: authenticationReducer,
    user: userReducer,
    wallet: walletReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
