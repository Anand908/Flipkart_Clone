import { Box, Typography, styled } from '@mui/material';
import React from 'react';

const imgurl = 'https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90';

const Component = styled(Box)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    height: 65vh;
    width: 80%;
    background: #fff;
    & > img {
        width: 15%;
    }
`;
const Main = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80vh;
    width: 100%;
    b
`

const EmptyCart = () => {
    return ( 
        <Main>
            <Component>
                <img src={imgurl} alt="Empty Cart" />
                <Typography>Your Cart is Empty</Typography>
                <Typography>Add items to it now</Typography>
            </Component>
        </Main>
     );
}
 
export default EmptyCart;