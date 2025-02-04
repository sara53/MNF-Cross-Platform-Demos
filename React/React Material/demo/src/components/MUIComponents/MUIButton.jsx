import { Button, ButtonGroup, IconButton, Stack } from '@mui/material'
import React, { useState } from 'react'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import AlarmIcon from '@mui/icons-material/Alarm';


import { green, red } from '@mui/material/colors';
export default function MUIButton() {
    const [ count, setCount ] = useState( [ "Bold", "italic" ] )
    return (
        <>

            <Stack direction="row">
                {/* <Button size='large' color="secondary" variant='outlined'>outlined</Button>
                <Button size='small' color='error' variant='contained'>contained</Button>
                <Button >text</Button>
                <Button endIcon={<ExitToAppIcon />} color="secondary" variant='contained'> login</Button> */}
                {/* <Button onClick={() => alert( "hello" )} m={1} p={4} sx={{
                    bgcolor: red[ 800 ],
                    "&:hover": {
                        bgcolor: green[ 800 ]
                    }
                }} startIcon={<ExitToAppIcon />} variant='contained'> login</Button>

                <IconButton color="secondary" aria-label="add an alarm">
                    <AlarmIcon />
                </IconButton> */}
                <ButtonGroup color="secondary" variant="outlined" aria-label="Basic button group">
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
            </Stack >

        </>
    )
}
