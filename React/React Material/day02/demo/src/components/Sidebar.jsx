import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'

import { pages } from '../Models/pageList';
import NightlightRoundIcon from '@mui/icons-material/NightlightRound';
import LightModeIcon from '@mui/icons-material/LightMode';
export function Sidebar( { mode, setMode } ) {
    return (
        <Box flex={2} p={2}>

            <List>
                {pages.map( ( page => (
                    <ListItem key={page.id} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {page.icon}
                            </ListItemIcon>
                            <ListItemText primary={page.text} />
                        </ListItemButton>
                    </ListItem>
                ) ) )}
                <ListItem disablePadding>
                    <ListItemButton onClick={() => setMode( mode == 'light' ? "dark" : "light" )}>
                        <ListItemIcon>
                            {mode == "light" ?
                                <LightModeIcon />
                                :
                                <NightlightRoundIcon />
                            }
                        </ListItemIcon>
                        <ListItemText primary={mode == "light" ? "Light Mode" : "dark Mode"} />
                    </ListItemButton>
                </ListItem>



            </List>
        </Box>
    )
}
