import { motion } from "framer-motion";
import { FaStickyNote, FaTasks, FaClock, FaUser } from "react-icons/fa";
import "./DashBoard.css";

const DashBoard = () => {
  const cards = [
    { icon: <FaStickyNote />, title: "Total Notes", count: 24, color: "#38bdf8" },
    { icon: <FaTasks />, title: "Active Tasks", count: 8, color: "#22c55e" },
    { icon: <FaClock />, title: "Pending", count: 4, color: "#facc15" },
    { icon: <FaUser />, title: "Profile Views", count: 132, color: "#a855f7" },
  ];

  return (
    <motion.div
      className="dashboard-container"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h1 className="dashboard-title">📊 Dashboard Overview</h1>
      <p className="dashboard-subtitle">Welcome back! Here’s your quick summary.</p>

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
  );
};

export default DashBoard;
