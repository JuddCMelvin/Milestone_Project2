import React from 'react';
import { Link } from 'react-router-dom'; // imports Link from react-router-dom //
import './App.css';

function Home() {
    return (
<<<<<<< HEAD
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
=======
        <div>
            <main>
                <h1>WELCOME!</h1>
                <div>
                    <Link to="/games">
                        <img src="/gameZone.png" alt="game zone sign" height="300" width="300" />
                    </Link>
                    <p>
                        Track your progress, rate your favorite games, and revisit your gaming highlights. Level up your gaming experience and stay in control of your gaming life with Game Zone!
                    </p>
                </div>
            </main>
        </div>
    )
};
>>>>>>> f50f7029601b575d913a8806f9bb3ba6c64a7a93

export default Home;