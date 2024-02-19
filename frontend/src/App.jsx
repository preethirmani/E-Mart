import { useState } from 'react'
import Home from './components/Home';
import Navbar from './components/Navbar';
import './index.css';

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <div>
        <Navbar />
        <Home />

       
      </div>
     
    </>
  )
}

export default App
