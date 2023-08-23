import { Box, styled, Table, TableBody, TableCell, TableRow, Typography } from '@mui/material';
import Badge from '@mui/icons-material/LocalOffer';
import { useEffect } from 'react';

const fassured = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png';

const SmallText = styled(Box)`
    & > p {
        display: flex;
        gap: 10px;
        font-size: 14px;
        margin-top: 10px;
    }
    & > p > svg {
        color: #00cc00;
        font-size: 15px;
    }
`
const ColumnText = styled(TableRow)`
    vertical-align: baseline;
    & > td {
        font-size: 14px;
        border: none;
    }
`

const adURL = 'https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50';

const ProductDetail = ({product}) => {

    const date = new Date(new Date().getTime()+(5*24*60*60*1000));

    useEffect(() => {
        document.title = product.title.longTitle;
    })

    return ( 
        <Box style={{padding: '0 30px'}}>
            <Typography>{product.title.longTitle}</Typography>
            <Typography style={{marginTop: 5, color: '#878787', fontSize: 14}}>
                8 Ratings & 1 Reviews
                <Box component='span'>
                    <img src={fassured} alt="Assured" style={{width: 77, marginLeft: 20}} />
                </Box>
            </Typography>
            <Typography>
                <Box component='span' style={{fontSize: 28}}>₹{product.price.cost}</Box>&nbsp;&nbsp;&nbsp;
                <Box component='span' style={{color: '#878787'}}><strike>{product.price.mrp}</strike></Box>&nbsp;&nbsp;&nbsp;
                <Box component='span' style={{color: '#388E3C'}}>{product.price.discount}</Box>
            </Typography>
            <Typography>Available offers</Typography>
            <SmallText>
                <Typography><Badge/> Bank Offer10% off on SBI Credit Card, up to ₹1500. On orders of ₹5000 and aboveT&C</Typography>
                <Typography><Badge/> Bank Offer10% off on SBI Credit Card EMI Transactions, up to ₹2000. On orders of ₹5000 and aboveT&C</Typography>
                <Typography><Badge/> Bank Offer5% Cashback on Flipkart Axis Bank CardT&C</Typography>
                <Typography><Badge/> Combo OfferBuy 3 items save 5%; Buy 4 save 7%; Buy 5+ save 10%T&C</Typography>
                <Typography><Badge/> Special PriceGet extra 15% off (price inclusive of cashback/coupon)T&C</Typography>
            </SmallText>
            <Table>
                <TableBody>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Delivery</TableCell>
                        <TableCell style={{ fontWeight: 600 }}>Delivery By {date.toDateString()} | ₹40</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Warranty</TableCell>
                        <TableCell>1 Year Warranty</TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Seller</TableCell>
                        <TableCell>
                            <Box component="span" style={{color: '#2874f0'}}>Super ComNet</Box>
                            <Typography>GST invoice available</Typography>
                            <Typography>View more sellers starting from ₹{product.price.cost}</Typography>
                        </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell colSpan={2}>
                            <img src={adURL} alt="super coin" width={390} />
                        </TableCell>
                    </ColumnText>
                    <ColumnText>
                        <TableCell style={{ color: '#878787' }}>Description</TableCell>
                        <TableCell>{product.description}</TableCell>
                    </ColumnText>
                </TableBody>
            </Table>
        </Box>
     );
}
 
export default ProductDetail;