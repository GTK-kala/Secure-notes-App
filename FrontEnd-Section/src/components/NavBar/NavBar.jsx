import { useState, useContext } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaRegStickyNote,
  FaUserCircle,
  FaMoon,
  FaSun,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { ThemeContext } from "../../context/ThemeContext";
import { Link } from "react-router-dom"
import "./NavBar.css";

const NavBar = ({ user, onLogout }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const menuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 120 },
    },
    exit: { opacity: 0, y: -20, transition: { duration: 0.2 } },
  };

  return (
    <nav className={`navbar ${theme}`}>
      {/* Left Section */}
      <div className="nav-left">
        <FaRegStickyNote className="logo" />
        <h2 className="nav-title">NoteVault</h2>
      </div>

      {/* Desktop Links */}
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/create">Create Note</Link>
        <Link to="/about">About</Link>
      </div>

      {/* Right Section */}
      <div className="nav-right">
        <button className="theme-btn" onClick={toggleTheme}>
          {theme === "light" ? <FaMoon /> : <FaSun />}
        </button>

        <div className="user-box">
          <FaUserCircle className="user-icon" />
          <span>{user?.name || "Guest"}</span>
        </div>

        <button className="logout" onClick={onLogout}>
          Logout
        </button>

        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className={`mobile-menu ${theme}`}
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
          >
            <a href="/" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="/dashboard" onClick={() => setMenuOpen(false)}>Dashboard</a>
            <a href="/create" onClick={() => setMenuOpen(false)}>Create Note</a>
            <a href="/about" onClick={() => setMenuOpen(false)}>About</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
