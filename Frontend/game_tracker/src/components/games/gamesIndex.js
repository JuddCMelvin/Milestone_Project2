import { useEffect, useState } from "react";
import { useHistory} from 'react'; 
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'

function GamesIndex(data) {
	
	const [games, setGames] = useState([])

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`http://localhost:5000/gamesTest`)
			const resData = await response.json()
			setGames(resData)
		}
		fetchData()
	}, [])

	let gamesFormatted = games.map((game) => {
		return (
			<div className="col-sm-6" key={game.gameId}>
				<h2>
                    <button className="btn-primary">{game.name}</button>
				</h2>
				{/* <img style={{ maxWidth: 200 }} src={place.pic} alt={place.name} />
				<p className="text-center">
					Located in {place.city}, {place.state}
				</p> */}
			</div>
		)
	})
	return (
		<main>
			<h1>Games to Play</h1>
			<div className="row">
				{gamesFormatted}
			</div>
		</main>
	)
}

export default GamesIndex;