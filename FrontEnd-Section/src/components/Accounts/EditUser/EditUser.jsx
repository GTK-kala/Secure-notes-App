import { useState } from "react";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import "./EditUser.css";

const EditUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUpdate = (e) => {
    e.preventDefault();
    console.log({ name, email, password });
  };

  return (
    <div className="edit-user-container">
      <div className="edit-user-card">
        <h2 className="edit-user-title">Edit Profile</h2>
        <p className="edit-user-subtitle">Update your personal information</p>

        <form className="edit-user-form" onSubmit={handleUpdate}>
          <div className="input-group">
            <FaUser className="icon" />
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <FaEnvelope className="icon" />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <FaLock className="icon" />
            <input
              type="password"
              placeholder="New Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="update-btn" type="submit">Update Info</button>
        </form>

        <div className="edit-user-footer">
          <p>Go back to <a href="/dashboard">Dashboard</a></p>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
