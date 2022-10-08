import './App.css';
import React from "react";

import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';

import { Routes, Route, BrowserRouter } from "react-router-dom";
//Pages
import Home from './pages/Home';
import Team from './pages/Team';
import Services from './pages/Services';
import Customers from './pages/Customers';
import Survey from './pages/Survey';

function App() {
  return (
    <React.Fragment>
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route index pathname="/" element={<Home />} />
            <Route path="/equipo" element={<Team />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/clientes" element={<Customers />} />
            <Route path="/encuesta" element={<Survey />} />
          </Routes>
        </BrowserRouter>
        <Footer />
    </React.Fragment>
  );
}

export default App;
