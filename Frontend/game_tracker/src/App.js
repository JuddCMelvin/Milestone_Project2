import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import MyGames from './components/MyGames'
import Games from './components/Games'
import Home from './components/Home'


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
                <Link to="/Games">Games</Link>
              </li>
              <li>
                <Link to="/MyGames">MyGames</Link>
              </li>
            </ul>
          </div>
          <h1 className="title">GameTracker</h1>
        </header>
        <div className="display">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<Games />} />
            <Route path="/mygames" element={<MyGames />} />
            {/* <Route path="/packages" render={() => <MyGames games={games}/>}  /> */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;





