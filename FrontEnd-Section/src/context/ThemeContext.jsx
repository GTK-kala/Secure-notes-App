import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext(null);

export const ThemeProvider = (props) => {
  const [note, setNote] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [user_id, setUserId] = useState(null);
  const [note_id, setNoteId] = useState(null);

  // Initialize theme
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved : "light";
  });

  const HandleToggleFun = () => setIsOpen(!isOpen);
  const HandleUserId = (id) => setUserId(id);
  const HandleNoteId = (id) => setNoteId(id);

  // Apply theme
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  const HandleFetchData = async (id) => {
    const url = `http://localhost:3001/api/notes/some/${id}`;
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Failed to fetch data");
      const data = await response.json();
      setNote(data.result);
    } catch (error) {
      console.error(error);
    }
  };

  const ContextValue = {
    theme,
    toggleTheme,
    isOpen,
    setIsOpen,
    HandleToggleFun,
    user_id,
    HandleUserId,
    note_id,
    HandleNoteId,
    note,
    HandleFetchData,
  };

  return (
    <ThemeContext.Provider value={ContextValue}>
      {props.children}
    </ThemeContext.Provider>
  );
};
