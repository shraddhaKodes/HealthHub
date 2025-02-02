import { createContext, useMemo } from "react";
import { doctors } from "../assets/assets";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const currencySymbol = '$';

    // Memoizing the context value to prevent unnecessary re-renders
    const value = useMemo(() => ({ doctors, currencySymbol }), [doctors, currencySymbol]);

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
