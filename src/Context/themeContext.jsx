import { useState, createContext } from "react";

export let ThemeContext = createContext()

let ThemeProvider = ({children}) => {

    let [dark, setDark] = useState(window.matchMedia('(prefers-color-scheme : dark)').matches)

    window.matchMedia('(prefers-color-scheme : dark)').addEventListener('change', event => handleChange(event))

    const handleChange = event => {
        event.matches ? setDark(true) : setDark(false)
    }

    console.log(dark)
    
    // let theme = window.matchMedia('(prefers-color-scheme : dark)')
    // console.log(theme.matches)
    
    return (
        <ThemeContext.Provider value={{dark, setDark}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider