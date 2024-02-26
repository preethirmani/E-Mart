import { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Navigations from './components/Navigations';
import SinlgeProduct from './components/SinlgeProduct';
import Login from './components/Login';
import Register from './components/Register';
import Cart from './components/Cart';
import Footer from './components/Footer';

import './index.css';

function App() {
  const [token, setToken] = useState(null);
 
 
  return (
    <>
      <BrowserRouter>
        <Navigations />
        <Routes>
          <Route path='/' element= {<Home token={token}/>} />
          <Route path='/product/:id' element={<SinlgeProduct token={token}/>} />
          <Route path='/login' element={<Login setToken={setToken} />} />
          <Route path='/register' element={<Register />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/cart/:id' element={<Cart />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
