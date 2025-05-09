import {
    decreaseQuantity,
    increaseQuantity,
    removeFromCart,
} from "@/redux/cart/cartSlice";
import type { RootState } from "@/types/cart";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { toast } from "react-toastify";

const Cart = () => {
    const { products } = useSelector((state: RootState) => state.cart);
    const dispatch = useDispatch();

    const handleRemoveFromCart = (id: number) => {
        try {
            dispatch(removeFromCart(id));
            toast.success("Item removed from cart");
        } catch (error) {
            console.log(error);
            toast.error("Failed to remove item from cart");
        }
    };

    return (
        <div className="max-w-6xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-8">Your Shopping Cart</h1>

            {products.length === 0 ? (
                <div className="text-center py-20">
                    <div className="text-6xl mb-4">🛒</div>
                    <p className="text-2xl text-gray-500 mb-4">
                        Your cart is empty
                    </p>
                    <Link to="/">Back to Shop</Link>
                </div>
            ) : (
                <div className="space-y-6">
                    {/* Cart Items */}
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="flex items-center gap-6 p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow"
                        >
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-24 h-24 object-contain rounded-lg bg-gray-100 p-2"
                            />

                            <div className="flex-1">
                                <h2 className="text-lg font-semibold mb-2">
                                    {product.title}
                                </h2>
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-2">
                                        <button
                                            className="px-2 hover:bg-gray-200 rounded"
                                            onClick={() =>
                                                dispatch(
                                                    decreaseQuantity(product.id)
                                                )
                                            }
                                        >
                                            -
                                        </button>
                                        <span className="w-8 text-center">
                                            {product.quantity}
                                        </span>
                                        <button
                                            className="px-2 hover:bg-gray-200 rounded"
                                            onClick={() =>
                                                dispatch(
                                                    increaseQuantity(product.id)
                                                )
                                            }
                                        >
                                            +
                                        </button>
                                    </div>
                                    <p className="text-xl font-bold text-blue-600">
                                        ${product.price}
                                    </p>
                                </div>
                            </div>

                            <button
                                className="text-gray-400 hover:text-red-500 p-2"
                                onClick={() => handleRemoveFromCart(product.id)}
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    ))}

                    {/* Cart Summary */}
                    <div className="border-t pt-6 mt-8">
                        <div className="max-w-md ml-auto space-y-4">
                            <div className="flex justify-between text-xl">
                                <span className="font-semibold">Subtotal:</span>
                                <span className="font-bold">
                                    $
                                    {products
                                        .reduce(
                                            (sum, item) => sum + item.price,
                                            0
                                        )
                                        .toFixed(2)}
                                </span>
                            </div>
                            <button className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors">
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
