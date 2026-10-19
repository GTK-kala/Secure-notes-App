import { useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  FaHome,
  FaStickyNote,
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const SideBar = () => {
  const navigate = useNavigate();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const items = [
    { icon: <FaHome />, label: "Home", to: "/" },
    { icon: <FaStickyNote />, label: "My Notes", to: "/notes" },
    { icon: <FaUser />, label: "Profile", to: "/user" },
    { icon: <FaCog />, label: "Settings", to: null },
  ];

  const handleNavigate = (to) => {
    if (to) navigate(to);
    setIsMobileOpen(false); // Close mobile menu on click
  };

  return (
    <>
      {/* Mobile Floating Toggle Button (Only visible on small screens) */}
      <button
        onClick={() => setIsMobileOpen(true)}
        className="md:hidden fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-accent text-white flex items-center justify-center text-xl shadow-clay-accent active:shadow-clay-inset transition-all"
      >
        <FaBars />
      </button>

      {/* Mobile Backdrop Overlay */}
      {isMobileOpen && (
        <div
          className="md:hidden fixed inset-0 bg-primary/40 backdrop-blur-sm z-40"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed left-3 top-24 bottom-4 z-50 flex flex-col justify-between bg-bg rounded-[32px] shadow-clay border border-white/60 p-3 transition-all duration-300
          ${isMobileOpen ? "translate-x-0 w-56" : "-translate-x-[120%] w-56"} 
          md:translate-x-0 md:w-60`}
      >
        {/* Mobile Close Button */}
        <div className="md:hidden flex justify-end mb-2">
          <button
            onClick={() => setIsMobileOpen(false)}
            className="w-8 h-8 rounded-xl bg-tertiary/50 flex items-center justify-center text-primary shadow-clay-sm active:shadow-clay-inset"
          >
            <FaTimes />
          </button>
        </div>

        <ul className="flex flex-col gap-2 mt-1">
          {items.map((it, i) => (
            <li
              key={i}
              onClick={() => handleNavigate(it.to)}
              className="flex items-center gap-3 px-4 py-3 rounded-2xl cursor-pointer
                text-primary/70 hover:text-primary hover:bg-tertiary/50 hover:shadow-clay-sm
                transition-all active:shadow-clay-inset justify-start"
            >
              <span className="text-lg text-accent">{it.icon}</span>
              <span className="text-sm font-semibold">{it.label}</span>
            </li>
          ))}
        </ul>

        <button
          onClick={() => handleNavigate("/login")}
          className="flex items-center gap-3 justify-center px-3 py-3 rounded-2xl
            bg-accent/95 text-white text-sm font-bold shadow-clay-accent
            active:shadow-clay-inset transition-all"
        >
          <FaSignOutAlt />
          <span>Logout</span>
        </button>
      </aside>
    </>
  );
};

export default SideBar;
