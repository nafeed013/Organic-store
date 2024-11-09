import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "./productsSlice";
import cartItems from "./cartItems";

const organicStore = configureStore({
    reducer: {
        products: productsSlice.reducer,
        cart: cartItems.reducer,
    }
});

export default organicStore;