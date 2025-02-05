

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { StyledTooBar } from '../custom/StyledToolbar';
import { Avatar, Badge, InputBase, Typography } from '@mui/material';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import { Search } from '../custom/Search';
import { Icons } from '../custom/Icons';
import NotificationsIcon from '@mui/icons-material/Notifications';
import messengerIcon from '../assets/icon.svg'
import { Img } from '../custom/Img';
import { StyledBadge } from '../custom/StylesBage';
import profileImg from '../assets/3.jpg'
import { UserBox } from '../custom/UserBox';

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

                    </Badge>
                    <StyledBadge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        variant="dot"
                    >
                        <Avatar alt="Ammar" src={profileImg} />
                    </StyledBadge>
                </Icons>
                <UserBox>
                    <StyledBadge
                        overlap="circular"
                        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                        variant="dot"
                    >
                        <Avatar alt="Ammar" src={profileImg} />
                    </StyledBadge>
                    <Typography variant='h6'>Sara</Typography>
                </UserBox>



            </StyledTooBar>

        </AppBar>
    )
}
