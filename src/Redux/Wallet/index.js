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
        const res = await axiosInstance.post('/wallet/addWallet')
        return res.data
    } catch (error) {
        
    }
})

export const updateNewWallet = createAsyncThunk('wallet/addWallet', async (data) => {
    try {
        const res = await axiosInstance.put('/wallet/updateWalletByID', data)
        return res.data
    } catch (error) {
        
    }
})

export const getListWallet = createAsyncThunk('wallet/getListWallet', async () => {
    try {
        const res = await axiosInstance.get('/wallet/getListWallet')
        return res.data
    } catch (error) {
        
    }
})

export const deleteWalletByID = createAsyncThunk('wallet/deleteWalletByID', async (data) => {
    try {
        const res = await axiosInstance.delete('/wallet/deleteWalletByID',{data:data})
        return {...res.data, ...data}
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
        },
        [getListWallet.pending]: (state) => {
            state.isLoading = true
        },
        [getListWallet.fulfilled]: (state, {payload}) => {
            state.data = payload.result;
            state.isLoading = false;
        },
        [deleteWalletByID.fulfilled]: (state, {payload}) => {
            state.isLoading = false;
        }
    }
})

export const walletReducer = walletSlice.reducer

export default walletSlice.reducer