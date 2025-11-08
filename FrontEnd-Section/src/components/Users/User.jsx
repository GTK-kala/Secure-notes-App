import {
  FaUsers,
  FaCalendarAlt,
  FaEnvelope,
  FaStickyNote,
  FaPen,
} from "react-icons/fa";
import { ThemeContext } from "../../context/ThemeContext";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./User.css";

const User = () => {
  const { HandleUserId } = useContext(ThemeContext);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("http://localhost:3001/api/auth/register/all");
        const data = await res.json();
        const Data = data.result;
        setUsers(Data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="users-page">
      <div className="users-header">
        <FaUsers className="icon" />
        <h2>All Users</h2>
      </div>

      <div className="users-grid">
        {users.length === 0 ? (
          <p className="no-users">No users found 👥</p>
        ) : (
          users.map((user) => (
            <div key={user.id} className="user-card">
              <div className="user-header">
                <h3 cl>{user.username}</h3>
                <h3 className="user-icons">
                  <span onClick={() => navigate('/some-notes')}>
                    <FaStickyNote className="icon-small note" />
                  </span>
                  <span
                    onClick={() => {
                      HandleUserId(user.id), navigate(`/edit-user/${user.id}`);
                    }}
                  >
                    <FaPen className="icon-small edit" />
                  </span>
                </h3>
              </div>
              <div className="user-body">
                <p>
                  <FaEnvelope className="icon-small" /> {user.email}
                </p>
              </div>
              <div className="user-footer">
                <FaCalendarAlt className="icon-small" />
                <small>
                  Joined:{" "}
                  {new Date(user.created_at).toLocaleDateString("en-GB")}
                </small>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default User;
