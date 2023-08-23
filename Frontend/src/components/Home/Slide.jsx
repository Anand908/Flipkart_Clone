import { Box, Typography, styled, Button, Divider } from '@mui/material';
import React from 'react';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import Countdown from 'react-countdown';
import { Link } from 'react-router-dom';

const timerURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg';

const Slide = ({products, title}) => {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const Component = styled(Box)`
        margin-top: 10px;
        background: #fff;
    `
    const Deal = styled(Box)`
        display: flex;
        align-items: center;
        padding: 15px 20px;
        & > p {
            
        }
        & > div {
            display: flex;
            margin-left: 10px;
            gap: 0.5rem;
            color: #7f7f7f;
        }
        & > div > img {
            width: 24px;
        }
        & > button {
            margin-left: auto;
            font-size: 13px;
            font-weight: 600;
        }
    `
    const SliderTitle = styled(Typography)(({theme}) => ({
        fontSize: '22px',
        fontWeight: 600,
        marginRight:'25px',
        lineHeight: '32px',
        [theme.breakpoints.down('md')]: {
            fontSize: '20px',
            marginRight:'10px',
        }
    }));

    const ProductContainer = styled(Box)`
        text-align: center;
        padding: 25px 15px;
        & > img {
            width: auto;
            height: 150px;
        }
        & > p {
            font-size: 14px;
            margin-top: 5px;
        }
    `

    const renderer = ({hours, minutes, seconds}) => {
        return <Box variant="span">{hours} : {minutes} : {seconds} Left</Box>
    }

    return ( 
        <Component>
            <Deal>
                <SliderTitle>{title}</SliderTitle>
                {
                    title === "Deal of the Day" &&
                    <Box>
                        <img src={timerURL} alt="clock" />
                        <Countdown date={Date.now() + 5.04e+7} renderer={renderer}/>
                    </Box>
                }
                <Button variant='contained' color='primary'>View All</Button>
            </Deal>
            <Divider/>
            <Carousel 
            responsive={responsive}
            swipeable={false}
            draggable={false}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={4000}
            keyBoardControl={true}
            centerMode={true} 
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
            containerClass="carousel-container">
                {
                    products.map(product => {
                        return (
                            <Link to={`/products/${product.id}`} key={product.id} style={{textDecoration: 'none'}}>
                                <ProductContainer>
                                    <img src={product.url} alt="product" />
                                    <Typography style={{fontWeight: 600, color: '#212121'}}>{product.title.shortTitle}</Typography>
                                    <Typography style={{color: 'green'}}>{product.discount}</Typography>
                                    <Typography style={{color: '#212121', opacity: '0.6'}}>{product.tagline}</Typography>
                                </ProductContainer>
                            </Link>
                        )
                    })
                }
            </Carousel>
        </Component>
     );
}
 
export default Slide;