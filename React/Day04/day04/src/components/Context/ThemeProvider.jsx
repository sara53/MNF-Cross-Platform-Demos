import React, { useState } from 'react'
import { ThemeContext } from 'styled-components'

export default function ThemeProvider( props ) {

    const [ theme, setTheme ] = useState( 'light' )
    const toggleTheme = () => {
        setTheme( theme == 'light' ? "dark" : "light" )
    }
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}
