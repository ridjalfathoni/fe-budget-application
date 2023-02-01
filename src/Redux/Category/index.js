import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../utils/axios-utils";

const initialState = {
    isLoading: false,
    message: "",
    status: "",
    data: {}
}

export const addNewCategory = createAsyncThunk('category/addCategory', async (data) => {
    try {
        const res = await axiosInstance.post('/category/addCategory', data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        return res.data
    } catch (error) {
        
    }
})
export const deleteCategory = createAsyncThunk('category/deleteCategory', async (data) => {
    try {
        const res = await axiosInstance.delete('/category/deleteCategoryByID', {data:data})
        return res.data
    } catch (error) {
        
    }
})
export const updateCategory = createAsyncThunk('category/updateCategory', async (data) => {
    try {
        const res = await axiosInstance.put('/category/updateCategory', data, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        return res.data
    } catch (error) {
        
    }
})

export const getListCategory = createAsyncThunk('category/getAllCategory', async () => {
    try {
        const res = await axiosInstance.get('/category/getAllCategory')
        return res.data
    } catch (error) {
        
    }
})

export const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {},
    extraReducers: {
        [addNewCategory.pending]: (state, {payload}) => {
            state.isLoading = true;
        },
        [addNewCategory.fulfilled]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload.message;
            state.status = payload.status;
        },
        [deleteCategory.fulfilled]: (state, {payload}) => {
            state.isLoading = false;
        },
        [updateCategory.fulfilled]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload.message;
            state.status = payload.status;
        },
        [getListCategory.pending]: (state) => {
            state.isLoading = true
        },
        [getListCategory.fulfilled]: (state, {payload}) => {
            state.data = payload.result;
            state.isLoading = false;
        },
    }
})

export const categoryReducer = categorySlice.reducer

export default categorySlice.reducer