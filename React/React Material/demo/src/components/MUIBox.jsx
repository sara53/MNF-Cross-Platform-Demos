import { Box, Stack } from '@mui/material'
import React from 'react'

export default function MUIBox() {
    return (
        <Stack sx={{ width: "100%", gap: 2 }} direction="row">

            <Box sx={{ height: "200px", display: { xs: "none", sm: "flex" } }} flex={1} bgcolor="primary.main">Left</Box>
            <Box sx={{ height: "200px" }} flex={10} bgcolor="secondary.light">center</Box>
            <Box sx={{ height: "200px", display: { xs: "none", md: "flex" } }} flex={1} bgcolor="error.light">Right</Box>
        </Stack>
    )
}
