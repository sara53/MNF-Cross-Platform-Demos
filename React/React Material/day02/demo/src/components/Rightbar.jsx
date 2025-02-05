import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'
import { postsList } from '../Models/postsList'
import poofile1 from '../assets/3.jpg'
export function Rightbar() {
    return (
        <Box flex={3} p={2} width={260} >
            <Typography fontWeight={100} mb={2} variant='h5' >Online Friends</Typography>
            <AvatarGroup max={6} sx={{ justifyContent: "flex-end" }}>

                {postsList.map( ( post ) => (

                    <Avatar key={post.id} alt={post.name} src={post.profileImg} />
                ) )}

            </AvatarGroup>
            <Typography mt={3} fontWeight={100} mb={2} variant='h5' >Latest Photos</Typography>
            <ImageList sx={{ width: 300, height: "auto", overflow: "hidden" }} cols={3} rowHeight={100}>
                {postsList.map( ( item ) => (
                    <ImageListItem key={item.id}>
                        <img

                            src={`${item.postImg}?w=200&h=100&fit=crop&auto=format`}
                            alt={item.name}
                            loading="lazy"
                        />
                    </ImageListItem>
                ) )}
            </ImageList>
            <Typography mt={3} fontWeight={100} mb={2} variant='h5' > Latest Conversation</Typography>

            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={poofile1} />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Hasnaa Nagy"
                        secondary={
                            <>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    sx={{ color: 'text.primary', display: 'inline' }}
                                >
                                    How are you .. ?
                                </Typography>

                            </>
                        }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Remy Sharp" src={poofile1} />
                    </ListItemAvatar>
                    <ListItemText
                        primary="Amal Ahmed"
                        secondary={
                            <>
                                <Typography
                                    component="span"
                                    variant="body2"
                                    sx={{ color: 'text.primary', display: 'inline' }}
                                >
                                    How are you .. ?
                                </Typography>

                            </>
                        }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />

            </List>

        </Box>
    )
}
