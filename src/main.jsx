import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom';
import { HomePage } from './pages/HomePage.jsx'
import { GeneradorTarjetas } from './components/Generador.jsx';
import { MiAMOR } from './components/Bin_Data.jsx';


import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/GeneradorTarjetas" element={<GeneradorTarjetas />} />
        <Route path="/Emilly<3" element={<MiAMOR/>} />
        {/* <Route path="/clientes" element={<Clientes />} /> */}
        {/* <Route path="/HistorialPedidos" element={<HistorialPedidos />} /> */}
      </Routes>
    </Router>
  </React.StrictMode>,
);