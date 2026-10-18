import { FaStickyNote, FaThumbtack } from "react-icons/fa";
import { ThemeContext } from "../../context/ThemeContext";
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

const AllNotes = () => {
  const { HandleNoteId } = useContext(ThemeContext);
  const [notes, setNotes] = useState([]);
  const navigator = useNavigate();

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await fetch("http://localhost:3001/api/notes/all");
        const data = await res.json();
        setNotes(data.result || []);
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    };
    fetchNotes();
  }, []);

  return (
    <div className="py-4">
      <div className="flex justify-center items-center gap-3 mb-8 anim-fade-up">
        <div className="w-12 h-12 rounded-2xl bg-accent shadow-clay-accent flex items-center justify-center">
          <FaStickyNote className="text-white text-xl" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-primary">
          All Notes
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {notes.length === 0 ? (
          <p className="text-center col-span-full text-primary/55 py-12">
            No notes found 📝
          </p>
        ) : (
          notes.map((note) => (
            <div
              key={note.note_id}
              onClick={() => {
                HandleNoteId(note.note_id);
                navigator(`/edit-note/${note.note_id}`);
              }}
              className={`bg-bg rounded-clay p-6 border cursor-pointer shadow-clay
                hover:-translate-y-2 hover:shadow-clay-lg transition-all duration-300 anim-fade-up
                ${note.pinned ? "border-accent/60" : "border-white/60"}`}
            >
              <div className="flex justify-between items-start gap-2 mb-3">
                <h3 className="font-bold text-primary text-lg leading-tight">
                  {note.title}
                </h3>
                {note.pinned ? (
                  <div className="w-8 h-8 rounded-xl bg-accent/15 flex items-center justify-center flex-shrink-0">
                    <FaThumbtack className="text-accent text-sm" />
                  </div>
                ) : null}
              </div>
              <p className="text-sm text-primary/60 leading-relaxed mb-4 line-clamp-3">
                {note.body}
              </p>
              {note.tags && (
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {note.tags.split(",").map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-full bg-tertiary/60 text-xs font-semibold text-primary/75"
                    >
                      #{tag.trim()}
                    </span>
                  ))}
                </div>
              )}
              <p className="text-xs text-primary/45 font-medium">
                Created: {new Date(note.created_at).toLocaleDateString("en-GB")}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AllNotes;
