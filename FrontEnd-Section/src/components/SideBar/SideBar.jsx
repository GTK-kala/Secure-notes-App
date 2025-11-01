import { ThemeContext } from "../../context/ThemeContext";
import { useNavigate } from "react-router-dom"
import { useContext } from "react";
import {
  FaHome,
  FaStickyNote,
  FaUser,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import "./SideBar.css";

const SideBar = () => {
  const navigate = useNavigate();
  const { isOpen , HandleToggleFun } = useContext(ThemeContext);
  return (
    <>
      {/* Sidebar Container */}
      <aside className={`sidebar ${isOpen ? "open" : "collapsed"}`}>
        {/* <div className="sidebar-header">
          <h2 className="logo">{isOpen ? "NoteVault" : "NV"}</h2>
        </div> */}

        <ul className="sidebar-menu">
          <li onClick={() => {navigate('/'), HandleToggleFun()}}>
            <FaHome className="icon" />
            <span>Home</span>
          </li>
          <li onClick={() => {navigate('/notes'), HandleToggleFun()}}>
            <FaStickyNote className="icon" />
            <span>My Notes</span>
          </li>
          <li onClick={() =>{navigate('/user'), HandleToggleFun()}}>
            <FaUser className="icon" />
            <span>Profile</span>
          </li>
          <li onClick={() => HandleToggleFun()}>
            <FaCog className="icon" />
            <span>Settings</span>
          </li>
        </ul>

        <div className="sidebar-footer">
          <button className="logout-btn" onClick={() => HandleToggleFun()}>
            <FaSignOutAlt /> {isOpen && <span>Logout</span>}
          </button>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
