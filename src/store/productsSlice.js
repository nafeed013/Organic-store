import { createSlice } from "@reduxjs/toolkit";
import { organicProducts } from "../Data/Data";

const productsSlice = createSlice({
    name: "products",
    initialState: organicProducts,
    reducers: {
        renderProducts: (action) => {
            return action.payload
        },
    }
});

export const productsActions = productsSlice.actions;

export default productsSlice;