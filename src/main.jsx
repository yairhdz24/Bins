import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { BinCheck } from './pages/BinCheck.jsx'
import { HomePage1 } from './pages/HomePage1.jsx'
import { GeneradorTarjetas } from './pages/Generador.jsx';
import { MiAMOR } from './components/Bin_Data.jsx';
import { ToastContainer } from 'react-toastify';


import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage1 />} />
        <Route path="/GeneradorTarjetas" element={<GeneradorTarjetas />} />
        <Route path="/BinChecker" element={<BinCheck />} />
        <Route path="/Emilly<3" element={<MiAMOR/>} />
        {/* <Route path="/clientes" element={<Clientes />} /> */}
        {/* <Route path="/HistorialPedidos" element={<HistorialPedidos />} /> */}
      </Routes>
      <ToastContainer />
    </Router>
  </React.StrictMode>,
);