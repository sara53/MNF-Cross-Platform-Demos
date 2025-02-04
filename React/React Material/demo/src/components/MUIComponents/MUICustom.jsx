import { Box, styled, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import React from 'react'


export const StyledBox = styled( Box )( ( { theme, test } ) => ( {

    display: "flex",
    direction: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: theme.palette.primary.light,
    color: "#fff",
    padding: "20px"

} ) )



export function MUICustom() {
    return (
        <StyledBox test="hello">
            <Typography variant='h1'>Hello Front</Typography>
            <Typography variant='h5'>Hello Front</Typography>
        </StyledBox>
    )
}
