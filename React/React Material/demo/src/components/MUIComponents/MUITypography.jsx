import Typography from '@mui/material/Typography';
import { pink, purple } from '@mui/material/colors'
import React from 'react'

export function MUITypography() {
    return (
        <>
            {/* <Typography sx={{ color: purple[ 800 ] }} variant='h1'>Hello Front Track</Typography>
            <Typography sx={{ color: "green" }} variant='subtitle1'>sub title 1</Typography>
            <Typography variant='subtitle2'>sub title 2</Typography>
            <Typography variant='body'>body</Typography>
            <Typography sx={{ color: purple[ 800 ] }} variant='h1'>Hello Front Track</Typography> */}
            <Typography gutterBottom color='primary' variant='h1'>Hello Front Track</Typography>
            <Typography color='primary.light' variant='h2' component="p">Sara Atef</Typography>
            <Typography align='center' color='secondary.light' variant='h2' component="p">Sara Atef</Typography>
            <Typography align='right' color='warning.light' variant='h2' component="p">Sara Atef</Typography>
            <Typography color='error' variant='h2' component="p">Sara Atef</Typography>

        </>
    )
}
