import { Box } from '@mui/material'
import React from 'react'
import { Posts } from './Posts'

export function Feed() {
    return (
        <Box flex={7} p={2}>

            <Posts />
        </Box>
    )
}
