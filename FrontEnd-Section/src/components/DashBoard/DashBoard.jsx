import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
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
    const res = await fetch("http://localhost:3001/api/notes/all");
    const data = await res.json();
    const Data = data.result || [];
    setNotes(Data);
    setCountActive(Data.filter((n) => n.pinned === 1).length);
    setCountPinned(Data.filter((n) => n.pinned === 0).length);
  };

  const FetchUsersData = async () => {
    const res = await fetch("http://localhost:3001/api/auth/register/all");
    const data = await res.json();
    setUsers(data.result || []);
  };

  const IsLogIn = async () => {
    try {
      const res = await fetch("http://localhost:3001/api/auth/verify", {
        method: "GET",
        headers: { "content-type": "application/json" },
        credentials: "include",
      });
      if (!res.ok) toast.error("Error");
      else {
        await res.json();
        setLogin(true);
      }
    } catch {
      toast.error("Error");
    }
  };

  const cards = [
    { icon: <FaStickyNote />, title: "Total Notes", count: notes.length },
    { icon: <FaTasks />, title: "Active Tasks", count: countActive },
    { icon: <FaClock />, title: "Pending", count: countPinned },
    { icon: <FaUser />, title: "Profile Views", count: users.length },
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
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="py-4"
        >
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="w-12 h-12 rounded-2xl bg-accent shadow-clay-accent flex items-center justify-center">
              <FaTachometerAlt className="text-white text-xl" />
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-primary dark:text-bg">
              Dashboard Overview
            </h1>
          </div>
          <p className="text-center text-primary/55 dark:text-bg/55 text-sm mb-10">
            Welcome back! Here's your quick summary.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map((card, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03, y: -4 }}
                transition={{ duration: 0.25 }}
                className="bg-bg dark:bg-card-dark rounded-clay p-6 shadow-clay dark:shadow-[8px_8px_20px_rgba(0,0,0,0.4)] border border-white/60 dark:border-white/5 hover:shadow-clay-lg transition-all"
              >
                <div className="w-14 h-14 rounded-2xl bg-tertiary/60 dark:bg-tertiary/20 shadow-clay-sm flex items-center justify-center text-2xl text-accent mb-4">
                  {card.icon}
                </div>
                <h2 className="text-sm text-primary/55 dark:text-bg/55 font-semibold">
                  {card.title}
                </h2>
                <p className="text-3xl font-extrabold text-primary dark:text-bg mt-1">
                  {card.count}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-center text-primary/55 dark:text-bg/55 text-sm mt-10"
          >
            ✨ Keep up the great work — your notes are well organized!
          </motion.p>
        </motion.div>
      ) : (
        <div className="max-w-lg mx-auto mt-12 bg-bg dark:bg-card-dark rounded-[40px] p-8 sm:p-10 text-center shadow-clay-lg dark:shadow-[14px_14px_32px_rgba(0,0,0,0.4)] border border-white/60 dark:border-white/5 anim-fade-up transition-colors duration-300">
          <div className="w-20 h-20 mx-auto rounded-3xl bg-tertiary/60 dark:bg-tertiary/20 shadow-clay-sm flex items-center justify-center text-4xl mb-4 anim-bob">
            ⚠️
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-accent mb-2">
            Please Login First
          </h2>
          <p className="text-primary/55 dark:text-bg/55 text-sm leading-relaxed mb-8">
            You need to be logged in to access this content. Please login or
            create an account to continue.
          </p>
          <button
            onClick={() => navigate("/login")}
            className="w-full sm:w-auto px-8 py-3.5 rounded-2xl bg-accent text-white font-bold shadow-clay-accent active:shadow-clay-inset transition-all"
          >
            Login
          </button>
          <div className="flex items-center justify-center gap-3 mt-5 text-sm">
            <a
              className="text-secondary dark:text-tertiary font-semibold cursor-pointer hover:underline"
              onClick={() => navigate("/signup")}
            >
              Create Account
            </a>
            <span className="text-primary/30 dark:text-bg/30">|</span>
            <a
              href="/forgot-password"
              className="text-primary/50 dark:text-bg/50 hover:underline"
            >
              Forgot Password?
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default DashBoard;
