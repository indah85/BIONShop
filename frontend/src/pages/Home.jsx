import { Link } from "react-router-dom";
import "../styles/home.css";
import heroImage from "../assets/images/hero.jpg";

function Home() {
    return (
        <section
    className="hero"
    style={{
        backgroundImage: `url(${heroImage})`
    }}
>
    <div className="hero-overlay">

        <h1>Premium Collection 2026</h1>

        <p>
            Temukan produk terbaik dengan kualitas premium.
        </p>

        <Link to="/products">
            <button>Shop Now</button>
        </Link>

    </div>
</section>
    );
}

export default Home;