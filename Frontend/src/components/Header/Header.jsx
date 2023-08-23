import React from 'react';
import { AppBar, Toolbar, Box, Typography, styled, IconButton, Drawer, List, ListItem } from '@mui/material';
import Search from './Search';
import CustomButtons from './CustomButtons';
import { Link } from 'react-router-dom';
import { Menu } from '@mui/icons-material';
import { useState } from 'react';
import LoginDialog from '../Login/LoginDialog';

const Header = () => {

    const StyledHeader = styled(AppBar)`
        background: #2874f0;
        height:55px
    `

    const Component = styled(Link)(({theme}) => ({
        marginLeft: '12%',
        lineHeight: 0,
        textDecoration: 'none',
        color: 'inherit',
        [theme.breakpoints.down('md')]: {
            marginLeft: '3%'
        }
    }))
    
    const MenuButton = styled(IconButton)(({theme}) => ({
        color: 'inherit',
        display: 'none',
        [theme.breakpoints.down('md')]: {
            display: 'block'
        }
    }));

    const SubHeading = styled(Typography)`
        font-size: 10px;
        font-style: italic;
    `
    const CustumButtonWrapper = styled(Box)(({theme})=>({
        margin: '0 5% 0 auto',
        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
    }));

    const PlusImage = styled('img')({
        width: 10,
        height: 10,
        marginLeft: 4
    });

    const [openDrawer, setopenDrawer] = useState(false);
    
    const [openLoginDialog, setopenLoginDialog] = useState(false);

    const handleopenDrawer = () => {
        setopenDrawer(!openDrawer);
    }

    const logoUrl = "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
    const subUrl = "https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png";

    const list = () => {
        return (
            <Box style={{width: 200}} >
                <List>
                    <ListItem button>
                        <CustomButtons setOpen={setopenLoginDialog} setopenDrawer={setopenDrawer}/>
                    </ListItem>
                </List>
            </Box>
        );
    }

    return ( 
        <div className="Header">
            <StyledHeader>
                <Toolbar style={{minHeight: 55}}>
                    <MenuButton onClick={handleopenDrawer}>
                        <Menu />
                    </MenuButton>

                    <Drawer open={openDrawer} onClose={handleopenDrawer}>
                        {list()}
                    </Drawer>

                    <Component to={'/'}>
                        <img src={logoUrl} alt="logo" width={75} />
                        <Box style={{display: 'flex'}}>
                            <SubHeading>Explore&nbsp; 
                                <Box component="span" style={{color: "#ffe500"}}>Plus</Box>
                            </SubHeading>
                            <PlusImage src={subUrl} alt="sublogo" />
                        </Box>
                    </Component>
                    <Search/>
                    <CustumButtonWrapper>
                        <CustomButtons setOpen={setopenLoginDialog}/>
                    </CustumButtonWrapper>
                </Toolbar>
                <LoginDialog open={openLoginDialog} setOpen={setopenLoginDialog}/>
            </StyledHeader>
        </div>
     );
}
 
export default Header;