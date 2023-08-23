import { Box, Button, Typography, styled, Badge } from '@mui/material';
import React, { useContext } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { DataContext } from '../Context/Context';
import Profile from './Profile';
import { useNavigate } from 'react-router-dom'; 
import { useSelector } from 'react-redux';

const CustomButtons = ({setOpen, setopenDrawer}) => {

    const Wrapper = styled(Box)(({theme}) => ({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '& > button, p, & > div': {
            marginRight: '20px',
            fontSize: '15px',
            fontWeight: 550,
            cursor: 'pointer'
        },
        [theme.breakpoints.down('md')]: {
            display: 'block'
        }
    }));
        
    const Loginbutton = styled(Button)`
        color: #2874f0;
        background: #fff;
        padding: 5px 40px;
        border-radius: 2px;
        box-shadow: none;
        font-weight: 600;
        text-transform: none;
        height: 32px;
        margin-left: 10px;
        &:hover {
            color: #2874f0;
            background: #fff;
        }
    `
    const { account, setAccount } = useContext(DataContext);

    const navigate = useNavigate();

    const showCart = () => {
        navigate('/cart');
        setopenDrawer(false);
    }

    const {cartItems} = useSelector(state => state.cart);

    const loginDialog = () => {
        setOpen(true); 
        setopenDrawer(false);
    }

    return ( 
        <Wrapper>
            {
                account ? 
                    <Profile setopenDrawer={setopenDrawer} account={account} setAccount={setAccount} />
                :
                    <Loginbutton variant='contained' onClick={loginDialog}>Login</Loginbutton>
            }

            <Typography onClick={() => setopenDrawer(false)}>Become a Seller</Typography>
            <Typography onClick={() => setopenDrawer(false)}>More</Typography>

            <Wrapper onClick={showCart}>
                <Badge badgeContent={cartItems.length} color='secondary'>
                    <ShoppingCartIcon/>
                </Badge>
                <Typography style={{marginLeft: 10}}>Cart</Typography>
            </Wrapper>
        </Wrapper>
     );
}
 
export default CustomButtons;