import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";
import "../styles/login.css";

function Login() {

    const navigate = useNavigate();
    const { login } = useContext(AuthContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {

        e.preventDefault();

        try {

            const response = await api.post("/auth/login", {
                email,
                password
                });

            login(
                response.data.user,
                response.data.token
            );

            alert("Login berhasil!");

            navigate("/products");

        } catch (error) {

            alert(error.response?.data?.message || "Login failure.");

        }

    };

    return (

        <div className="login-page">

            <div className="login-box">

                <span className="subtitle">

                    BIONShop

                </span>

                <h1>Welcome Back</h1>

                <p>Sign in to continue shopping.</p>

                <form onSubmit={handleLogin}>

                    <label>Email Address</label>

                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />

                    <label>Password</label>

                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <button type="submit">

                        Login

                    </button>

                </form>

                <p style={{ marginTop: "80px" }}>

                    Don't have an account?

                    <Link to="/register">

                        Register

                    </Link>

                </p>

            </div>

        </div>

    );

}

export default Login;