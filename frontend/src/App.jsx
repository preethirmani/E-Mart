import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Navigations from './components/Navigations';
import SinlgeProduct from './components/SinlgeProduct';
import Login from './components/Login';
import Register from './components/Register';
import Cart from './components/Cart';
import Footer from './components/Footer';
import Checkout from './components/Checkout';

import './index.css';

function App() {
  const [token, setToken] = useState(null);
  const [products, setProducts] = useState([]);
  const [userinfo, setUserinfo] = useState('');
 
  
 
 
  return (
    <>
      <BrowserRouter>
        <Navigations token={token} userinfo={userinfo} setToken={setToken} setUserinfo={setUserinfo}/>
        <Routes>
          <Route path='/' element= {<Home token={token} 
          setProducts={setProducts}/>} />
          <Route path='/product/:id' element={<SinlgeProduct token={token}/>} />
          <Route path='/login' element={<Login setToken={setToken} setUserinfo={setUserinfo} />} />
          <Route path='/register' element={<Register />} />
          <Route path='/cart' element={<Cart products={products}/>} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
