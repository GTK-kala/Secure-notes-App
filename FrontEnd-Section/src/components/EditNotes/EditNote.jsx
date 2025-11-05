import { FaStickyNote, FaSave, FaTag, FaThumbtack } from "react-icons/fa";
import "./EditNote.css";

const EditNote = () => {
  return (
    <div className="editnote-container">
      <div className="editnote-card">
        <h2 className="editnote-title">
          <FaStickyNote /> Edit Note
        </h2>
        <p className="editnote-subtitle">Update your note details below</p>

        <form className="editnote-form">
          {/* Title */}
          <div className="editnote-group">
            <FaStickyNote className="editnote-icon" />
            <input type="text" name="title" placeholder="Enter new title" />
          </div>

          {/* Body */}
          <div className="editnote-group">
            <textarea
              name="body"
              placeholder="Write your updated note..."
              className="editnote-textarea"
            ></textarea>
          </div>

          {/* Tags */}
          <div className="editnote-group">
            <FaTag className="editnote-icon" />
            <input type="text" name="tags" placeholder="e.g. work, reminder" />
          </div>

          {/* Pinned */}
          <div className="editnote-pinned">
            <input type="checkbox" id="pinned" />
            <label htmlFor="pinned">
              <FaThumbtack className="pin-icon" />
              Pinned
            </label>
          </div>

          {/* Submit */}
          <button type="submit" className="editnote-btn">
            <FaSave /> Update Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditNote;
