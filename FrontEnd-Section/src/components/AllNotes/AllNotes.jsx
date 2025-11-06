import { FaStickyNote, FaThumbtack } from "react-icons/fa";
import { ThemeContext } from "../../context/ThemeContext";
import { useEffect, useState , useContext} from "react";
import { useNavigate } from "react-router-dom";
import "./AllNotes.css";

const AllNotes = () => {
  const { HandleNoteId } = useContext(ThemeContext);
  const [notes, setNotes] = useState([]);
  const navigator = useNavigate();

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await fetch("http://localhost:3001/api/notes/all");
        const data = await res.json();
        const Data = data.result;
        setNotes(Data);
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    };
    fetchNotes();
  }, []);

  return (
    <div className="notes-page">
      <div className="notes-header">
        <FaStickyNote className="icon" />
        <h2>All Notes</h2>
      </div>

      <div className="notes-grid">
        {notes.length === 0 ? (
          <p className="no-notes">No notes found 📝</p>
        ) : (
          notes.map((note) => (
            <div
              key={note.note_id}
              className={`note-card ${note.pinned ? "pinned" : ""}`}
              onClick={() => { HandleNoteId(note.note_id), navigator(`/edit-note/${note.note_id}`)}}
            >
              <div className="note-header">
                <h3>{note.title}</h3>
                {note.pinned && <FaThumbtack className="pin-icon" />}
              </div>
              <p className="note-body">{note.body}</p>
              {note.tags && (
                <div className="note-tags">
                  {note.tags.split(",").map((tag, i) => (
                    <span key={i} className="tag">
                      #{tag.trim()}
                    </span>
                  ))}
                </div>
              )}
              <div className="note-footer">
                <small>
                  Created:{" "}
                  {new Date(note.created_at).toLocaleDateString("en-GB")}
                </small>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AllNotes;
