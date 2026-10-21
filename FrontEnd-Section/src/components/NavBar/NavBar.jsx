import { ThemeContext } from "../../context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, Link } from "react-router-dom";
import { useState, useContext } from "react";
import {
  FaRegStickyNote,
  FaUserCircle,
  FaBars,
  FaTimes,
  FaMoon,
  FaSun,
  FaSignInAlt,
  FaUserPlus,
} from "react-icons/fa";

const NavBar = ({ user, onLogout }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const links = [
    { label: "Dashboard", to: "/dashboard" },
    { label: "Create Note", to: "/create" },
    { label: "About", to: "/about" },
  ];

  return (
    <nav className="sticky top-3 z-40 mx-3 sm:mx-4 lg:mx-6">
      <div className="bg-bg dark:bg-card-dark rounded-[28px] shadow-clay dark:shadow-[8px_8px_20px_rgba(0,0,0,0.4),-8px_-8px_20px_rgba(255,255,255,0.05)] border border-white/60 dark:border-white/5 px-4 sm:px-6 h-16 flex items-center justify-between transition-colors duration-300">
        {/* Brand */}
        <div
          className="flex items-center gap-2.5 cursor-pointer select-none"
          onClick={() => navigate("/")}
        >
          <div className="w-10 h-10 rounded-2xl bg-accent shadow-clay-accent flex items-center justify-center">
            <FaRegStickyNote className="text-white text-lg" />
          </div>
          <h2 className="text-primary dark:text-bg font-extrabold text-lg tracking-tight hidden sm:block">
            NoteVault
          </h2>
        </div>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-2">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="px-4 py-2 rounded-2xl text-sm font-semibold text-primary/70 dark:text-bg/70 hover:text-primary dark:hover:text-bg hover:bg-tertiary/50 dark:hover:bg-tertiary/20 transition-all"
            >
              {l.label}
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-2.5">
          {/* Dark/Light Mode Icon */}
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-10 h-10 rounded-2xl bg-bg dark:bg-bg-dark text-primary dark:text-bg shadow-clay-sm dark:shadow-[inset_4px_4px_10px_rgba(0,0,0,0.3)] active:shadow-clay-inset transition-all"
          >
            {theme === "dark" ? (
              <FaSun className="text-accent" />
            ) : (
              <FaMoon className="text-primary/70" />
            )}
          </button>

          {/* Desktop User Icon */}
          <div
            className="hidden sm:flex items-center gap-2 cursor-pointer px-2 py-1.5 rounded-2xl hover:bg-tertiary/40 dark:hover:bg-tertiary/20 transition-colors"
            onClick={() => navigate("/signup")}
          >
            <FaUserCircle className="text-2xl text-secondary" />
            <span className="text-sm font-semibold text-primary dark:text-bg">
              {user?.name || "Login"}
            </span>
          </div>

          {/* Desktop Logout */}
          <button
            className="hidden sm:inline-flex px-4 py-2.5 rounded-2xl bg-accent text-white text-sm font-bold shadow-clay-accent active:shadow-clay-inset transition-all"
            onClick={() => {
              onLogout && onLogout();
              navigate("/login");
            }}
          >
            Logout
          </button>

          {/* Mobile Menu Toggle (Burger) */}
          <div
            className="lg:hidden w-10 h-10 rounded-2xl bg-bg dark:bg-bg-dark shadow-clay-sm flex items-center justify-center text-primary dark:text-bg text-lg cursor-pointer active:shadow-clay-inset"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden mt-3 bg-bg dark:bg-card-dark rounded-[28px] shadow-clay dark:shadow-[8px_8px_20px_rgba(0,0,0,0.4)] border border-white/60 dark:border-white/5 px-4 py-4 flex flex-col gap-1 absolute top-full left-0 right-0 mx-3 sm:mx-4 transition-colors duration-300"
          >
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setMenuOpen(false)}
                className="text-primary/80 dark:text-bg/80 hover:text-primary dark:hover:text-bg font-semibold py-2.5 px-3 rounded-2xl hover:bg-tertiary/50 dark:hover:bg-tertiary/20 transition-colors"
              >
                {l.label}
              </Link>
            ))}

            <div className="h-px w-full bg-tertiary/50 dark:bg-tertiary/20 my-2"></div>

            <Link
              to="/login"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 text-primary/80 dark:text-bg/80 hover:text-primary dark:hover:text-bg font-semibold py-2.5 px-3 rounded-2xl hover:bg-tertiary/50 dark:hover:bg-tertiary/20 transition-colors"
            >
              <FaSignInAlt className="text-accent" /> Login
            </Link>
            <Link
              to="/signup"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 text-primary/80 dark:text-bg/80 hover:text-primary dark:hover:text-bg font-semibold py-2.5 px-3 rounded-2xl hover:bg-tertiary/50 dark:hover:bg-tertiary/20 transition-colors"
            >
              <FaUserPlus className="text-accent" /> Sign Up
            </Link>

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
