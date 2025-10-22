import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./Login.css";

const LOGIN = () => {
  return (
    <div className="auth-container login">
      <div className="auth-card">
        <h2 className="auth-title">Welcome Back 👋</h2>
        <p className="auth-subtitle">Login to continue to NoteVault</p>

        <form className="auth-form">
          <div className="input-group">
            <FaEnvelope className="icon" />
            <input type="email" placeholder="Email" required />
          </div>

          <div className="input-group">
            <FaLock className="icon" />
            <input type="password" placeholder="Password" required />
          </div>

          <button type="submit" className="auth-btn">Login</button>
        </form>

        <p className="auth-footer">
          Don’t have an account?{" "}
          <Link to="/signup" className="auth-link">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default LOGIN;
