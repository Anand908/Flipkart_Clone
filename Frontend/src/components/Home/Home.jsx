import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import Banner from './Banner';
import NavBar from './NavBar';
import { styled } from '@mui/material'
import { getProducts } from '../../redux/actions/productActions';
import { useDispatch, useSelector } from 'react-redux';
import Slide from './Slide';
import MidSlide from './MidSlide';
import MidSection from './MidSection';

const Home = () => {
    
    const Container = styled(Box)`
        padding: 10px;
        background: #f2f2f2;
    `
    const { products } = useSelector(state => state.getProducts);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProducts());
        document.title = "Flipkart Clone || Create By Anand";
    }, [dispatch])

    return ( 
        <Box>
            <NavBar/>
            <Container>
                <Banner />
                <MidSlide products={products} title="Deal of the Day"/>
                <MidSection />
                <Slide products={products} title="Discounts for You"/>
                <Slide products={products} title="Suggesting Items"/>
                <Slide products={products} title="Top Selections"/>
                <Slide products={products} title="Recommended Items"/>
                <Slide products={products} title="Trending Offers"/>
                <Slide products={products} title="Season's top picks"/>
                <Slide products={products} title="Top Deals on Accessories"/>
            </Container>
        </Box>
     );
}
 
export default Home;