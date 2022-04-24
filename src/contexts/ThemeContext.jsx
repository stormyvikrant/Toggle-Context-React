import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
   const [isDarkMode, setIsDarkMode] = useState(false);

   const toggleTheme = () => {
      setIsDarkMode(isDarkMode === false ? true : false);
   };

   return (
      <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
         {children}
      </ThemeContext.Provider>
   );
};