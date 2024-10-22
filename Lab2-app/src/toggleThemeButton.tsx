import React, { useState, useContext } from 'react';
import { ThemeContext, themes } from "./themeContext";
import "./App.css"

function UsableToggle() {
    const theme = useContext(ThemeContext);

    if(theme === themes.light){
        document.querySelector("body")?.setAttribute("data-theme", "light");
    };

    if(theme === themes.dark){
        document.querySelector("body")?.setAttribute("data-theme", "dark");
    };

    return(
        <></>
    )
}


export function ToggleTheme() {
    const [currentTheme, setCurrentTheme] = useState(themes.light);

    const toggle = () => {
        setCurrentTheme(currentTheme === themes.light ? themes.dark : themes.light);
    };

    return (
        <ThemeContext.Provider value={currentTheme}>
            <button className="toggle-button" onClick={toggle}>Toggle Theme </button>
            <UsableToggle/>
        </ThemeContext.Provider>
    )
}