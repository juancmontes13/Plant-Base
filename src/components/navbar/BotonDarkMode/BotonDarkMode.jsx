import React from "react";
// COntext 
import { useDarkModeContext } from "../../../context/DarkModeContext";


const BotonDarkMode = () => {
    const {toggleDarkMode} = useDarkModeContext()
    return (
        <div className="form-check form-switch">
          <input
            onInput={() => toggleDarkMode()}
            className="form-check-input"
            type="checkbox"
            id="flexSwitchCheckDefault"
        />
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
        </div>
    );
}

export default BotonDarkMode;
