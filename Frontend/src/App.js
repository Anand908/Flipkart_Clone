// Components
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import DataProvider from './components/Context/Context';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DetailView from './components/Detail/DetailView';
import { Box } from '@mui/material';
import CopyRight from './components/Home/CopyRight';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header/>
        <Box style={{marginTop: 54}}>
          <Routes>
            <Route path='/' element={ <Home/> }/>
            <Route path='/products/:id' element={ <DetailView/> } />
            <Route path='/cart' element={ <Cart/> } />
          </Routes>
          <CopyRight />
        </Box> 
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
