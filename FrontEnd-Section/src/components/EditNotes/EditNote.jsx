import { FaStickyNote, FaSave, FaTag, FaThumbtack } from "react-icons/fa";
import "./EditNote.css";

const EditNote = () => {
  return (
    <div className="edit_note-container">
      <div className="edit_note-card">
        <h2 className="edit_note-title">
          <FaStickyNote /> Edit Note
        </h2>
        <p className="edit_note-subtitle">Update your note details below</p>

        <form className="edit_note-form">
          {/* Title */}
          <div className="edit_note-group">
            <FaStickyNote className="edit_note-icon" />
            <input type="text" name="title" placeholder="Enter new title" />
          </div>

          {/* Body */}
          <div className="edit_note-group">
            <textarea
              name="body"
              placeholder="Write your updated note..."
              className="edit_note-textarea"
            ></textarea>
          </div>

          {/* Tags */}
          <div className="edit_note-group">
            <FaTag className="edit_note-icon" />
            <input type="text" name="tags" placeholder="e.g. work, reminder" />
          </div>

          {/* Pinned */}
          <div className="edit_note-pinned">
            <input type="checkbox" id="pinned" />
            <label htmlFor="pinned">
              <FaThumbtack className="pin-icon" />
              Pinned
            </label>
          </div>

          {/* Submit */}
          <button type="submit" className="edit_note-btn">
            <FaSave /> Update Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditNote;
