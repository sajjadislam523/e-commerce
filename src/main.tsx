import store from "@/redux/store";
import RouterComponent from "@/routes/router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";
import { ToastContainer } from "react-toastify";
import "./index.css";

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
        />
        <Provider store={store}>
            <BrowserRouter>
                <RouterComponent />
            </BrowserRouter>
        </Provider>
    </StrictMode>
);
