import { FaStickyNote, FaTag, FaThumbtack, FaSave } from "react-icons/fa";
import { ThemeContext } from "../../context/ThemeContext";
import { useState, useContext } from "react";
import { toast } from "react-hot-toast";

const EditNote = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState("");
  const [pinned, setPinned] = useState(false);
  const { note_id } = useContext(ThemeContext);

  const HandleChange = async (e) => {
    e.preventDefault();
    const id = note_id;
    const url = `http://localhost:3001/api/notes/all/${id}`;
    const updatedNote = {
      title,
      body,
      tags: tags.split(",").map((tag) => tag.trim()),
      pinned,
    };
    try {
      await fetch(url, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedNote),
      });
      toast.success("Note updated successfully!");
    } catch {
      toast.error("Failed to update note.");
    }
  };

  return (
    <div className="flex justify-center py-6">
      <div className="w-full max-w-2xl bg-bg rounded-[40px] p-6 sm:p-10 shadow-clay-lg border border-white/60 anim-fade-up">
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="w-12 h-12 rounded-2xl bg-accent shadow-clay-accent flex items-center justify-center">
            <FaStickyNote className="text-white text-xl" />
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-primary">
            Edit Note
          </h1>
        </div>
        <p className="text-center text-primary/55 text-sm mb-8">
          Update title, content, tags or pin status
        </p>

        <form className="space-y-5" onSubmit={HandleChange}>
          <div>
            <label className="block text-sm font-semibold text-primary mb-2">
              Title
            </label>
            <div className="relative">
              <FaStickyNote className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary text-sm z-10" />
              <input
                type="text"
                placeholder="Enter note title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="clay-input w-full pl-11 pr-4 py-3.5 text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-primary mb-2">
              Body
            </label>
            <textarea
              placeholder="Write your updated note..."
              value={body}
              onChange={(e) => setBody(e.target.value)}
              rows={5}
              className="clay-input w-full px-4 py-3.5 text-sm resize-none"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 items-stretch">
            <div className="flex-1">
              <label className="flex items-center gap-2 text-sm font-semibold text-primary mb-2">
                <FaTag className="text-secondary text-xs" /> Tags
              </label>
              <div className="relative">
                <FaTag className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary text-sm z-10" />
                <input
                  type="text"
                  placeholder="e.g. work, ideas"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  className="clay-input w-full pl-11 pr-4 py-3.5 text-sm"
                />
              </div>
            </div>

            <div className="sm:w-40">
              <label className="block text-sm font-semibold text-primary mb-2">
                Pinned
              </label>
              <div className="flex items-center gap-2 px-4 py-3.5 rounded-2xl bg-bg shadow-clay-inset border border-white/40">
                <input
                  id="edit_pinned"
                  type="checkbox"
                  checked={pinned}
                  onChange={(e) => setPinned(e.target.checked)}
                  className="w-5 h-5 rounded-lg accent-accent cursor-pointer"
                />
                <label
                  htmlFor="edit_pinned"
                  className="flex items-center gap-1.5 text-sm font-semibold text-primary cursor-pointer"
                >
                  <FaThumbtack
                    className={pinned ? "text-accent" : "text-primary/30"}
                  />
                  {pinned ? "Pinned" : "Pin"}
                </label>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent/95 text-white py-3.5 rounded-2xl font-bold text-sm shadow-clay-accent active:shadow-clay-inset transition-all"
          >
            <FaSave /> Update Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditNote;
