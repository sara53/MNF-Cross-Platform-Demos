import { Box, Grid2 } from '@mui/material'
import React from 'react'
import Grid from '@mui/material/Grid2';
export default function MUIResponsive() {
    return (
        <Box>
            <Grid container spacing={2}>
                <Grid item size={{ xs: 12, sm: 3 }} bgcolor="primary.light">
                    Welcome
                </Grid>
                <Grid bgcolor="secondary.light" item size={{ xs: 12, sm: 6 }}>
                    Welcome
                </Grid>
                <Grid bgcolor="secondary.light" item size={{ xs: 12, sm: 3 }}>
                    Welcome
                </Grid>
            </Grid>
        </Box>
    )
}
