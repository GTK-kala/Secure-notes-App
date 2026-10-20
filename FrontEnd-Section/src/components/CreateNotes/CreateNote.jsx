import { FaStickyNote, FaTag, FaSave, FaThumbtack } from "react-icons/fa";
import toast from "react-hot-toast";
import { useState } from "react";

const CreateNote = () => {
  const [user_id, setId] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState("");
  const [title, setTitle] = useState("");
  const [pinned, setPinned] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = "http://localhost:3001/api/notes/add";
    const value = { user_id, body, tags, title, pinned };
    try {
      await fetch(url, {
        method: "POST",
        headers: { "content-Type": "application/json" },
        body: JSON.stringify(value),
      });
      toast.success("Note is created !!!");
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
    <div className="flex justify-center py-6">
      <div className="w-full max-w-2xl bg-bg dark:bg-card-dark rounded-[40px] p-6 sm:p-10 shadow-clay-lg dark:shadow-[14px_14px_32px_rgba(0,0,0,0.4)] border border-white/60 dark:border-white/5 anim-fade-up transition-colors duration-300">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-2xl bg-accent shadow-clay-accent flex items-center justify-center">
            <FaStickyNote className="text-white text-xl" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-primary dark:text-bg">
            Create New Note
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm font-semibold text-primary dark:text-bg mb-2">
              Title
            </label>
            <input
              type="text"
              placeholder="Enter note title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="clay-input w-full px-4 py-3.5 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-primary dark:text-bg mb-2">
              User ID
            </label>
            <input
              type="number"
              placeholder="Enter user id..."
              value={user_id}
              onChange={(e) => setId(e.target.value)}
              required
              className="clay-input w-full px-4 py-3.5 text-sm"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-primary dark:text-bg mb-2">
              Body
            </label>
            <textarea
              placeholder="Write your note..."
              value={body}
              onChange={(e) => setBody(e.target.value)}
              required
              rows={5}
              className="clay-input w-full px-4 py-3.5 text-sm resize-none"
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-semibold text-primary dark:text-bg mb-2">
              <FaTag className="text-secondary dark:text-tertiary text-xs" />{" "}
              Tags
            </label>
            <input
              type="text"
              placeholder="e.g. work, ideas"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="clay-input w-full px-4 py-3.5 text-sm"
            />
          </div>

          <div className="flex items-center gap-3 px-1">
            <input
              type="checkbox"
              id="pinned"
              checked={pinned}
              onChange={(e) =>
                setPinned({ ...pinned, pinned: e.target.checked })
              }
              className="w-5 h-5 rounded-lg accent-accent cursor-pointer"
            />
            <label
              htmlFor="pinned"
              className="flex items-center gap-2 text-sm font-semibold text-primary dark:text-bg cursor-pointer"
            >
              <FaThumbtack
                className={
                  pinned?.pinned
                    ? "text-accent"
                    : "text-primary/30 dark:text-bg/30"
                }
              />
              {pinned?.pinned ? "Pinned" : "Not Pinned"}
            </label>
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent/95 text-white py-3.5 rounded-2xl font-bold text-sm shadow-clay-accent active:shadow-clay-inset transition-all"
          >
            <FaSave /> Save Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateNote;
