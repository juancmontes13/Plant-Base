import { useContext, createContext, useState } from "react";

const DarkModeContext = createContext() // crear mi contexto - serian la informacion y los metodos
export const useDarkModeContext = () => useContext(DarkModeContext) // me permite utilizar mi contexto
export  const DarkModeProvider = (props) => { // creo mi proveedor del contexto
     const [darkMode, setDarkMode] = useState(false)

     const toggleDarkMode = () => {
        setDarkMode(!darkMode)
        if(!darkMode)  {
            document.body.firstElementChild.classList.add('darkMode')
        } else {
            document.body.firstElementChild.classList.remove('darkMode')

        }
     }
   
     return (
        <DarkModeContext.Provider value={{darkMode, toggleDarkMode}}>
               {props.children}
        </DarkModeContext.Provider>
     )
}
