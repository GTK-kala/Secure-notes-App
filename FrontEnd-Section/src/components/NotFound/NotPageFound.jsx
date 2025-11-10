import { FaExclamationTriangle ,FaHome } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./NotPageFound.css";

const NotPageFound = () => {
  const navigate = useNavigate();

  return (
    <div className="notfound-container">
      <div className="notfound-card">
        <FaExclamationTriangle className="notfound-icon" />
        <h1 className="notfound-title">404 - Page Not Found</h1>
        <p className="notfound-message">
          Oops! The page you’re looking for doesn’t exist or may have been
          moved.
        </p>
        <button onClick={() => navigate("/")} className="notfound-btn">
          <FaHome /> Back to Home
        </button>
      </div>
    </div>
  );
};

export default NotPageFound;
