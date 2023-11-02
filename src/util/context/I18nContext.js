import { createContext, useContext, useState } from "react";

const I18nContext = createContext();

export function I18nProvider({ children }) {
  const [DICTContext, setDICTContext] = useState(null);
  const [metadata, setMetadata] = useState({
    title: "Nicolás' Portfolio",
    description: "Nicolás' Portflio",
  });

  return (
    <I18nContext.Provider
      value={{ DICTContext, setDICTContext, metadata, setMetadata }}
    >
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}
