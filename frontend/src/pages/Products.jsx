import { useEffect, useState } from "react";
import api from "../services/api";
import ProductCard from "../components/ProductCard";
import "../styles/Products.css";

function Products() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        api.get("/products")
            .then((response) => {
                setProducts(response.data);
            });
    }, []);

    return (

        <section className="products-page">

            <div className="products-header">

                <p className="subtitle">
                    BIONSHOP COLLECTION
                </p>

                <h1>Discover Our Products</h1>

                <p className="description">
                    Temukan berbagai produk pilihan dengan kualitas terbaik.
                </p>

            </div>

            <div className="product-grid">

                {products.map((product) => (

                    <ProductCard
                        key={product._id}
                        product={product}
                    />

                ))}

            </div>

        </section>

    );

}

export default Products;