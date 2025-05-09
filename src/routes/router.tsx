import Layout from "@/Layouts/Layout";
import About from "@/Pages/About";
import AllProducts from "@/Pages/AllProducts";
import Cart from "@/Pages/CartPage";
import Home from "@/Pages/Home";
import { Route, Routes } from "react-router";

const RouterComponent = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="/allProducts" element={<AllProducts />} />
                <Route path="/about" element={<About />} />
                <Route path="/cart" element={<Cart />} />
            </Route>
        </Routes>
    );
};

export default RouterComponent;
