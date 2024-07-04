import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router"

const React = require('react')

function GameDetails() {
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


    let comments = (
        <h3 className="inactive">
            No comments yet!
        </h3>
    )
    return (
            <main>
                <div className="row">
                    <div className="col-sm-6">
                        <h3>
                            {gameId}
                        </h3>
                        <p>
                            {comments}
                        </p>
                    </div>
                </div>
            </main>
    )
}


export default GameDetails