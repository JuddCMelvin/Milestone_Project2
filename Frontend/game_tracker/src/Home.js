import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import logo from './logo.svg'

function Home() {
    return (
        <main>
            <h1 className="homeHeader">HOME</h1>
            <div>
                <img height="300" width="500" src="http://localhost:5000/images/gamecontroller.jpeg" alt="Chia Fruit Shake" />
                <p>
                    Welcome to Your Game Journal!
                    Track your progress, rate your games, 
                    and discover new adventures. Stay on top of your 
                    gaming life with Game Tracker.
                </p>
            </div>
        </main>
    );
}

export default Home;