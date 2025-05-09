export interface Rating {
    rate: number;
    count: number;
}

export interface CartItem {
    quantity: number;
    unitPrice: number;
    title: string;
    id: number;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
}

export interface CartState {
    products: CartItem[];
}

export interface RootState {
    cart: CartState;
}
