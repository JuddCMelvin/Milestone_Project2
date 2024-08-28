import '../App.css';
import React from 'react';


const Default = ({ children }) => {
    return (
        <html>
            <head>
                <title>Game Library</title>
            </head>
            <body>
                <nav>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/games">Games</a></li>
                        <li><a href="/games/new">Add Game</a></li>
                    </ul>
                </nav>
                {children}
            </body>
        </html>
    );
};

export default Default;