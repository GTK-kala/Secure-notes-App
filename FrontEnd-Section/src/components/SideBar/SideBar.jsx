import { ThemeContext } from "../../context/ThemeContext";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import {
  FaHome,
  FaStickyNote,
  FaUser,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const SideBar = () => {
  const navigate = useNavigate();
  const { isOpen, HandleToggleFun } = useContext(ThemeContext);

  const items = [
    { icon: <FaHome />, label: "Home", to: "/" },
    { icon: <FaStickyNote />, label: "My Notes", to: "/notes" },
    { icon: <FaUser />, label: "Profile", to: "/user" },
    { icon: <FaCog />, label: "Settings", to: null },
  ];

  return (
    <aside
      className={`hidden md:flex fixed left-3 top-24 bottom-4 z-30 flex-col justify-between
        bg-bg rounded-[32px] shadow-clay border border-white/60 p-3
        transition-all duration-300 ${isOpen ? "w-56" : "w-16"}`}
    >
      <ul className="flex flex-col gap-2 mt-1">
        {items.map((it, i) => (
          <li
            key={i}
            onClick={() => {
              if (it.to) navigate(it.to);
              HandleToggleFun();
            }}
            className={`flex items-center gap-3 px-3 py-3 rounded-2xl cursor-pointer
              text-primary/70 hover:text-primary hover:bg-tertiary/50 hover:shadow-clay-sm
              transition-all active:shadow-clay-inset
              ${isOpen ? "justify-start" : "justify-center"}`}
          >
            <span className="text-lg text-accent">{it.icon}</span>
            {isOpen && (
              <span className="text-sm font-semibold">{it.label}</span>
            )}
          </li>
        ))}
      </ul>

      <button
        onClick={HandleToggleFun}
        className={`flex items-center gap-3 justify-center px-3 py-3 rounded-2xl
          bg-accent/95 text-white text-sm font-bold shadow-clay-accent
          active:shadow-clay-inset transition-all`}
      >
        <FaSignOutAlt />
        {isOpen && <span>Logout</span>}
      </button>
    </aside>
  );
};

export default SideBar;
