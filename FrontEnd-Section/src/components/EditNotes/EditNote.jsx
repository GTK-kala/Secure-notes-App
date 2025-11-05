import { FaStickyNote, FaTag, FaThumbtack, FaSave } from "react-icons/fa";
import { useState } from "react";
import "./EditNote.css";

const EditNote = ({ initial = {} }) => {
  // UI-only state (you can replace with props or fetch logic)
  const [title, setTitle] = useState(initial.title || "");
  const [body, setBody] = useState(initial.body || "");
  const [tags, setTags] = useState(initial.tags || "");
  const [pinned, setPinned] = useState(!!initial.pinned);

  return (
    <div className="edit_note-root">
      <div className="edit_note-wrapper">
        <div className="edit_note-card">
          <header className="edit_note-header">
            <h1 className="edit_note-heading">
              <FaStickyNote className="edit_note-heading-icon" />
              Edit Note
            </h1>
            <p className="edit_note-sub">Update title, content, tags or pin status</p>
          </header>

          <form className="edit_note-form" onSubmit={(e) => e.preventDefault()}>
            {/* Title */}
            <label className="edit_note-label">
              Title
              <div className="edit_note-field">
                <FaStickyNote className="edit_note-field-icon" />
                <input
                  className="edit_note-input"
                  type="text"
                  name="title"
                  placeholder="Enter note title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
            </label>

            {/* Body */}
            <label className="edit_note-label">
              Body
              <div className="edit_note-field edit_note-field-textarea">
                <textarea
                  className="edit_note-textarea"
                  name="body"
                  placeholder="Write your updated note..."
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                />
              </div>
            </label>

            {/* Tags and Pinned in a row */}
            <div className="edit_note-row">
              <label className="edit_note-label small">
                Tags
                <div className="edit_note-field">
                  <FaTag className="edit_note-field-icon" />
                  <input
                    className="edit_note-input"
                    type="text"
                    name="tags"
                    placeholder="e.g. work, ideas"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                  />
                </div>
              </label>

              <div className="edit_note-label small pinned-control">
                <span className="pinned-row">
                  <input
                    id="edit_note-pinned"
                    type="checkbox"
                    checked={pinned}
                    onChange={(e) => setPinned(e.target.checked)}
                    className="edit_note-checkbox"
                  />
                  <label htmlFor="edit_note-pinned" className="pinned-label">
                    <FaThumbtack className={`pin-icon ${pinned ? "active" : ""}`} />
                    {pinned ? "Pinned" : "Pin"}
                  </label>
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="edit_note-actions">
              <button type="submit" className="edit_note-save">
                <FaSave /> Update Note
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditNote;
