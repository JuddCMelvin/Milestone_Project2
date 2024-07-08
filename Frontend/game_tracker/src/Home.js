import React from 'react';
import { Link } from 'react-router-dom'; // imports Link from react-router-dom //
import './App.css';

function Home() {
    return (
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

export default Home;