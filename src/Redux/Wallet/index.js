import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../utils/axios-utils";
const initialState = {
    isLoading: false,
    message: "",
    status: "",
    data: {}
}

export const addNewWallet = createAsyncThunk('wallet/addWallet', async (data) => {
    try {
        const res = await axiosInstance.post('/wallet/addWallet', data)
        return res.data
    } catch (error) {
        
    }
})

export const walletSlice = createSlice({
    name: "wallet",
    initialState,
    reducers: {},
    extraReducers: {
        [addNewWallet.fulfilled]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload.message;
            state.status = payload.message;
            state.data = payload.data;
        }
    }
})

export default walletSlice.reducer