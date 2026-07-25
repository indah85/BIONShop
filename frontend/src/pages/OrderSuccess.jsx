import { Link } from "react-router-dom";
import "../styles/OrderSuccess.css";

function OrderSuccess() {

    return (

        <div className="success-page">

            <div className="success-card">

                <div className="success-icon">
                    ✅
                </div>

                <h1>Order Successful!</h1>

                <p>

                    Thank you for shopping at <strong>BIONShop</strong>.

                    <br />

                    Your order has been placed successfully.

                </p>

                <Link
                    to="/products"
                    className="continue-btn"
                >

                    Continue Shopping

                </Link>

            </div>

        </div>

    );

}

export default OrderSuccess;