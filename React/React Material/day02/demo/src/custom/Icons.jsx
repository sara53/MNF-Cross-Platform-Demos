import { Box, styled } from "@mui/material";

export const Icons = styled( Box )( ( { theme } ) => ( {
    display: "none",
    direction: "row",
    alignItems: "center",
    gap: 25,
    [ theme.breakpoints.up( "md" ) ]: {
        display: "flex"
    }
} ) )