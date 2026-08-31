import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { translations, type Language } from "./translations";

type TranslationData = (typeof translations)[Language];

type LanguageContextType = {
  language: Language;
  setLanguage: (language: Language) => void;
  t: TranslationData;
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

function getBrowserLanguage(): Language {
  const browserLanguage = navigator.language.toLowerCase();

  if (browserLanguage.startsWith("de")) {
    return "de";
  }

  if (browserLanguage.startsWith("ja")) {
    return "ja";
  }

  return "en";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    const savedLanguage = localStorage.getItem("portfolio-language");

    if (
      savedLanguage === "en" ||
      savedLanguage === "de" ||
      savedLanguage === "ja"
    ) {
      return savedLanguage;
    }

    return getBrowserLanguage();
  });

  function setLanguage(newLanguage: Language) {
    setLanguageState(newLanguage);
    localStorage.setItem("portfolio-language", newLanguage);
  }

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      t: translations[language],
    }),
    [language]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
}