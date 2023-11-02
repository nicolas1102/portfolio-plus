import { createContext, useContext, useState } from "react";

const Context = createContext();

export function ContextProvider({ children }) {
  const [DICTContext, setDICTContext] = useState(null);
  const [metadata, setMetadata] = useState({
    title: "Nicolás' Portfolio",
    description: "Nicolás' Portfolio",
  });
  const [theme, setTheme] = useState("light");

  return (
    <Context.Provider
      value={{
        DICTContext,
        setDICTContext,
        metadata,
        setMetadata,
        theme,
        setTheme,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export function useCntxt() {
  return useContext(Context);
}

export function changeTheme(theme, setTheme) {
  theme === "dark" ? (setTheme("light")) : (setTheme("dark"));
}
