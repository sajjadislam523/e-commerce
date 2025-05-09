import type { RootState } from "@/types/cart";
import { CiShoppingCart } from "react-icons/ci";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router";

const Navbar = () => {
    const { products } = useSelector((state: RootState) => state.cart);

    return (
        <div className="flex items-center justify-between p-4 sticky top-0 bg-white">
            <div className="text-xl font-bold">LOGO</div>
            <nav className="flex items-center gap-4">
                <NavLink
                    className={({ isActive }) =>
                        `hover:underline ${
                            isActive ? "underline font-semibold" : ""
                        }`
                    }
                    to="/"
                >
                    Home
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        `hover:underline ${
                            isActive ? "underline font-semibold" : ""
                        }`
                    }
                    to="/allProducts"
                >
                    Products
                </NavLink>
                <NavLink
                    className={({ isActive }) =>
                        `hover:underline ${
                            isActive ? "underline font-semibold" : ""
                        }`
                    }
                    to="/about"
                >
                    About
                </NavLink>
            </nav>
            <div className="flex items-center gap-4">
                <div>User</div>
                <Link to="/cart">
                    <div className="relative bg-blue-600 rounded-full text-white p-2">
                        <CiShoppingCart className="text-2xl" />
                        <div className="absolute bottom-6 left-7 bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center">
                            {products.length}
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
