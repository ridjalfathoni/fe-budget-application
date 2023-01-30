import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosPublic } from "../../utils/axios-utils";
const initialState = {
    isLoading: false,
    message: "",
    status: "",
    data: {}
}

 export const authLoginAPI = createAsyncThunk('auth/login', async (data) => {
    try {
        const res = await axiosPublic.post('/auth/login', data)
        return res.data
    } catch (error) {
        return error.message
    }
 })

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers:{
        [authLoginAPI.pending]: (state) => {
            state.isLoading = true;
        },
        [authLoginAPI.fulfilled]: (state, {payload}) => {
            state.loading = false;
            state.message = payload.message;
            state.status = payload.status;
            state.data = payload.data;
            localStorage.setItem("accessToken", payload.data.accessToken)
            localStorage.setItem("refreshToken", payload.data.refreshToken)
        },
        [authLoginAPI.rejected]: (state) => {
            state.loading = false
        }
    }
})

export const authReducer = authSlice.reducer

export default authSlice.reducer