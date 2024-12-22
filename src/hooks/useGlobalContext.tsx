import { useMemo, createContext, useContext, useState } from "react";

import pageContent_en from "../data/site_en.json";
import pageContent_es from "../data/site_es.json";

const GlobalProvider = createContext({} as { language: 'en' | 'es', blogActive: boolean, setLanguage: (language: 'en' | 'es') => void, content: typeof pageContent_en, [key: string]: any });

const GlobalStateProvider = ({ children }) => {

    const [language, setLanguage] = useState<'en' | 'es'>("en");

    const [content, setContent] = useState(pageContent_en);

    const [blogActive, setBlogActive] = useState(true);


    const handleLanguage = (language: 'en' | 'es') => {
        setLanguage(language);
        if (language === "en") {
            setContent(pageContent_en);
        } else if (language === "es") {
            setContent(pageContent_es);
        }
    }

    const memo = useMemo(() => ({
        language,
        blogActive,
        setLanguage: handleLanguage,
        content
    }), [language, content]);

    return <GlobalProvider.Provider value={memo}>{children}</GlobalProvider.Provider>
}


export default GlobalStateProvider;

export const useGlobalContext = () => {
    return useContext(GlobalProvider);
}