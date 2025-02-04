

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { StyledTooBar } from '../custom/StyledToolbar';
import { Badge, InputBase, Typography } from '@mui/material';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import { Search } from '../custom/Search';
import { Icons } from '../custom/Icons';
import NotificationsIcon from '@mui/icons-material/Notifications';
import messengerIcon from '../assets/icon.svg'
import { MessengerIcon } from '../custom/MessengerIcon';

export function Navbar() {
    return (
        <AppBar position="sticky" sx={{ mb: 2 }}>
            <StyledTooBar>
                <Typography sx={{ display: { xs: "none", sm: "flex" } }} variant='h6'>Facebook</Typography>
                <FacebookOutlinedIcon sx={{ display: { xs: "flex", sm: "none" } }} />
                <Search >
                    <InputBase placeholder='Search .... ' />
                </Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <NotificationsIcon />
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <img src={messengerIcon} alt="" />
                        <MessengerIcon />
                    </Badge>
                </Icons>
            </StyledTooBar>

        </AppBar>
    )
}
