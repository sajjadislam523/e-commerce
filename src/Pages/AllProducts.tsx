import ProductCard from "@/components/ProductCard";
import { useGetProductsQuery } from "@/redux/cart/cartApi";
import type { CartItem } from "@/types/cart";

const AllProducts = () => {
    const { data, error, isLoading } = useGetProductsQuery();

    if (isLoading)
        return (
            <div className="flex items-center justify-center">
                <h1 className="text-center font-bold text-2xl">Loading...</h1>
            </div>
        );
    if (error)
        return (
            <div className="flex items-center justify-center">
                <h1 className="text-center font-bold text-2xl">
                    Error Showing the products
                </h1>
            </div>
        );
    // console.log(data);

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6">
            {(data as CartItem[]).map((product: CartItem) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    );
};

export default AllProducts;
