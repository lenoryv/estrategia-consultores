import './App.css';

import { Footer } from './components/Footer';
import { Navbar } from './components/Navbar';
//Pages
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Navbar/>
        <Home/>
        <Footer/>
      </section>
    </div>
  );
}

export default App;
