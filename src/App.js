import './App.css';

import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';

import { Routes, Route, BrowserRouter } from "react-router-dom";
//Pages
import Home from './pages/Home';
import Team from './pages/Team';

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Navbar/>
        <BrowserRouter>
          <Routes>
            <Route index pathname="/" element={<Home/>}/>
            <Route
              path="/equipo"
              element={<Team/>}
            />
          </Routes>
        </BrowserRouter>
        <Footer />
      </section>
    </div>
  );
}

export default App;
