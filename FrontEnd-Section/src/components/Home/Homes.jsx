import { FaStickyNote, FaCloudUploadAlt, FaLock, FaSyncAlt } from "react-icons/fa";
import "./Home.css";

const Homes = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>Welcome to <span>NoteVault</span></h1>
          <p>
            Your personal cloud-based notes app — organize, pin, and secure your ideas 
            effortlessly from any device.
          </p>
          <button className="cta-btn">Create Your First Note</button>
        </div>
        <div className="hero-image">
          <img src="https://cdn.dribbble.com/users/595/screenshots/14635754/media/8b1d8ea181f0f7c8b7a5ad24688920d4.png" alt="Notes Illustration" />
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <h2>Why Choose <span>NoteVault?</span></h2>
        <div className="feature-grid">
          <div className="feature-card">
            <FaStickyNote className="feature-icon" />
            <h3>Organize Notes</h3>
            <p>Keep all your notes structured and searchable with tags and pinning.</p>
          </div>

          <div className="feature-card">
            <FaCloudUploadAlt className="feature-icon" />
            <h3>Cloud Storage</h3>
            <p>Access your notes anytime, anywhere securely stored in the cloud.</p>
          </div>

          <div className="feature-card">
            <FaLock className="feature-icon" />
            <h3>Secure & Private</h3>
            <p>Your data is protected with encryption and authentication layers.</p>
          </div>

          <div className="feature-card">
            <FaSyncAlt className="feature-icon" />
            <h3>Auto Sync</h3>
            <p>Real-time sync between all your devices for smooth workflow.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homes;
