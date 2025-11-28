import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext(null);

export const ThemeProvider = (props) => {
  const [note, setNote] = useState([]);
  const [mood , setMood] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [user_id, setUserId] = useState(null);
  const [note_id, setNoteId] = useState(null);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const HandleToggleFun = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  const HandleUserId = (id) => {
    setUserId(id);
  };

  const HandleNoteId = (id) => {
    setNoteId(id);
  };

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const HandelMood = () => {
    if(mood){
     setMood(true);
    }else{
      setMood(false);
    }
  }

  const HandleFetchData = async (id) => {
    const url = `http://localhost:3001/api/notes/some/${id}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      const Data = data.result;
      setNote(Data);
      console.log(Data);
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
    mood,
    HandelMood
  };

  return (
    <ThemeContext.Provider value={ContextValue}>
      {props.children}
    </ThemeContext.Provider>
  );
};
