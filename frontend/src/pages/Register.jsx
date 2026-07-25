import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";
import "../styles/login.css";

function Register() {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleRegister = async (e) => {

        e.preventDefault();

        if (password !== confirmPassword) {
            alert("Password tidak sama.");
            return;
        }

        try {

            await api.post("/auth/register", {

                name,
                email,
                password

            });

            alert("Registrasi berhasil.");

            navigate("/login");

        } catch (error) {

            alert(error.response?.data?.message || "Terjadi kesalahan.");

        }

    };

    return (

        <div className="login-page">

            <div className="login-box">

                <span className="subtitle">

                    BIONShop

                </span>

                <h1>Create Account</h1>

                <p>Create your account to start shopping.</p>

                <form onSubmit={handleRegister}>

                    <label>Full Name</label>

                    <input
                        type="text"
                        placeholder="Enter your full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />

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
                        placeholder="Create a password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />

                    <label>Confirm Password</label>

                    <input
                        type="password"
                        placeholder="Confirm your password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />

                    <button type="submit">

                        Register

                    </button>

                </form>

                <p style={{ marginTop: "80px" }}>

                    Already have an account?

                    <Link to="/login">

                        Login

                    </Link>

                </p>

            </div>

        </div>

    );

}

export default Register;