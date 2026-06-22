import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { useState } from 'react'
import { Rotas } from './rotas/Rotas'
import { Footer } from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='container mt-5'>
        <BrowserRouter>
          <Rotas />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
