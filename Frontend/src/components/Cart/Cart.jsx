import { Box, Button, Grid, styled, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { payUsingPaytm } from '../../Service/api';
import { post } from '../../utils/paytm';
import CartItem from './CartItem';
import EmptyCart from './EmptyCart';
import TotalBalance from './TotalBalance';

const Container = styled(Grid)(({theme}) => ({
    padding: '30px 80px',
    [theme.breakpoints.down('md')]: {
        padding: '15px 5px',
        gap: 15
    }
}))
const Header = styled(Box)`
    padding: 15px 24px;
    background: #fff;
    & > p {
        font-weight: 600;
    }
`
const ButtonWrapper = styled(Box)`
    display: flex;
    justify-content: right;
    padding: 16px 22px;
    background: #fff;
    box-shadow:0 -2px 10px 0 rgb(0 0 0 / 10%);
    border-top: 1px solid #f0f0f0;
    & > Button {
        background: #fb641b;
        padding: 10px 50px;
        font-weight: 600;
    }
    & > Button:hover {
        background: #fb641b;
    }
`
const LeftContainer = styled(Grid)(({theme}) => ({
    paddingRight: 10,
    [theme.breakpoints.down('md')]: {
        paddingRight: 0
    }
}))

const Cart = () => {
    
    const buyNow = async () => {
        let response = await payUsingPaytm({amount: 500, email: 'anandk212307@gmail.com'})
        let information = {
            action:'https://securegw-stage.paytm.in/order/proccess',
            params: response
        }
        post(information);
    }

    const { cartItems } = useSelector(state => state.cart);

    useEffect(() => {
        document.title = "Shopping Cart | AnandFlipkartClone.com ";
    })

    return ( 
        <>
            {
                cartItems.length ? 
                    <Container container>
                        <LeftContainer item lg={9} md={9} sm={12} xs={12}>
                            <Header>
                                <Typography>My Cart({cartItems.length})</Typography>
                            </Header>
                            {
                                cartItems.map(item => {
                                    return <CartItem item={item} key={item.id}/>
                                })
                            }
                            <ButtonWrapper>
                                <Button onClick={buyNow} variant='contained'>Place Order</Button>
                            </ButtonWrapper>
                        </LeftContainer>
                        <Grid item lg={3} md={3} sm={12} xs={12}>
                            <TotalBalance cartItems={cartItems}/>
                        </Grid>
                    </Container>
                :
                    <EmptyCart/>   
            }
        </>
     );
}
 
export default Cart;