import type { CartItem, CartState } from "@/types/cart";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: CartState = {
    products: JSON.parse(localStorage.getItem("cart") || "[]") as CartItem[],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state: CartState, action: PayloadAction<CartItem>) => {
            const existingProduct = state.products.find(
                (product: CartItem) => product.id === action.payload.id
            );

            if (existingProduct) {
                existingProduct.quantity += action.payload.quantity || 1;
                existingProduct.price =
                    existingProduct.unitPrice * existingProduct.quantity;
            } else {
                state.products.push({
                    ...action.payload,
                    quantity: action.payload.quantity || 1,
                    unitPrice: action.payload.price,
                });
            }
            localStorage.setItem("cart", JSON.stringify(state.products));
        },
        removeFromCart: (state: CartState, action: PayloadAction<number>) => {
            state.products = state.products.filter(
                (product) => product.id !== action.payload
            );
            localStorage.setItem("cart", JSON.stringify(state.products));
        },

        increaseQuantity: (state: CartState, action: PayloadAction<number>) => {
            const product = state.products.find((product) => {
                return product.id === action.payload;
            });

            if (product) {
                product.quantity++;
                product.price = product.unitPrice * product.quantity;
            }

            localStorage.setItem("cart", JSON.stringify(state.products));
        },

        decreaseQuantity: (state: CartState, action: PayloadAction<number>) => {
            const product = state.products.find((product) => {
                return product.id === action.payload;
            });

            if (product) {
                product.quantity--;
                product.price = product.unitPrice * product.quantity;
            }

            localStorage.setItem("cart", JSON.stringify(state.products));
        },
    },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
    cartSlice.actions;
export default cartSlice.reducer;
