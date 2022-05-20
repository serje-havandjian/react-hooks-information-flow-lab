import React from "react";

function Header({onDarkModeClick, isDarkMode}){

    return(
    <header>
        <button onClick = {onDarkModeClick}>
        {isDarkMode ? "Dark" : "Light"} Mode
        </button>
    </header>
    )
}

export default Header