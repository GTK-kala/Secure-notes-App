import { ThemeContext } from "../../context/ThemeContext";
import { FaUser, FaLock } from "react-icons/fa";
import { useState, useContext } from "react";
import toast from "react-hot-toast";

const EditUser = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { user_id } = useContext(ThemeContext);
  const [id, setId] = useState("");

  const handleUpdate = async (e) => {
    e.preventDefault();
    const idValue = user_id;
    const value = { username, id: Number(idValue), password };
    try {
      await fetch(`http://localhost:3001/api/auth/register/${idValue}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(value),
      });
      toast.success("User information updated successfully!");
    } catch (error) {
      console.log(error);
      toast.error("Failed to update user information!");
    }
  };

  return (
    <div className="min-h-[70vh] flex justify-center items-center px-4 py-10">
      <div className="w-full max-w-md bg-bg rounded-[40px] p-7 sm:p-10 shadow-clay-lg border border-white/60 anim-fade-up">
        <div className="w-16 h-16 mx-auto rounded-3xl bg-tertiary/60 shadow-clay-sm flex items-center justify-center text-2xl mb-4">
          👤
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-center text-primary">
          Edit Profile
        </h2>
        <p className="text-center text-primary/55 text-sm mt-2 mb-8">
          Update your personal information
        </p>

        <form className="space-y-5" onSubmit={handleUpdate}>
          <div className="relative">
            <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary text-sm z-10" />
            <input
              type="text"
              placeholder="Full Name"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
              className="clay-input w-full pl-11 pr-4 py-3.5 text-sm"
            />
          </div>

          <div className="relative">
            <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary text-sm z-10" />
            <input
              type="number"
              placeholder="User-id"
              value={id}
              onChange={(e) => setId(e.target.value)}
              className="clay-input w-full pl-11 pr-4 py-3.5 text-sm"
            />
          </div>

          <div className="relative">
            <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary text-sm z-10" />
            <input
              type="password"
              placeholder="New Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="clay-input w-full pl-11 pr-4 py-3.5 text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-accent hover:bg-accent/95 text-white py-3.5 rounded-2xl font-bold text-sm shadow-clay-accent active:shadow-clay-inset transition-all"
          >
            Update Info
          </button>
        </form>

        <p className="text-center text-primary/55 text-sm mt-7">
          Go back to{" "}
          <a
            href="/dashboard"
            className="text-accent font-bold hover:underline"
          >
            Dashboard
          </a>
        </p>
      </div>
    </div>
  );
};

export default EditUser;
