import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

import "../styles/Cart.css";


function Cart() {

    const {
        cart,
        addToCart,
        decreaseQuantity,
        removeFromCart,
        clearCart
    } = useContext(CartContext);

    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const navigate = useNavigate();

    if (cart.length === 0) {
        return (
            <div className="cart-page">
                <h1>Shopping Cart</h1>
                <p>Your shopping cart is empty.</p>
            </div>
        );
    }

    return (
        <div className="cart-page">

            <h1>Shopping Cart</h1>

            {
                cart.map((item) => (

                    <div
                        className="cart-item"
                        key={item._id}
                    >

                        <img
                            src={`http://localhost:5000/${item.image}`}
                            alt={item.name}
                        />

                        <div className="cart-info">

                            <h3>{item.name}</h3>

                            <p>
                                Rp {item.price.toLocaleString("id-ID")}
                            </p>

                            <div className="qty-control">

                                <button
                                    onClick={() => decreaseQuantity(item._id)}
                                >
                                    −
                                </button>

                                <span>{item.quantity}</span>

                                <button
                                    onClick={() => addToCart(item)}
                                >
                                    +
                                </button>

                            </div>

                            <h4>

                                Subtotal :

                                Rp {(item.price * item.quantity).toLocaleString("id-ID")}

                            </h4>

                        </div>

                        <button
                            className="remove-btn"
                            onClick={() => removeFromCart(item._id)}
                        >
                            Remove
                        </button>

                    </div>

                ))
            }

            <div className="cart-summary">

                <h2>

                    Total :

                    Rp {total.toLocaleString("id-ID")}

                </h2>

                <button
                    className="checkout-btn"
                    onClick={() => navigate("/checkout")}
                >
                Checkout
                </button>

                <button
                    className="clear-btn"
                    onClick={clearCart}
                >

                    Clear Cart

                </button>

            </div>

        </div>
    );

}

export default Cart;