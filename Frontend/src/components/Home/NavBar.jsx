import { Box, styled, Typography } from '@mui/material';
import React from 'react';
import { navData } from '../../Constants/data';

const NavBar = () => {

    const Component = styled(Box)(({ theme }) => ({
        display: 'flex',
        justifyContent: 'space-between',
        margin: '55px 130px 0 130px',
        background: '#fff',
        overflow: 'hidden',
        [theme.breakpoints.down('lg')]: {
            margin: '0'
        }
    }))
    const Container = styled(Box)`
        padding: 12px 8px;
        text-align: center;
        cursor: pointer;
        &:hover {
            color: #2874f0;
        }
    `
    const Text = styled(Typography)`
        font-size: 14px;
        font-weight: 600;
        font-family: inherit;
    `

    return ( 
        <Box style={{background: '#fff'}}>
            <Component>
                {
                    navData.map(({url, text}, id) => {
                        return(
                            <Container key={id}>
                                <img src={url} alt="" width={64}/>
                                <Text>{text}</Text>
                            </Container>
                        );
                    })
                }
            </Component>
        </Box>    
     );
}
 
export default NavBar;