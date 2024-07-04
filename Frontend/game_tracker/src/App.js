import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import logo from './logo.svg'
import './App.css'
import Home from './Home'
import Index from './components/games/gamesIndex.js'
import NewGame from './components/games/NewGame.js'
import EditGameForm from './components/games/EditGameForm.js'
import Error404 from './Error404'
import { Fragment } from 'react'
import { useState, useEffect } from 'react'
import GameDetails from './components/games/GameDetails.js'

function App() {

  return (
    <div className="App">
      <Router>
        <div className="display">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<Index />} />
            {/* <Route path="/" element={Error404} /> */}
            {/* <Route exact path="/games/new" ele={gameIndex} /> */}
            <Route exact path="/games/new" element={<NewGame />} />
            <Route exact path="/games/:gameId" element={<GameDetails />} />
            <Route exact path="/games/:gameId/edit" element={<EditGameForm />} />
            {/* <Route exact path="/games/:gameId/edit" component={GamePlaceForm} /> */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;





