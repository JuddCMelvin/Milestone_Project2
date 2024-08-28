<<<<<<< HEAD
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router"

const React = require('react')
=======
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import NavBar from '../NavBar';
>>>>>>> f50f7029601b575d913a8806f9bb3ba6c64a7a93

function GameDetails({game}) {
    
    const { gameId } = useParams()
    
    const [games, setGames] = useState(null)

<<<<<<< HEAD
	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`http://localhost:5000/games/${gameId}`)
			const resData = await response.json()
			setGames(resData)
		}
		fetchData()
	}, [gameId])

    async function deletePlace() {
		await fetch(`http://localhost:5000/games/${gameId}`, {
			method: 'DELETE'
		})
	}

    const reviews = game.reviews.map (c => {
        return (
            <div key={c._Id}>
                <h3 className="inactive">
                    {c.author}
                </h3>
        </div>
        )
    }
        
    )
    // let reviewsFormatted = reviews.map((review) => {
	// 	return (
	// 		<div className="col-sm-6" key={review.gameId}>
	// 			<h2>
    //             {review.auther}
	// 			</h2>
    //             <p>
    //                 {review.content}
    //             </p>
    //             <p>
    //                 {review.rating}
    //             </p>
	// 			{/* <img style={{ maxWidth: 200 }} src={place.pic} alt={place.name} />
	// 			<p className="text-center">
	// 				Located in {place.city}, {place.state}
	// 			</p> */}
	// 		</div>
	// 	)
	// })
    return (
            <main>
                <div className="row">
                    <div className="col-sm-6">
                        <h3>
                            {gameId}
                        </h3>
                        <p>
                            {reviews}
                            <button type="submit" className="btn btn-danger" onClick={deletePlace}>
						        Delete
					        </button>
                        </p>
                    </div>
                </div>
            </main>
    )
}


export default GameDetails
=======
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
>>>>>>> f50f7029601b575d913a8806f9bb3ba6c64a7a93
