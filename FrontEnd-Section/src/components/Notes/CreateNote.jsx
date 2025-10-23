import { useState } from "react";
import { FaStickyNote, FaTag, FaSave, FaThumbtack } from "react-icons/fa";
import "./CreateNote.css";

const CreateNote = () => {
  const [note, setNote] = useState({
    title: "",
    body: "",
    tags: "",
    pinned: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNote({ ...note, [name]: value });
  };
// TODO: send to backend
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:3001/api/notes/add"
      const res = fetch( url , {
        method : "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(note),
      })
    } catch (error) {
      console.log(error)
    };
    setNote({});
  };

  return (
    <div className="create-note-container">
      <div className="create-note-card">
        <h2 className="page-title">
          <FaStickyNote className="icon" /> Create New Note
        </h2>

        <form onSubmit={handleSubmit} className="note-form">
          {/* Title */}
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              name="title"
              placeholder="Enter note title"
              value={note.title}
              onChange={handleChange}
              required
            />
          </div>

          {/* Body */}
          <div className="form-group">
            <label>Body</label>
            <textarea
              name="body"
              placeholder="Write your note..."
              value={note.body}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          {/* Tags */}
          <div className="form-group">
            <label>
              <FaTag /> Tags
            </label>
            <input
              type="text"
              name="tags"
              placeholder="e.g. work, ideas"
              value={note.tags}
              onChange={handleChange}
            />
          </div>

          {/* Pinned */}
          <div className="pinned-toggle">
            <input
              type="checkbox"
              id="pinned"
              checked={note.pinned}
              onChange={(e) =>
                setNote({ ...note, pinned: e.target.checked })
              }
            />
            <label htmlFor="pinned">
              <FaThumbtack className={`pin-icon ${note.pinned ? "active" : ""}`} />
              {note.pinned ? "Pinned" : "Not Pinned"}
            </label>
          </div>

          {/* Submit */}
          <button type="submit" className="save-btn">
            <FaSave /> Save Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateNote;
