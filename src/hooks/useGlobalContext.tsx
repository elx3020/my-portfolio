import { useMemo, createContext, useContext, useState } from "react";

import { useLocation } from "react-router-dom";

const GlobalProvider = createContext({} as { language: 'en' | 'es', setLenguage: (language: 'en' | 'es') => void, [key: string]: any });

const GlobalStateProvider = ({children}) => {

    const [language, setLenguage] = useState<'en' | 'es'>("en");


    const handleLanguage = (language: 'en' | 'es') => { 
        setLenguage(language);
    }

    const memo = useMemo(() => ({
        language,
        setLenguage: handleLanguage
    }),[language]);

    return <GlobalProvider.Provider value={memo}>{children}</GlobalProvider.Provider>
}


export default GlobalStateProvider;

export const useGlobalContext = () => { 
    return useContext(GlobalProvider);
}