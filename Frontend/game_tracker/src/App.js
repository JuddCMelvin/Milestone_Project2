import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Home'
import Index from './components/games/gamesIndex.js'
import NewGame from './components/games/NewGame.js'
import EditGameForm from './components/games/EditGameForm.js'
import NewReviewForm from './components/games/NewReview.js'
import EditReview from './components/games/EditReview.js'
import GameDetails from './components/games/GameDetails.js'

function App() {

  return (
    <div className="App">
      <Router>
        <div className="display">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<Index />} />
            <Route exact path="/games/new" element={<NewGame />} />
            <Route exact path="/games/:gameId" element={<GameDetails />} />
            <Route exact path="/games/:gameId/edit" element={<EditGameForm />} />
            <Route exact path="/games/:gameId/review" element={<NewReviewForm />} />
            <Route exact path="/games/:gameId/review/:reviewId/edit" element={<EditReview />} />
          </Routes>
        </div>
      </Router>
    </div>
  )
};

export default App;





