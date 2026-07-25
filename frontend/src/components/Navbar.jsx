import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import {CartContext} from "../context/CartContext";
import {
    FaSearch,
    FaHeart,
    FaShoppingCart
} from "react-icons/fa";

import "../styles/navbar.css";


function Navbar() {

    const navigate = useNavigate();

    const token = localStorage.getItem("token");

    const {cart} = useContext(CartContext);
    const totalItems = cart.reduce(
        (total, item) => total + item.quantity,
        0
        );

    const user = JSON.parse(localStorage.getItem("user"));

    const handleLogout = () => {

        localStorage.removeItem("token");

        localStorage.removeItem("user");

        navigate("/");

        window.location.reload();

    };

    return (

        <nav className="navbar">

            <div className="logo">

                <div className="logo-circle">

                    OS

                </div>

                <div className="logo-text">

                    BIONShop

                </div>

            </div>

            <div className="menu">

                <Link to="/">Home</Link>

                <Link to="/products">

                    Products

                </Link>

            </div>

            <div className="icons">

                <FaSearch />

                <FaHeart />

                <Link to="/cart" className="cart-icon">

                    <FaShoppingCart />
                    {totalItems > 0 && (

                    <span className="cart-badge">

                     {totalItems}

                     </span>

                    )}

                </Link>

                {
                    token ? (

                        <>

                            <div
                                className="user-avatar"
                                title={user?.name}
                            >

                                {user?.name.charAt(0).toUpperCase()}

                            </div>

                            <button
                                className="logout-btn"
                                onClick={handleLogout}
                            >

                                Logout

                            </button>

                        </>

                    ) : (

                        <>

                            <Link
                                className="auth-link"
                                to="/login"
                            >

                                Login

                            </Link>

                            <Link
                                className="auth-link"
                                to="/register"
                            >

                                Register

                            </Link>

                        </>

                    )
                }

            </div>

        </nav>

    );

}

export default Navbar;