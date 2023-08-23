import { Grid, styled } from '@mui/material';
import React from 'react';
import { imageURL } from '../../Constants/data';

const url = 'https://rukminim1.flixcart.com/flap/3006/433/image/4789bc3aefd54494.jpg?q=50';

const MidSection = () => {

    const Image = styled('img')(({ theme }) => ({
        marginTop: '10px',
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        [theme.breakpoints.down('md')]: {
            objectFit: 'cover',
            height: 120
        }
    }))

    return ( 
        <>
            <Grid container
            style={{marginTop: '10px'}}>
                {
                    imageURL.map((image, id) => {
                        return (
                            <Grid item lg={4} sm={4} xs={12} key={id}>
                                <img src={image} alt="Simple banner" width="100%"/>
                            </Grid>
                        )
                    })
                }
            </Grid>
            <Image src={url} alt="covid"/>
        </>
     );
}
 
export default MidSection;