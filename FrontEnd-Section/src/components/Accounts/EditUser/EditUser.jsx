import { FaUserEdit, FaEnvelope, FaLock, FaSave } from "react-icons/fa";
import { useEffect, useState } from "react";
import "./EditUser.css";

const EditUser = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const userId = 1;

  // Fetch user data
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch(`http://localhost:3001/api/auth/register/${userId}`);
        const data = await res.json();
        setUser({
          name: data.name || "",
          email: data.email || "",
          password: "",
        });
      } catch (error) {
        console.error("Error fetching user:", error);
      }
    };
    fetchUser();
  }, [userId]);

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3001/api/auth/register/${userId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
      if (res.ok) {
        alert("User info updated successfully!");
      } else {
        alert("Failed to update user info");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="edit-user-page">
      <div className="edit-user-card">
        <h2 className="edit-user-title">
          <FaUserEdit className="icon" /> Edit Your Info
        </h2>

        <form onSubmit={handleSubmit} className="edit-user-form">
          {/* Name */}
          <div className="form-group">
            <label>Name</label>
            <div className="input-wrapper">
              <FaUserEdit className="input-icon" />
              <input
                type="text"
                value={user.name}
                onChange={(e) => setUser({ ...user, name: e.target.value })}
                placeholder="Enter your name"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div className="form-group">
            <label>Email</label>
            <div className="input-wrapper">
              <FaEnvelope className="input-icon" />
              <input
                type="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          {/* Password */}
          <div className="form-group">
            <label>Password</label>
            <div className="input-wrapper">
              <FaLock className="input-icon" />
              <input
                type="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder="Enter new password (optional)"
              />
            </div>
          </div>

          {/* Submit */}
          <button type="submit" className="save-btn">
            <FaSave /> Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
