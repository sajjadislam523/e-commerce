import type { CartItem } from "@/types/cart";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cartApi = createApi({
    reducerPath: "cartApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com/" }),
    endpoints: (builder) => ({
        getProducts: builder.query<CartItem[], void>({
            query: () => "/products",
        }),
    }),
});

export const { useGetProductsQuery } = cartApi;
