import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import "../styles/Checkout.css";

function Checkout() {

    const { cart, clearCart } = useContext(CartContext);

    const navigate = useNavigate();

    const total = cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const handleCheckout = () => {

        
        clearCart();

        navigate("/success");

    };

    if (cart.length === 0) {

        return (

            <div className="checkout-page">

                <h2>Your cart is empty.</h2>

            </div>

        );

    }

    return (

        <div className="checkout-page">

            <h1>Checkout</h1>

            {
                cart.map(item => (

                    <div
                        key={item._id}
                        className="checkout-item"
                    >

                        <span>

                            {item.name}

                        </span>

                        <span>

                            {item.quantity} x Rp {item.price.toLocaleString("id-ID")}

                        </span>

                    </div>

                ))
            }

            <hr />

            <h2>

                Total :

                Rp {total.toLocaleString("id-ID")}

            </h2>

            <button
                className="place-order-btn"
                onClick={handleCheckout}
            >

                Place Order

            </button>

        </div>

    );

}

export default Checkout;