import { FaHome, FaStickyNote, FaUser, FaCog, FaSignOutAlt, FaBars } from "react-icons/fa";
import { useState } from "react";
import "./SideBar.css";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle Button for Mobile */}
      <div className="sidebar-toggle" onClick={() => setIsOpen(!isOpen)}>
        <FaBars />
      </div>

      {/* Sidebar Container */}
      <aside className={`sidebar ${isOpen ? "open" : "collapsed"}`}>
        <div className="sidebar-header">
          <h2 className="logo">{isOpen ? "NoteVault" : "NV"}</h2>
        </div>

        <ul className="sidebar-menu">
          <li><FaHome className="icon" /><span>Home</span></li>
          <li><FaStickyNote className="icon" /><span>My Notes</span></li>
          <li><FaUser className="icon" /><span>Profile</span></li>
          <li><FaCog className="icon" /><span>Settings</span></li>
        </ul>

        <div className="sidebar-footer">
          <button className="logout-btn">
            <FaSignOutAlt /> {isOpen && <span>Logout</span>}
          </button>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
