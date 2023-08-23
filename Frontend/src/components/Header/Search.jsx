import { InputBase, Box, styled, List, ListItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getProducts } from '../../redux/actions/productActions';
import { Link } from 'react-router-dom';
import './Search.css';

const Search = () => {

    {/*const SearchContainer = styled(Box)(({theme}) => ({
        background: '#fff',
        width: '38%',
        borderRadius: '2px',
        marginLeft: '10px',
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.down('md')] : {
            width: '60%',
        }
    }));

    const InputSearchbase = styled(InputBase)(({theme}) => ({
        paddingLeft: '20px',
        width: '100%',
        [theme.breakpoints.down('md')]: {
            fontSize: '15px'
        }
    }))
        
    const SearchIconWrapper = styled(Box)`
        display:flex;
        justify-content: center;
        align-items: center;
        color: blue;
        padding: 5px;
`*/}
    const ListWrapper = styled(List)`
        position: absolute;
        background: #fff;
        color: #000;
        margin-top: 45px;
    `
    const [text, setText] = useState('');

    const getText = (e) => {
        setText(e.target.value);
    }

    const { products } = useSelector (state => state.getProducts);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    return ( 
        <div className='SearchContainer'>
            <div className='SearchIconWrapper'>
                <InputBase
                className='InputSearchbase' 
                placeholder='Search For Products brands and more'
                onChange={(e) => getText(e)}/>
                <SearchIcon color='blue'/>
            </div>
            {
                text && 
                <ListWrapper>
                    {products.filter(product => product.title.longTitle.toLowerCase()
                    .includes(text.toLowerCase()))
                    .map(product => {
                        return (
                                <ListItem button>
                                    <Link to={`/products/${product.id}`} 
                                    key={product.id} 
                                    style={{textDecoration: 'none', color: '#000'}}
                                    onClick={(e) => setText('')}>
                                        {product.title.longTitle}
                                    </Link>
                                </ListItem>
                        );
                    })}
                </ListWrapper>
            }
        </div>
     );
}
 
export default Search;