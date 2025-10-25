import { ThemeContext } from "../../context/ThemeContext";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import { Link } from "react-router-dom"
import "./NavBar.css";
import {
  FaRegStickyNote,
  FaUserCircle,
  FaMoon,
  FaSun,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const NavBar = ({ user, onLogout }) => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

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
      <div className="nav-left" onClick={() => navigate('/')}>
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

        <div className="user-box" onClick={() => navigate('/signup')}>
          <FaUserCircle className="user-icon" />
          <span>{user?.name || "Guest"}</span>
        </div>

        <button className="logout" onClick={() =>{ onLogout , navigate('/login')}}>
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
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/dashboard" onClick={() => setMenuOpen(false)}>Dashboard</Link>
            <Link to="/create" onClick={() => setMenuOpen(false)}>Create Note</Link>
            <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavBar;
