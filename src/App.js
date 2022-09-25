import './App.css';

import { Routes, Route, BrowserRouter } from "react-router-dom";
//Pages
import Home from './pages/Home';
import Team from './pages/Team';

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <BrowserRouter>
          <Routes>
            <Route index pathname="/" element={<Home/>}/>
            <Route
              path="/equipo"
              element={<Team/>}
            />
          </Routes>
        </BrowserRouter>
      </section>
    </div>
  );
}

export default App;
