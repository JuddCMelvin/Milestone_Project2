import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
            <header>
                <div className="navBar">
                    <ul>
                      <li>
                      <Link to="/">Home</Link>
                      </li>
                      <li>
                      <Link to="/about">About Us</Link>
                      </li>
                      <li>
                      <Link to="/packages">Our Packages</Link>
                      </li>
                    </ul>
                </div>
            </header>
        
        <div className="display">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/packages" element={<Packages />} />
            </Routes>
        </div>
        
        
        </Router>
      </div>
  );
}

export default App;
