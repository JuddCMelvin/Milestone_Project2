import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'
import logo from './logo.svg'

function Home() {
    return (
        <main>
            <h1>HOME</h1>
            <div >
                <img height="300" width="500" src="http://localhost:5000/images/gamecontroller.jpeg" alt="Chia Fruit Shake" />
                <div>
                    Photo by <a href="AUTHOR_LINK">Brenda Godinez</a> on <a href="UNSPLASH_LINK">Unsplash</a>
                </div>
            </div>
            <Link to="http://localhost:5000/games">
                <button className="btn-primary">games</button>
            </Link>
        </main>
    );
}

export default Home;