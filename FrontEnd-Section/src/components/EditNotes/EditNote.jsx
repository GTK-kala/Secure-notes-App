import { FaStickyNote, FaTag, FaThumbtack, FaSave } from "react-icons/fa";
import { toast } from "react-toastify";
import { useState } from "react";
import "./EditNote.css";

const EditNote = () => {

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState("");
  const [pinned, setPinned] = useState(false);

  const HandleChange = async (e) => {
    e.preventDefault();
    const id = 11;
    const url = `http://localhost:3001/api/notes/all/${id}`; // Replace :id with actual note ID
    const updatedNote = {
      title,
      body,
      tags: tags.split(",").map(tag => tag.trim()),
      pinned
    };
    try {
       const res = await fetch(url , {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedNote)
       })
       toast.success("Note Updated Successfully!");
    } catch (error) {
      toast.error("Failed to update note.");
    }
  }
  return (
    <div className="edit_note-root">
      <div className="edit_note-wrapper">
        <div className="edit_note-card">
          <header className="edit_note-header">
            <h1 className="edit_note-heading">
              <span><FaStickyNote className="edit_note-heading-icon" /></span>
              <span>Edit Note</span>
            </h1>
            <p className="edit_note-sub">Update title, content, tags or pin status</p>
          </header>

          <form className="edit_note-form" onSubmit={(e) => HandleChange(e)}>
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
