import { useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import Navigations from './components/Navigations';
import ProductDetails from './components/ProductDetails';
import Login from './components/Login';
import Register from './components/Register';
import Cart from './components/Cart';

import './index.css';

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <BrowserRouter>
        <Navigations />
        <Routes>
          <Route path='/' element= {<Home />} />
          <Route path='/product/:id' element={<ProductDetails />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
