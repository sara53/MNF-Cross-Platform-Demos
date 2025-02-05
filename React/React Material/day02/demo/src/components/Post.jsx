import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from '@mui/material'
import { red } from '@mui/material/colors'
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import post1 from '../assets/post1.jpg'
import profile1 from '../assets/1.jpg'
import React from 'react'
import { Img } from '../custom/Img';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
export function Post( { post } ) {
    return (
        <Card sx={{ marginBottom: 3 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: red[ 500 ] }} aria-label="recipe">
                        <Img src={post.profileImg} />
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={post.name}
                subheader="September 14, 2016"
            />
            <CardMedia
                component="img"
                height="400"
                image={post.postImg}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    This impressive paella is a perfect party dish and a fun meal to cook
                </Typography>
            </CardContent>
            <CardActions disableSpacing>

                <IconButton aria-label="Like btn">
                    <ThumbUpIcon color='primary' />
                </IconButton>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon color="error" />
                </IconButton>
                <IconButton aria-label="Smile">
                    <SentimentVerySatisfiedIcon color="warning" />
                </IconButton>
                <Box sx={{ flexGrow: 1 }}></Box>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>

            </CardActions>

        </Card>
    )
}
