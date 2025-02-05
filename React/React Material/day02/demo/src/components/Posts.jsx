import { Box } from '@mui/material'
import React from 'react'
import { Post } from './Post'
import { postsList } from '../Models/postsList'

export function Posts() {
    return (
        <Box>
            {postsList.map( ( post ) => ( <Post key={post.id} post={post} /> ) )}
        </Box>
    )
}
