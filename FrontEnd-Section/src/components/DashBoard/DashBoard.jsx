import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import "./DashBoard.css";
import {
  FaStickyNote,
  FaTasks,
  FaClock,
  FaUser,
  FaTachometerAlt,
} from "react-icons/fa";

const DashBoard = () => {
  const navigate = useNavigate();
  const [notes, setNotes] = useState([]);
  const [users, setUsers] = useState([]);
  const [isLogin, setLogin] = useState(false);
  const [countActive, setCountActive] = useState(0);
  const [countPinned, setCountPinned] = useState(0);

  const FetchNotesData = async () => {
    const url = "http://localhost:3001/api/notes/all";
    const response = await fetch(url);
    const data = await response.json();
    const Data = data.result;
    if (!Data) {
      alert("No Notes on Database");
    }
    setNotes(Data);
    const value1 = Data.filter((note) => note.pinned === 1).length;
    const value2 = Data.filter((note) => note.pinned === 0).length;
    setCountActive(value1);
    setCountPinned(value2);
  };
  const FetchUsersData = async () => {
    const url = "http://localhost:3001/api/auth/register/all";
    const response = await fetch(url);
    const data = await response.json();
    const Data = data.result;
    if (!Data) {
      alert("No Notes on Database");
    }
    setUsers(Data);
  };

  const IsLogIn = async () => {
    try {
      const url = "http://localhost:3001/api/auth/verify";
      const res = await fetch(url, {
        method: "GET",
        headers: {
          "content-type": "application/json",
        },
        credentials: "include",
      });
      if (!res.ok) {
        toast.error("Error");
      } else {
        const data = await res.json();
        setLogin(true);
        console.log(data);
      }
    } catch (error) {
      toast.error("Error");
    }
  };

  const cards = [
    {
      icon: <FaStickyNote />,
      title: "Total Notes",
      count: notes.length,
      color: "#38bdf8",
    },
    {
      icon: <FaTasks />,
      title: "Active Tasks",
      count: countActive,
      color: "#22c55e",
    },
    {
      icon: <FaClock />,
      title: "Pending",
      count: countPinned,
      color: "#facc15",
    },
    {
      icon: <FaUser />,
      title: "Profile Views",
      count: users.length,
      color: "#a855f7",
    },
  ];

  useEffect(() => {
    IsLogIn();
    FetchNotesData();
    FetchUsersData();
  }, []);

  return (
    <>
      {isLogin ? (
        <motion.div
          className="dashboard-container"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="dashboard-title">
            <FaTachometerAlt className="icon" /> <span>Dashboard Overview</span>{" "}
          </h1>
          <p className="dashboard-subtitle">
            Welcome back! Here’s your quick summary.
          </p>

          <div className="dashboard-grid">
            {cards.map((card, index) => (
              <motion.div
                key={index}
                className="dashboard-card"
                style={{
                  borderTop: `4px solid ${card.color}`,
                  boxShadow: `0 6px 25px ${card.color}40`,
                }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="card-icon" style={{ color: card.color }}>
                  {card.icon}
                </div>
                <h2>{card.title}</h2>
                <p>{card.count}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="dashboard-footer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <p>✨ Keep up the great work — your notes are well organized!</p>
          </motion.div>
        </motion.div>
      ) : (
        <div className="loginPromptContainer">
          <div className="loginMessage">
            <span className="warningIcon">⚠️</span>
            <h2 className="title">Please Login First</h2>
            <p className="description">
              You need to be logged in to access this content. Please login or
              create an account to continue.
            </p>
          </div>

          <div className="actionSection">
            <button className="loginButton" onClick={() => navigate("/login")}>
              Login
            </button>

            <div className="alternativeActions">
              <a className="signupLink" onClick={() => navigate("/signup")}>
                Create Account
              </a>
              <span className="separator">|</span>
              <a href="/forgot-password" className="forgotLink">
                Forgot Password?
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DashBoard;
