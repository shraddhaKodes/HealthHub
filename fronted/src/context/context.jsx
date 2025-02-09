import { createContext, useState, useEffect, useMemo } from "react";
import { doctors as staticDoctors } from "../assets/assets"; // Import static data

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
    const [doctors, setDoctors] = useState(staticDoctors);
    const currencySymbol = "$";

    // Fetch doctors dynamically (for future API)
    useEffect(() => {
        // Uncomment this if API becomes available
        // fetch("API_URL_HERE")
        //     .then(res => res.json())
        //     .then(data => setDoctors(data))
        //     .catch(err => console.error("Failed to fetch doctors", err));
    }, []);

    // Memoizing context value
    const value = useMemo(() => ({ doctors, currencySymbol }), [doctors, currencySymbol]);

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export default AppContextProvider;
