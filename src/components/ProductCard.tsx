import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { addToCart } from "@/redux/cart/cartSlice";
import type { CartItem } from "@/types/cart";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const ProductCard = ({ product }: { product: CartItem }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        try {
            dispatch(addToCart(product));
            toast.success(`${product.title} added to cart`);
        } catch (error) {
            console.log(error);
            toast.error("Failed to add item to cart");
        }
    };

    return (
        <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
                <CardTitle className="text-lg truncate line-clamp-2 h-14">
                    {product.title}
                </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col gap-2">
                <div className="aspect-square w-full bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                    <img
                        className="w-48 h-48 object-contain p-4"
                        src={product.image}
                        alt={product.title}
                    />
                </div>
                <p className="text-sm text-gray-600 line-clamp-3 flex-1">
                    {product.description}
                </p>
                <div className="flex justify-between items-center mt-4">
                    <span className="text-lg font-bold text-primary">
                        ${product.price}
                    </span>
                    <button
                        className="bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-md transition-colors"
                        onClick={handleAddToCart}
                    >
                        Add to Cart
                    </button>
                </div>
            </CardContent>
        </Card>
    );
};

export default ProductCard;
