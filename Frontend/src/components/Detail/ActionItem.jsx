import { Box, Button, styled } from '@mui/material';
import React, { useState } from 'react';
import Cart from '@mui/icons-material/ShoppingCart';
import Flash from '@mui/icons-material/FlashOn';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';
import { payUsingPaytm } from '../../Service/api';
import { post } from '../../utils/paytm';

const LeftContainer = styled(Box)(({theme}) => ({
    minWidth: '40%',
    padding: '40px 0 0 80px',
    [theme.breakpoints.down('lg')]: {
        padding: '20px 40px'
    }    
}));
const ButtonStyle = styled(Button)(({ theme }) => ({
    width: '48%',
    height: '50px',
    marginTop: '10px',
    [theme.breakpoints.down('lg')]: {
        width: '46%'
    },
    [theme.breakpoints.down('sm')]: {
        width: '48%'
    }
}))
const Image = styled('img')({
    padding: '15px',
    width: '95%'
})

const ActionItem = ({product}) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1);

    const addItemToCart = () => {
        setQuantity(1);
        dispatch(addToCart(product.id, quantity));
        navigate('/cart');
    }

    const buyNow = async () => {
        let response = await payUsingPaytm({amount: 500, email: 'anandk212307@gmail.com'})
        let information = {
            action:'https://securegw-stage.paytm.in/order/proccess',
            params: response
        }
        post(information);
    }

    return ( 
        <LeftContainer>
            <Box style={{ padding: '15px 20px', border: '1px solid #f0f0f0'}}>
                <Image src={product.detailUrl} alt="Product" />
            </Box>    
            <ButtonStyle onClick={addItemToCart} variant='contained' style={{marginRight: 10, background: '#ff9f00'}}><Cart/>Add to Cart</ButtonStyle>
            <ButtonStyle onClick={buyNow} variant='contained' style={{background: '#fb541b'}}><Flash/>Buy Now</ButtonStyle>
            
        </LeftContainer>
     );
}
 
export default ActionItem;