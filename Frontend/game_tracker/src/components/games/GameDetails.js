import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import NavBar from '../NavBar';

function GameDetails() {
    const { gameId } = useParams();
    const [game, setGame] = useState(null);

    // FETCH game details based on gameId from the URL params //
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch(`http://localhost:5000/games/${gameId}`);
            const resData = await response.json();
            setGame(resData);
        };
        fetchData();
    }, [gameId]);

    // delete the game by ID //
    async function deleteGame() {
        await fetch(`http://localhost:5000/games/${gameId}`, {
            method: 'DELETE'
        });
        window.location.href = '/games'; // redirect to /games after deletion //
    }

    // delete a review //
    async function deleteReview(reviewId) {
        await fetch(`http://localhost:5000/games/${gameId}/review/${reviewId}`, {
            method: 'DELETE'
        });
        // refresh game details after deleting the review //
        const response = await fetch(`http://localhost:5000/games/${gameId}`);
        const resData = await response.json();
        setGame(resData);
    }

    // loading sign //
    if (!game) return <div>Loading...</div>;

    // maps through the reviews array and create elements for each review //
    const reviews = game.reviews.map((review) => (
        <div key={review._id}>
            <h3 className="inactive">{review.author}</h3>
            <p>{review.review}</p>
            <p>Rating: {review.rating}</p>
            <Link to={`/games/${gameId}/review/${review._id}/edit`}>Edit Review</Link>
            <button onClick={() => deleteReview(review._id)}>Delete Review</button>
        </div>
    ));

    // to the NewReviewForm page //
    function redirectToNewReview() {
        window.location.href = `/games/${gameId}/review`; // useHistory? //
    }

    return (
        <main>
            <NavBar />
            <div className="row">
                <div>
                    <h3>{game.title}</h3>
                    <p>{game.description}</p>
                    {game.image && (
                        <div>
                            <img src={game.image} alt={`${game.title} cover`} style={{ maxWidth: '100%' }} />
                        </div>
                    )}
                    <div>
                        <h2>Reviews</h2>
                        {reviews}
                    </div>
                    <button type="button" onClick={deleteGame}>
                        Delete
                    </button>
                </div>
                <div>
                    <button type="button" onClick={redirectToNewReview}>Add Review</button>
                </div>
            </div>
        </main>
    )
};

export default GameDetails;