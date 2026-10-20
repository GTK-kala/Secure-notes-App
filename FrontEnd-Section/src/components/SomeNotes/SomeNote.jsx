import { FaStickyNote, FaThumbtack } from "react-icons/fa";
import { ThemeContext } from "../../context/ThemeContext";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

const SomeNote = () => {
  const { note, HandleNoteId } = useContext(ThemeContext);
  const navigator = useNavigate();

  return (
    <div className="py-4">
      <div className="flex justify-center items-center gap-3 mb-8 anim-fade-up">
        <div className="w-12 h-12 rounded-2xl bg-accent shadow-clay-accent flex items-center justify-center">
          <FaStickyNote className="text-white text-xl" />
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-primary dark:text-bg">
          Some Notes
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {note.length === 0 ? (
          <p className="text-center col-span-full text-primary/55 dark:text-bg/55 py-12">
            No notes found 📝
          </p>
        ) : (
          note.map((n) => (
            <div
              key={n.note_id}
              onClick={() => {
                HandleNoteId(n.note_id);
                navigator(`/edit-note/${n.note_id}`);
              }}
              className={`bg-bg dark:bg-card-dark rounded-clay p-6 border cursor-pointer shadow-clay dark:shadow-[8px_8px_20px_rgba(0,0,0,0.4)]
                hover:-translate-y-2 hover:shadow-clay-lg transition-all duration-300 anim-fade-up
                ${n.pinned ? "border-accent/60" : "border-white/60 dark:border-white/5"}`}
            >
              <div className="flex justify-between items-start gap-2 mb-3">
                <h3 className="font-bold text-primary dark:text-bg text-lg leading-tight">
                  {n.title}
                </h3>
                {n.pinned ? (
                  <div className="w-8 h-8 rounded-xl bg-accent/15 flex items-center justify-center flex-shrink-0">
                    <FaThumbtack className="text-accent text-sm" />
                  </div>
                ) : null}
              </div>
              <p className="text-sm text-primary/60 dark:text-bg/60 leading-relaxed mb-4 line-clamp-3">
                {n.body}
              </p>
              {n.tags && (
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {n.tags.split(",").map((tag, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-full bg-tertiary/60 dark:bg-tertiary/20 text-xs font-semibold text-primary/75 dark:text-bg/75"
                    >
                      #{tag.trim()}
                    </span>
                  ))}
                </div>
              )}
              <p className="text-xs text-primary/45 dark:text-bg/45 font-medium">
                Created: {new Date(n.created_at).toLocaleDateString("en-GB")}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default SomeNote;
