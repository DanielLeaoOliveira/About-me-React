import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/css/index.css';

import { useState } from 'react'
import { Rotas } from './rotas/Rotas'
import { Footer } from './components/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <BrowserRouter>
          <Rotas />
        </BrowserRouter>
    </>
  )
}

export default App
