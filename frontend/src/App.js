import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ProtectedRoute from "./components/ProtectedRoute";
import OrderSuccess from "./pages/OrderSuccess";

function App() {

    return (

        <BrowserRouter>

            <Navbar />

            <Routes>

                <Route path="/" element={<Home />} />

                <Route
                    path="/products"
                    element={<Products />}
                />

                <Route
                    path="/products/:id"
                    element={<ProductDetail />}
                />

                <Route
                    path="/login"
                    element={<Login/>}
                />

                <Route
                    path="/register"
                    element={<Register />}
                />  

                <Route
                    path="/cart"
                    element={
                        <ProtectedRoute>
                        <Cart />
                        </ProtectedRoute>
                    }
                />

               <Route
                    path="/checkout"
                    element={
                        <ProtectedRoute>
                        <Checkout />
                        </ProtectedRoute>
                    }
                />

                <Route
                    path="/success"
                    element={
                        <ProtectedRoute>
                    <OrderSuccess />
                        </ProtectedRoute>
                    }
                    />

            </Routes>

        </BrowserRouter>

    );

}

export default App;