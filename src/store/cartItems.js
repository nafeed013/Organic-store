import { createSlice } from "@reduxjs/toolkit"

const cartItems = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addToCart: (state, action) => {
            const existingItem = state.find(item => item === action.payload);
            if(existingItem) {
                existingItem.quantity += 1;
            } else {
                state.push({...action.payload, quantity: 1});
            }
        },
        removeFromCart: (state, action) => {
            return state.filter((itemId) => itemId !== action.payload);
        }
    }
});

export const cartItemsActions = cartItems.actions;

export default cartItems;