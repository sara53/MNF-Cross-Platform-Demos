import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Home } from "../pages/Home";
import { useState } from "react";

export function MainLayout() {
    const [ mode, setMode ] = useState( "dark" )
    const theme = createTheme( {
        palette: {
            mode
        }
    } )
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Home mode={mode} setMode={setMode} />
        </ThemeProvider>
    )
}
