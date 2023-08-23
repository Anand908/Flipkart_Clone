import React from 'react';
import { Box, styled, Typography } from '@mui/material';

const Component = styled(Box)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 8vh;
    background: #fff;
    margin: 0 10px 10px 10px;
    & > p {
        font-size: 14px;
        font-weight: 600;
    }
`

const CopyRight = () => {
    return ( 
        <Component className="footer__copyright">
            <Typography>&copy; ANAND Flipkart Clone Project. All rights reserved.</Typography>
        </Component>
     );
}
 
export default CopyRight;