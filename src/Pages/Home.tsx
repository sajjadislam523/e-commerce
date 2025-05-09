import ProductCard from "@/components/ProductCard";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useGetProductsQuery } from "@/redux/cart/cartApi";
import type { CartItem } from "@/types/cart";
import { useState } from "react";

const Home = () => {
    const { data, error, isLoading } = useGetProductsQuery();

    const [category, setCategory] = useState<string | null>(null);

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

    const filteredProducts = category
        ? data?.filter((product: CartItem) => product.category === category)
        : data;

    return (
        <div className="flex flex-col gap-6 p-6">
            <div className="flex justify-between items-center">
                <h2 className="text-lg font-bold">Categories</h2>
                <DropdownMenu>
                    <DropdownMenuTrigger className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md">
                        {category || "Select Category"}
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-48">
                        <DropdownMenuItem
                            onClick={() => setCategory("men's clothing")}
                        >
                            Men's Clothing
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            onClick={() => setCategory("women's clothing")}
                        >
                            Women's Clothing
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            onClick={() => setCategory("electronics")}
                        >
                            Electronics
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            onClick={() => setCategory("jewelery")}
                        >
                            Jewelery
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredProducts?.map((product: CartItem) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Home;
