import { FaStickyNote, FaSave, FaTag, FaThumbtack } from "react-icons/fa";
import "./EditNote.css";

const EditNote = () => {
  return (
    <div className="auth-containers">
      <div className="auth-cards">
        <h2 className="auth-titles">
          <FaStickyNote /> Edit Note
        </h2>
        <p className="auth-subtitles">Update your note details below</p>

        <form className="auth-forms">
          {/* Title */}
          <div className="input-groups">
            <FaStickyNote className="icons" />
            <input type="text" name="title" placeholder="Enter new title" />
          </div>

          {/* Body */}
          <div className="input-groups">
            <textarea
              name="body"
              placeholder="Write your updated note..."
              className="textarea-field"
            ></textarea>
          </div>

          {/* Tags */}
          <div className="input-groups">
            <FaTag className="icons" />
            <input type="text" name="tags" placeholder="e.g. work, reminder" />
          </div>

          {/* Pinned */}
          <div className="pinned-toggle">
            <input type="checkbox" id="pinned" />
            <label htmlFor="pinned">
              <FaThumbtack className="pin-icon" />
              Pinned
            </label>
          </div>

          {/* Submit */}
          <button type="submit" className="auth-btns">
            <FaSave /> Update Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditNote;
