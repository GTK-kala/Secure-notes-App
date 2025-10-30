import { FaStickyNote, FaTag, FaSave, FaThumbtack } from "react-icons/fa";
import { toast } from "react-toastify";
import { useState } from "react";
import "./CreateNote.css";

const CreateNote = () => {
  const [user_id, setId] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState("");
  const [title, setTitle] = useState("");
  const [pinned, setPinned] = useState("");

  // TODO: send to backend
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "http://localhost:3001/api/notes/add";
    const value = { user_id, body, tags, title, pinned };
    
    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(value),
      });
      toast.success("Note is created !!!");
      console.log(value);
    } catch (error) {
      toast.error("ERROR !!!");
      console.log(error);
    }
    setId("");
    setBody("");
    setTags("");
    setTitle("");
    setPinned("");
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
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>
          {/* id */}
          <div className="form-group">
            <label>ID</label>
            <input
              type="number"
              name="id"
              placeholder="Enter id..."
              value={user_id}
              onChange={(e) => setId(e.target.value)}
              required
            />
          </div>

          {/* Body */}
          <div className="form-group">
            <label>Body</label>
            <textarea
              name="body"
              placeholder="Write your note..."
              value={body}
              onChange={(e) => setBody(e.target.value)}
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
              value={tags}
              onChange={(e) => setTags(e.target.value)}
            />
          </div>

          {/* Pinned */}
          <div className="pinned-toggle">
            <input
              type="checkbox"
              id="pinned"
              checked={pinned}
              onChange={(e) =>
                setPinned({ ...pinned, pinned: e.target.checked })
              }
            />
            <label htmlFor="pinned">
              <FaThumbtack className={`pin-icon ${pinned ? "active" : ""}`} />
              {pinned ? "Pinned" : "Not Pinned"}
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
