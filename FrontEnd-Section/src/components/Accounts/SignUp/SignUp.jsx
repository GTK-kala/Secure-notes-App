import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="auth-containers">
      <div className="auth-cards">
        <h2 className="auth-titles">Create Account ✨</h2>
        <p className="auth-subtitles">Join NoteVault and start organizing smartly</p>

        <form className="auth-forms">
          <div className="input-groups">
            <FaUser className="icons" />
            <input type="text" placeholder="Full Name" required />
          </div>

          <div className="input-groups">
            <FaEnvelope className="icons" />
            <input type="email" placeholder="Email" required />
          </div>

          <div className="input-groups">
            <FaLock className="icons" />
            <input type="password" placeholder="Password" required />
          </div>

          <button type="submit" className="auth-btn">Sign Up</button>
        </form>

        <p className="auth-footers">
          Already have an account?{" "}
          <Link to="/login" className="auth-links">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
