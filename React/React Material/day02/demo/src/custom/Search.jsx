import { styled } from "@mui/material";

export const Search = styled( "div" )( ( { theme } ) => (
    {
        backgroundColor: theme.palette.mode == 'light' ? "#fff" : "#333",
        width: "40%",
        padding: "0px 0.75rem",
        borderRadius: theme.shape.borderRadius,
    }
) )