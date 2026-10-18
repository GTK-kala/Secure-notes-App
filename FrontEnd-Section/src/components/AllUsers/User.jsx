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

const User = () => {
  const { HandleUserId, HandleFetchData } = useContext(ThemeContext);
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("http://localhost:3001/api/auth/register/all");
        const data = await res.json();
        setUsers(data.result || []);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div className="py-4">
      <div className="flex justify-center items-center gap-3 mb-8 anim-fade-up">
        <div className="w-12 h-12 rounded-2xl bg-accent shadow-clay-accent flex items-center justify-center">
          <FaUsers className="text-white text-xl" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-primary">
          All Users
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {users.length === 0 ? (
          <p className="text-center col-span-full text-primary/55 py-12">
            No users found 👥
          </p>
        ) : (
          users.map((user) => (
            <div
              key={user.id}
              className="bg-bg rounded-clay p-6 shadow-clay border border-white/60 hover:shadow-clay-lg hover:-translate-y-1 transition-all anim-fade-up"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="w-12 h-12 rounded-2xl bg-tertiary/60 shadow-clay-sm flex items-center justify-center text-secondary font-extrabold text-lg">
                  {user.username?.[0]?.toUpperCase() || "U"}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      HandleUserId(user.id);
                      navigate(`/some-notes/${user.id}`);
                      HandleFetchData(user.id);
                    }}
                    className="w-9 h-9 rounded-xl bg-bg shadow-clay-sm active:shadow-clay-inset flex items-center justify-center text-secondary hover:text-accent transition-all"
                    title="View notes"
                  >
                    <FaStickyNote className="text-sm" />
                  </button>
                  <button
                    onClick={() => {
                      HandleUserId(user.id);
                      navigate(`/edit-user/${user.id}`);
                    }}
                    className="w-9 h-9 rounded-xl bg-bg shadow-clay-sm active:shadow-clay-inset flex items-center justify-center text-secondary hover:text-accent transition-all"
                    title="Edit user"
                  >
                    <FaPen className="text-sm" />
                  </button>
                </div>
              </div>

              <h3 className="font-bold text-primary text-lg mb-2 truncate">
                {user.username}
              </h3>
              <p className="flex items-center gap-2 text-sm text-primary/60 mb-3 truncate">
                <FaEnvelope className="text-secondary flex-shrink-0" />
                <span className="truncate">{user.email}</span>
              </p>
              <p className="flex items-center gap-2 text-xs text-primary/45 font-medium">
                <FaCalendarAlt className="text-secondary" />
                Joined: {new Date(user.created_at).toLocaleDateString("en-GB")}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default User;
