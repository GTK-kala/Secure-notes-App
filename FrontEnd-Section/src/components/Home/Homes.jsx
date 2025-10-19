import { FaStickyNote, FaCloudUploadAlt, FaLock, FaSyncAlt } from "react-icons/fa";
import { useEffect } from "react";
import "./Home.css";

const Homes = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-text">
          <h1 className="fade-in-up">
            Welcome to <span>NoteVault</span>
          </h1>
          <p className="fade-in-up delay-1">
            Organize, secure, and access your notes from anywhere.
            <br />
            Experience simplicity and speed with our cloud-based note system.
          </p>
          <button className="cta-btn fade-in-up delay-2">
            + Create Your First Note
          </button>
        </div>
        <div className="hero-illustration fade-in-right">
          <img
            src="../../assets/note.png"
            alt="Notes Illustration"
          />
        </div>
      </section>

      {/* Feature Section */}
      <section className="features-section fade-in">
        <h2>Why Choose <span>NoteVault?</span></h2>
        <div className="features-grid">
          <div className="feature-card slide-up">
            <FaStickyNote className="feature-icon" />
            <h3>Organize Notes</h3>
            <p>Keep all your notes categorized, tagged, and easily searchable.</p>
          </div>

          <div className="feature-card slide-up delay-1">
            <FaCloudUploadAlt className="feature-icon" />
            <h3>Cloud Backup</h3>
            <p>Sync your notes securely in real-time across all your devices.</p>
          </div>

          <div className="feature-card slide-up delay-2">
            <FaLock className="feature-icon" />
            <h3>Encrypted & Private</h3>
            <p>Every note is protected with AES-256 encryption and JWT auth.</p>
          </div>

          <div className="feature-card slide-up delay-3">
            <FaSyncAlt className="feature-icon" />
            <h3>Auto Sync</h3>
            <p>Update once — changes reflect instantly everywhere.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homes;
