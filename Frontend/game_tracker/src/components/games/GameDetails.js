import { useEffect, useState } from "react";
import { useParams } from "react-router";

const React = require('react');

function GameDetails() {
    const { gameId } = useParams();
    const [game, setGame] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:5000/games/${gameId}`);
            const resData = await response.json();
            setGame(resData);
        };
        fetchData();
    }, [gameId]);

    async function deleteGame() {
        await fetch(`http://localhost:5000/games/${gameId}`, {
            method: 'DELETE'
        });
    }

    if (!game) return <div>Loading...</div>;

    const reviews = game.reviews.map((review) => {
        return (
            <div key={review._id}>
                <h3 className="inactive">{review.author}</h3>
                <p>{review.content}</p>
                <p>Rating: {review.rating}</p>
            </div>
        );
    });

    return (
        <main>
            <div className="row">
                <div className="col-sm-6">
                    <h3>{game.title}</h3>
                    <p>{game.description}</p>
                    <div>
                        <h2>Reviews</h2>
                        {reviews}
                    </div>
                    <button type="button" className="btn btn-danger" onClick={deleteGame}>
                        Delete
                    </button>
                </div>
            </div>
        </main>
    );
}

export default GameDetails;
