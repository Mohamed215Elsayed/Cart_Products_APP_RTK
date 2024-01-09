import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
const sliceName = 'productsSlice';
// export const fetchproducts = createAsyncThunk(`productsSlice/fetchproducts`,
export const fetchproducts = createAsyncThunk(`${sliceName}/fetchProducts`,
async () => {
    const res = await fetch('https://dummyjson.com/products');
    const data = await res.json();
    return data.products; 
}

) 
export const productsSlice = createSlice({
    // name: "productsSlice",
    name: sliceName,
    initialState:[],
    reducers: {
    },
    extraReducers:(builder) => {
        builder.addCase(fetchproducts.fulfilled,(state, action) => {
        return action.payload;
        })  
    }
})
// export const {if available} = productsSlice.actions;
// export default productsSlice.reducer;
export const productsReducer = productsSlice.reducer;