import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";

import "../styles/ProductCard.css";

function ProductCard({ product }) {

    return (

        <div className="product-card">

            <div className="image-wrapper">

                <img
                    src={
                        product.image
                            ? `http://localhost:5000/${(product.image)}`
                            : "https://via.placeholder.com/500x500"
                    }
                    alt={product.name}
                    className="product-image"
                />

                <button className="favorite-btn">
                    <FaHeart />
                </button>

            </div>

            <div className="product-content">

                <h3 className="product-name">
                    {product.name}
                </h3>

                <p className="product-description">
                    {product.description}
                </p>

                <div className="product-footer">

                    <span className="product-price">
                        Rp {product.price.toLocaleString("id-ID")}
                    </span>

                    <Link
                        to={`/products/${product._id}`}
                        className="detail-button"
                    >
                        Detail
                    </Link>

                </div>

            </div>

        </div>

    );

}

export default ProductCard;