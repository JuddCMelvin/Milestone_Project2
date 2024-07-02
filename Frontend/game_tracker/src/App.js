import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import Games from './components/MyGames'
import Home from './components/Home'


function App() {
  
  // const games = ['Activate your Crystals', 'Monkey Meditation', 'Soak in the Hotsprings', 'Hypnotherapy', 'Mineral Bath']


  return (
    <div className="App">
      <Router>
        <header>
          <h1 className="title">GameTracker</h1>
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
        </header>
        <div className="display">
          <Routes>
            <Route path="/" component={Home} />
            <Route path="/games" component={Games} />
            {/* <Route path="/packages" render={() => <MyGames games={games}/>}  /> */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;





