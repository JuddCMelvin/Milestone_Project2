import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router"

const React = require('react')

function GameDetails({game}) {
    
    const { gameId } = useParams()
    
    const [games, setGames] = useState(null)

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