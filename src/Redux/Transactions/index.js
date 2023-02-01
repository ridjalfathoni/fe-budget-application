import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../utils/axios-utils";

const initialState = {
    isLoading: false,
    message: "",
    status: "",
    data: {}
}

export const addNewTransactions = createAsyncThunk('transactions/addTransactions', async (data) => {
    try {
        const res = await axiosInstance.post('/transactions/addTransactions', data)
        return res.data
    } catch (error) {
        
    }
})

export const deleteTransactionsByID = createAsyncThunk('transactions/deleteTransactionsByID', async (data) => {
    try {
        const res = await axiosInstance.delete('/transactions/deleteTransactionsByID', {data:data})
        return res.data
    } catch (error) {
        
    }
})
export const updateTransactions = createAsyncThunk('transactions/updateTransactions', async (data) => {
    try {
        const res = await axiosInstance.put('/transactions/updateTransactions', data)
        return res.data
    } catch (error) {
        
    }
})

export const getAllTransactions = createAsyncThunk('transactions/getAllTransactions', async () => {
    try {
        const res = await axiosInstance.get('/transactions/getAllTransactions')
        return res.data
    } catch (error) {
        
    }
})

export const transactionsSlice = createSlice({
    name: "transactions",
    initialState,
    reducers: {},
    extraReducers: {
        [addNewTransactions.pending]: (state, {payload}) => {
            state.isLoading = true;
        },
        [addNewTransactions.fulfilled]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload.message;
            state.status = payload.status;
        },
        [deleteTransactionsByID.fulfilled]: (state, {payload}) => {
            state.isLoading = false;
        },
        [updateTransactions.fulfilled]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload.message;
            state.status = payload.status;
        },
        [getAllTransactions.pending]: (state) => {
            state.isLoading = true
        },
        [getAllTransactions.fulfilled]: (state, {payload}) => {
            state.isLoading = false;
            state.data = payload.result;
        },
    }
})

export const transactionsReducer = transactionsSlice.reducer

export default transactionsSlice.reducer