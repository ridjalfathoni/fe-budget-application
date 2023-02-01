import { configureStore } from "@reduxjs/toolkit";
import authReducer from '../Auth'
import walletReducer from '../Wallet'
import categoryReducer from '../Category'
import transactionsSlice from "../Transactions";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        wallet: walletReducer,
        category: categoryReducer,
        transactions: transactionsSlice
    }
})