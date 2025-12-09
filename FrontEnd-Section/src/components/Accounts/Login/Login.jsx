import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useState } from "react";
import "./Login.css";

const LOGIN = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const HandleSubmit = async () => {
    const value = { email, password };
    try {
      const url = "http://localhost:3001/api/auth/login";
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // credentials: true,
        body: JSON.stringify(value),
      });
      const data = res.json();
      if (!res.ok) {
        toast.error(data.message);
      } else {
        navigate("/dashboard");
      }
    } catch (error) {
      toast.error(error);
    }
  };
  return (
    <div className="auth-container login">
      <div className="auth-card">
        <h2 className="auth-title">Welcome Back 👋</h2>
        <p className="auth-subtitle">Login to continue to NoteVault</p>

        <form className="auth-form" onClick={() => HandleSubmit()}>
          <div className="input-group">
            <FaEnvelope className="icon" />
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <FaLock className="icon" />
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="auth-btn">
            Login
          </button>
        </form>

        <p className="auth-footer">
          Don’t have an account?{" "}
          <Link to="/signup" className="auth-link">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LOGIN;
