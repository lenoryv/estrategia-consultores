import './Global.css';
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
import News from './pages/News';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index pathname="/" element={<Home />} />
          <Route path="/equipo" element={<Team />} />
          <Route path="/servicios" element={<Services />} />
          <Route path="/clientes" element={<Customers />} />
          <Route path="/encuesta" element={<Survey />} />
          <Route path="/pdf" element={<News />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </React.Fragment>
  );
}

export default App;
