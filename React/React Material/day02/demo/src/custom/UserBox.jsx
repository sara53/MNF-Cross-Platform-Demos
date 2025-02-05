import { Box, styled } from "@mui/material";

export const UserBox = styled( Box )( ( { theme } ) => ( {
    display: "flex",
    gap: 10,
    direction: "row",
    alignItems: "center",
    [ theme.breakpoints.up( "md" ) ]: {
        display: "none"
    }

} ) )