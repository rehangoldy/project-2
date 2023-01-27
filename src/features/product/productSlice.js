import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from "axios";


export const getProduct = createAsyncThunk("list-menu/product", async ()=> {
    const response = await axios.get("https://fakestoreapi.com/products");
    return response.data;
});

export const productSlice = createSlice({
    name: 'products',
    initialState: {
        status: "idle",
        data: [],
    },
    reducers: {},
    extraReducers(builder) {
        builder
        .addCase(getProduct.pending, (state, action) => {
            state.status = "loading";
        })
        .addCase(getProduct.fulfilled, (state, action) => {
            state.status = "success";
            state.data = action.payload;
        });
    },
});

export default productSlice.reducer;
