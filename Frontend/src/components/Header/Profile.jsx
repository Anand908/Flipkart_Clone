import React from 'react';
import { Box, Typography, Menu, MenuItem, styled } from '@mui/material';
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';

const Profile = ({setopenDrawer, account, setAccount}) => {

    const [open, setOpen] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
    }

    const MenuComponent = styled(Menu)`
        margin-top: 5px;
    `
    const logout = () => {
        setAccount('');
    }

    return ( 
        <>
            <Box onClick={(event) => setOpen(event.currentTarget)} ><Typography>{account}</Typography></Box>
            <MenuComponent
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
            >
                <MenuItem onClick={() => { handleClose(); logout();setopenDrawer(false);}} style={{display: 'flex', gap: '0.5rem'}}>
                    <PowerSettingsNewIcon color='primary' fontSize='small'/>
                    <Typography>Logout</Typography>
                </MenuItem>
            </MenuComponent>
        </>
     );
}
 
export default Profile;