import { Box, Button, styled, Typography } from '@mui/material';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeFromCart } from '../../redux/actions/cartActions';
import { addEllipsis } from '../../utils/common-utils';
import GroupedButton from './GroupedButton';

const Component = styled(Box)`
    border-top: 1px solid #f0f0f0;
    background: #fff;
    display: flex;
`
const LeftComponent = styled(Box)`
    display: flex;
    flex-direction: column;
    margin: 20px;
`;
const SmallText = styled(Typography)`
    color: #878787;
    font-size: 14px;
    margin-top: 10px;
`
const Remove = styled(Button)`
    margin-top: 16px;
    font-size: 16px;
    color: #000;
    font-weight: 600;
`
const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png'

const CartItem = ({item}) => {

    const dispatch = useDispatch();
    const removeItemFromCart = (id) => {
        dispatch(removeFromCart(id));
    }

    return ( 
        <Component>
            <LeftComponent>
                <Link to={`/products/${item.id}`} key={item.id} style={{textDecoration: 'none'}}>
                    <img src={item.url} alt={item.title.shortTitle} style={{height: 110, width: 110}}/>
                </Link>    
                <GroupedButton/>
            </LeftComponent>
            <Box style={{margin: 20}}>
                <Typography>{addEllipsis(item.title.longTitle)}</Typography>
                <SmallText>Seller: SuperComNet
                    <span><img src={fassured} alt="Assured" style={{width: 50, marginLeft: 10}} /></span>
                </SmallText>
                <Typography style={{margin: '20px 0'}}>
                    <Box component='span' style={{fontWeight: 600, fontSize: 18}}>₹{item.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                    <Box component='span' style={{color: '#878787'}}><strike>{item.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                    <Box component='span' style={{color: '#388E3C'}}>{item.price.discount}</Box>
                </Typography>
                <Remove onClick={() => removeItemFromCart(item.id)}>Remove</Remove>
            </Box>
        </Component>
     );
}
 
export default CartItem;