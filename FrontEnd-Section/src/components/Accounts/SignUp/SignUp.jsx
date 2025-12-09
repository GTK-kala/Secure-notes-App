import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useState } from "react";
import "./SignUp.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const HandelSubmit = async (e) => {
    e.preventDefault();
    const url = "http://localhost:3001/api/auth/register";
    const value = {
      username,
      email,
      password,
    };
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(value),
      });
      const data = await res.json();
      if (!res.ok) {
        toast.error(data.message);
      } else {
        toast.success(data.message);
        // navigate("/dashboard");
      }
    } catch (error) {
      toast.error("failed to create account !!!");
    }
    console.log(value);
    setEmail("");
    setName("");
    setPassword("");
  };
  return (
    <div className="auth-containers">
      <div className="auth-cards">
        <h2 className="auth-titles">Create Account ✨</h2>
        <p className="auth-subtitles">
          Join NoteVault and start organizing smartly
        </p>

        <form className="auth-forms" onSubmit={(e) => HandelSubmit(e)}>
          <div className="input-groups">
            <FaUser className="icons" />
            <input
              type="text"
              placeholder="Full Name"
              required
              value={username}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="input-groups">
            <FaEnvelope className="icons" />
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="input-groups">
            <FaLock className="icons" />
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit" className="auth-btn">
            Sign Up
          </button>
        </form>

        <p className="auth-footers">
          Already have an account?{" "}
          <Link to="/login" className="auth-links">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
