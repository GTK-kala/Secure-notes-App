import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext(null);

export const ThemeProvider = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");


  const HandleToggleFun = () =>{
     if(isOpen){
       setIsOpen(false);
     }else{
      setIsOpen(true);
     }
  }

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const ContextValue = {
    theme,
    toggleTheme,
    isOpen,
    setIsOpen,
    HandleToggleFun
  };

  return (
    <ThemeContext.Provider value={ContextValue}>
      {props.children}
    </ThemeContext.Provider>
  );
};
