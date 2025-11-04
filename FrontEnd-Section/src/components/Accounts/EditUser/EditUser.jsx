import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { toast } from "react-toastify";
import { useState } from "react";
import "./EditUser.css";

const EditUser = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();
    const id = 1;
    const value = {
      username,
      email,
      password,
    };
    try {
      const url = `http://localhost:3001/api/auth/register/${id}`;
      const res = await fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value)
      });
      console.log(value)
      toast.success("User information updated successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Failed to update user information.");
    }
  };

  return (
    <div className="edit-user-container">
      <div className="edit-user-card">
        <h2 className="edit-user-title">Edit Profile</h2>
        <p className="edit-user-subtitle">Update your personal information</p>

        <form className="edit-user-form" onSubmit={(e) => handleUpdate(e)}>
          <div className="input-group">
            <FaUser className="icon" />
            <input
              type="text"
              placeholder="Full Name"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>

          <div className="input-group">
            <FaEnvelope className="icon" />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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

          <button className="update-btn" type="submit">
            Update Info
          </button>
        </form>

        <div className="edit-user-footer">
          <p>
            Go back to <a href="/dashboard">Dashboard</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EditUser;
