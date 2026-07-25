import { useEffect, useState, useContext} from "react";
import {CartContext} from "../context/CartContext";
import { Link, useParams } from "react-router-dom";
import api from "../services/api"; 
import "../styles/ProductDetail.css";

function ProductDetail() {

    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const {addToCart} = useContext(CartContext);



    useEffect(() => {

        api.get(`/products/${id}`)
            .then((response) => {
                setProduct(response.data);
            });

    }, [id]);

    if (!product) {
        return <h2>Loading...</h2>;
    }

    return (

        <div className="product-detail">

            <Link to="/products" className="back-link">
                ← Back to Products
            </Link>

            <div className="detail-wrapper">

                <div className="detail-image">

                    <img
                    src={
                        product.image
                            ? `http://localhost:5000/${(product.image)}`
                            : "https://via.placeholder.com/500x500"
                    }
                    alt={product.name}
                    className="product-image"
                />

                </div>

                <div className="detail-info">

                    <h1>{product.name}</h1>

                    <div className="rating">
                        ⭐⭐⭐⭐⭐ 4.9
                    </div>

                    <div className="price">
                        Rp {product.price.toLocaleString("id-ID")}
                    </div>

                    <p className="short-description">
                        {product.description}
                    </p>

                    <ul className="feature-list">
                        <li>✔ Original Product</li>
                        <li>✔ Garansi Resmi</li>
                        <li>✔ Free Ongkir</li>
                    </ul>

                    <div className="button-group">

                        <button
                            className="buy-button"
                            onClick={() => {
                                addToCart(product);
                                alert("Produk berhasil ditambahkan ke keranjang.");
                            }}
                        >
                        🛒 Add To Cart
                        </button>

                        <button className="favorite-button">
                            ♡ Favorit
                        </button>

                    </div>

                </div>

            </div>

            <div className="description-section">

                <h2>Deskripsi Produk</h2>

                <p>
                    {product.description}
                </p>

            </div>

        </div>

    );

}

export default ProductDetail;