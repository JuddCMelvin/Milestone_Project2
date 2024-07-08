import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import NavBar from '../NavBar';

function GamesIndex() {
	const [games, setGames] = useState([]);

	// FETCH all games from the server on component mount //
	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`http://localhost:5000/games`);
			const resData = await response.json();
			setGames(resData);
		};
		fetchData();
	}, []);

	// delete a game by its ID //
	const deleteGame = async (gameId) => {
		await fetch(`http://localhost:5000/games/${gameId}`, {
			method: 'DELETE',
		});

		// update state to remove the deleted game from the list //
		setGames(games.filter(game => game._id !== gameId));
	};

	// map through the games array and format each game for display //
	let gamesFormatted = games.map((game) => (
		<div className="col-sm-6" key={game._id}>
			<h2>
				<Link to={`/games/${game._id}`}>{game.title}</Link>
			</h2>
			<h4>
				<p>Platform: {game.platform}</p>
				<p>Status: {game.status}</p>
			</h4>
			{/* Link to edit the current game */}
			<Link to={`/games/${game._id}/edit`} className="btn btn-primary">
				<button type="button" className="editButton">Edit</button>
			</Link>
			{/* Button to delete the current game */}
			<button type="button" onClick={() => deleteGame(game._id)}>
				Delete
			</button>
		</div>
	));

	return (
		<div>
			<NavBar />
			<h1>Games</h1>
			<div className="row">
				{gamesFormatted}
			</div>
		</div>
	)
};

export default GamesIndex;

