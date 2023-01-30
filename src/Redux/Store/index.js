import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../Auth'
import walletReducer from '../Wallet'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        wallet: walletReducer
    }
})