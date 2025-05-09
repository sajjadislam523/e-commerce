import { cartApi } from "@/redux/cart/cartApi";
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/cartSlice";

const store = configureStore({
    reducer: {
        cart: cartReducer,
        [cartApi.reducerPath]: cartApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(cartApi.middleware),
});

export default store;
