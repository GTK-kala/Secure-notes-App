import { FaEnvelope, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useState } from "react";

const LOGIN = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const HandleSubmit = async (e) => {
    e.preventDefault();
    const value = { email, password };
    try {
      const res = await fetch("http://localhost:3001/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(value),
        credentials: "include",
      });
      const data = await res.json();
      if (!res.ok) toast.error(data.message);
      else navigate("/dashboard");
    } catch {
      toast.error("error");
    }
    setEmail("");
    setPassword("");
  };

  return (
    <div className="min-h-[70vh] flex justify-center items-center px-4 py-10">
      <div className="w-full max-w-md bg-bg rounded-[40px] p-7 sm:p-10 shadow-clay-lg border border-white/60 anim-fade-up">
        <div className="w-16 h-16 mx-auto rounded-3xl bg-tertiary/60 shadow-clay-sm flex items-center justify-center text-2xl mb-4">
          🔐
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-primary">
          Welcome Back 👋
        </h2>
        <p className="text-center text-primary/55 text-sm mt-2 mb-8">
          Login to continue to{" "}
          <span className="font-bold text-accent">NoteVault</span>
        </p>

        <form className="space-y-5" onSubmit={HandleSubmit}>
          <div className="relative">
            <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary text-sm z-10" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="clay-input w-full pl-11 pr-4 py-3.5 text-sm"
            />
          </div>

          <div className="relative">
            <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary text-sm z-10" />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="clay-input w-full pl-11 pr-4 py-3.5 text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-accent hover:bg-accent/95 text-white py-3.5 rounded-2xl font-bold text-sm shadow-clay-accent active:shadow-clay-inset transition-all"
          >
            Login
          </button>
        </form>

        <p className="text-center text-primary/55 text-sm mt-7">
          Don't have an account?{" "}
          <Link to="/signup" className="text-accent font-bold hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LOGIN;
