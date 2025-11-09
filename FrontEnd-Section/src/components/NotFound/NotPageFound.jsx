import { useNavigate } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import "./NotPageFound.css";

const NotPageFound = () => {
    const navigate = useNavigate();
    
  return (
    <div className="nf-wrapper">
      <div className="nf-bg">
        <div className="nf-bg-circle nf-bg-circle1"></div>
        <div className="nf-bg-circle nf-bg-circle2"></div>
        <div className="nf-bg-circle nf-bg-circle3"></div>
      </div>

      <div className="nf-card">
        <h1 className="nf-code">404</h1>
        <h2 className="nf-title">Page Not Found</h2>
        <p className="nf-text">
          Sorry, the page you’re looking for doesn’t exist or has been moved.
        </p>
        <button className="nf-btn" onClick={() => navigate("/")}>
          <FaHome /> Go Home
        </button>
      </div>
    </div>
  )
}

export default NotPageFound