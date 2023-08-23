import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProductDetail } from '../../redux/actions/productActions';
import { Box, Grid, styled} from '@mui/material';
import ActionItem from './ActionItem';
import ProductDetail from './ProductDetail';

const Component = styled(Box)`
    background: #f2f2f2;
    & > div {
        background: #fff;
        display: flex;
    }
`
const RightContainer = styled(Grid)`
    margin-top: 50px;
`

const DetailView = () => {

    const dispatch = useDispatch();
    const { id } = useParams();

    const { loading, product} = useSelector(state => state.getProductDetails);

    useEffect(() => {
        if(product && id !== product.id)
            dispatch(getProductDetail(id));
    },[dispatch, id, product, loading])

    return ( 
        <Component>
            {
                product && Object.keys(product).length &&
                <Grid container>
                    <Grid item lg={4} md={4} sm={8} xs={12}>
                        <ActionItem product={product}/>
                    </Grid>
                    <RightContainer item lg={8} md={8} sm={8} xs={12}>
                        <ProductDetail product={product}/>
                    </RightContainer>
                </Grid>
            }
        </Component>
     );
}
 
export default DetailView;