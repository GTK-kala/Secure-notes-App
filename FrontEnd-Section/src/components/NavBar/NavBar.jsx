import { ThemeContext } from "../../context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import { useState, useContext } from "react";
import { FaRegStickyNote, FaUserCircle, FaBars, FaTimes } from "react-icons/fa";

const NavBar = ({ user, onLogout }) => {
  const { HandleToggleFun } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const links = [
    { label: "Home", to: "/" },
    { label: "Dashboard", to: "/dashboard" },
    { label: "Create Note", to: "/create" },
    { label: "About", to: "/about" },
  ];

  return (
    <nav className="sticky top-3 z-40 mx-3 sm:mx-4 lg:mx-6">
      <div className="bg-bg rounded-[28px] shadow-clay border border-white/60 px-4 sm:px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <div
          className="flex items-center gap-2.5 cursor-pointer select-none"
          onClick={() => navigate("/")}
        >
          <div className="w-10 h-10 rounded-2xl bg-accent shadow-clay-accent flex items-center justify-center">
            <FaRegStickyNote className="text-white text-lg" />
          </div>
          <h2 className="text-primary font-extrabold text-lg tracking-tight hidden sm:block">
            NoteVault
          </h2>
        </div>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-2">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-4 py-2 rounded-2xl text-sm font-semibold text-primary/70 hover:text-primary hover:bg-tertiary/50 hover:shadow-clay-sm transition-all"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Right */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={HandleToggleFun}
            aria-label="Toggle sidebar"
            className="hidden md:flex items-center justify-center w-10 h-10 rounded-2xl bg-bg text-secondary shadow-clay-sm active:shadow-clay-inset transition-all"
          >
            <FaBars />
          </button>

          <div
            className="flex items-center gap-2 cursor-pointer px-2 py-1.5 rounded-2xl hover:bg-tertiary/40 transition-colors"
            onClick={() => navigate("/signup")}
          >
            <FaUserCircle className="text-2xl text-secondary" />
            <span className="hidden sm:inline text-sm font-semibold text-primary">
              {user?.name || "Guest"}
            </span>
          </div>

          <button
            className="hidden sm:inline-flex px-4 py-2.5 rounded-2xl bg-accent text-white text-sm font-bold shadow-clay-accent active:shadow-clay-inset transition-all"
            onClick={() => {
              onLogout && onLogout();
              navigate("/login");
            }}
          >
            Logout
          </button>

          <div
            className="lg:hidden w-10 h-10 rounded-2xl bg-bg shadow-clay-sm flex items-center justify-center text-primary text-lg cursor-pointer active:shadow-clay-inset"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden mt-3 bg-bg rounded-[28px] shadow-clay border border-white/60 px-4 py-4 flex flex-col gap-1"
          >
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setMenuOpen(false)}
                className="text-primary/80 hover:text-primary font-semibold py-2.5 px-3 rounded-2xl hover:bg-tertiary/50 transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <button
              className="mt-2 px-4 py-2.5 rounded-2xl bg-accent text-white text-sm font-bold shadow-clay-accent active:shadow-clay-inset"
              onClick={() => {
                onLogout && onLogout();
                setMenuOpen(false);
                navigate("/login");
              }}
            >
              Logout
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
