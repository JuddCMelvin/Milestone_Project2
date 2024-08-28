import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function GamesIndex() {
	const [games, setGames] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`http://localhost:5000/games`);
			const resData = await response.json();
			setGames(resData);
		};
		fetchData();
	}, []);

	const deleteGame = async (gameId) => {
		await fetch(`http://localhost:5000/games/${gameId}`, {
			method: 'DELETE',
		});
		// Refresh the game list after deletion
		setGames(games.filter(game => game._id !== gameId));
	};

	let gamesFormatted = games.map((game) => {
		return (
			<div className="col-sm-6" key={game._id}>
				<h2>
					<Link to={`/games/${game._id}`}>{game.title}</Link>
				</h2>
				<h4>
					<p>Platform: {game.platform}</p>
					<p>Status: {game.status}</p>
					<p>Rating: {game.rating}</p>
				</h4>
				<Link to={`/games/${game._id}/edit`} className="btn btn-primary">
					<button type="button" Edit></button>
				</Link>
				<button type="button" className="btn btn-danger" onClick={() => deleteGame(game._id)}>
					Delete
				</button>
			</div>
		);
	});

	return (
		<div>
			<h1>Games to Play</h1>
			<div className="row">
				{gamesFormatted}
			</div>
		</div>
	);
}

export default GamesIndex;
