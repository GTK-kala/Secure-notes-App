import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaDatabase, FaUserAlt } from "react-icons/fa";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <motion.div
        className="about-card"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="about-title">About Secure Notes</h1>
        <p className="about-subtitle">
          A modern, fast, and secure note-taking web app designed to keep your ideas safe and accessible — anytime, anywhere.
        </p>

        <div className="about-grid">
          <motion.div
            className="about-box"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <FaReact className="about-icon react" />
            <h3>Frontend</h3>
            <p>Built using <strong>React.js</strong> for a smooth and interactive user experience.</p>
          </motion.div>

          <motion.div
            className="about-box"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <FaNodeJs className="about-icon node" />
            <h3>Backend</h3>
            <p>Powered by <strong>Node.js</strong> and <strong>Express</strong> for fast, secure, and scalable APIs.</p>
          </motion.div>

          <motion.div
            className="about-box"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <FaDatabase className="about-icon db" />
            <h3>Database</h3>
            <p>Uses <strong>MySQL</strong> to store your notes safely and efficiently.</p>
          </motion.div>

          <motion.div
            className="about-box"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <FaUserAlt className="about-icon user" />
            <h3>Developer</h3>
            <p>Created by <strong>Khalid</strong> — a passionate full-stack web developer.</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
