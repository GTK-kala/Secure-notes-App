import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useState } from "react";

const SignUp = () => {
  const navigate = useNavigate();
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const HandelSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3001/api/auth/register", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ username, email, password }),
      });
      const data = await res.json();
      if (!res.ok) toast.error(data.message);
      else {
        toast.success(data.message);
        navigate("/login");
      }
    } catch {
      toast.error("failed to create account !!!");
    }
    setEmail("");
    setName("");
    setPassword("");
  };

  return (
    <div className="min-h-[70vh] flex justify-center items-center px-4 py-10">
      <div className="w-full max-w-md bg-bg dark:bg-card-dark rounded-[40px] p-7 sm:p-10 shadow-clay-lg dark:shadow-[14px_14px_32px_rgba(0,0,0,0.4)] border border-white/60 dark:border-white/5 anim-fade-up transition-colors duration-300">
        <div className="w-16 h-16 mx-auto rounded-3xl bg-tertiary/60 dark:bg-tertiary/20 shadow-clay-sm flex items-center justify-center text-2xl mb-4">
          ✨
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-primary dark:text-bg">
          Create Account
        </h2>
        <p className="text-center text-primary/55 dark:text-bg/55 text-sm mt-2 mb-8">
          Join <span className="font-bold text-accent">NoteVault</span> and
          start organizing smartly
        </p>

        <form className="space-y-5" onSubmit={HandelSubmit}>
          <div className="relative">
            <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary text-sm z-10" />
            <input
              type="text"
              placeholder="Full Name"
              required
              value={username}
              onChange={(e) => setName(e.target.value)}
              className="clay-input w-full pl-11 pr-4 py-3.5 text-sm"
            />
          </div>
          <div className="relative">
            <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary text-sm z-10" />
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="clay-input w-full pl-11 pr-4 py-3.5 text-sm"
            />
          </div>
          <div className="relative">
            <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary text-sm z-10" />
            <input
              type="password"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="clay-input w-full pl-11 pr-4 py-3.5 text-sm"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-accent hover:bg-accent/95 text-white py-3.5 rounded-2xl font-bold text-sm shadow-clay-accent active:shadow-clay-inset transition-all"
          >
            Sign Up
          </button>
        </form>

        <p className="text-center text-primary/55 dark:text-bg/55 text-sm mt-7">
          Already have an account?{" "}
          <Link to="/login" className="text-accent font-bold hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
