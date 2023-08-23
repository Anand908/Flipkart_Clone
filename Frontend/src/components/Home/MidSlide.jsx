import { Box, styled } from '@mui/material';
import React from 'react';
import Slide from './Slide';

const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';

const Component = styled(Box)(({ theme }) => ({
    display: 'grid',
    gridTemplateColumns: '83% 17%',
    gap: '10px',
    [theme.breakpoints.down('md')]: {
        gridTemplateColumns: '100%',
    }
}))
const RightComponent = styled(Box)(({ theme }) => ({
    background: '#fff',
    padding: '5px',
    marginTop: '10px',
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}))

const MidSlide = ({products, title}) => {
    return ( 
        <Component>
            <Box>
                <Slide products={products} title={title}/>
            </Box>
            <RightComponent>
                <img src={adURL} alt="Add Poster" width='217px'/>
            </RightComponent>
        </Component>
     );
}
 
export default MidSlide;