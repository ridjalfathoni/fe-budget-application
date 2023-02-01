import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../Auth'
import walletReducer from '../Wallet'
import categoryReducer from '../Category'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        wallet: walletReducer,
        category: categoryReducer
    }
})