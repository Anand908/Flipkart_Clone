import React from 'react';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";
import {bannerData} from '../../Constants/data';
import { styled } from '@mui/system';

const Banner = () => {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const Image = styled('img')(({theme}) => ({
        width: '100%',
        height: 280,
        [theme.breakpoints.down('md')]: {
            objectFit: 'cover',
            height: 180
        }
    }));

    return ( 
        <Carousel responsive={responsive}
        showDots={false}
        swipeable={false}
        draggable={false}
        infinite
        autoPlay={true}
        autoPlaySpeed={4000}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container">
            {
                bannerData.map(({id, url}) => {
                    return <Image src={url} alt="Banner" key={id}/>
                })
            }
        </Carousel>
     );
}
 
export default Banner;