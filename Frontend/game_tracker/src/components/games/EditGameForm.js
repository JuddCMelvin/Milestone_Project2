import { useState, useEffect } from "react";
import { useParams } from "react-router";
import NavBar from '../NavBar';

function EditGameForm() {
	const { gameId } = useParams();
	const [game, setGame] = useState({
		title: '',
		platform: '',
		status: '',
		image: '',
	});

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`http://localhost:5000/games/${gameId}`);
			const resData = await response.json();
			setGame(resData);
		};
		fetchData();
	}, [gameId]);

	async function handleSubmit(e) {
		e.preventDefault();

		await fetch(`http://localhost:5000/games/${gameId}`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(game)
		});

		window.location.href = `/games/${gameId}`;
	}

	return (
		<main>
			<NavBar />
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="title">Game Name</label>
					<input
						required
						value={game.title}
						onChange={e => setGame({ ...game, title: e.target.value })}
						className="form-control"
						id="title"
						name="title"
					/>
				</div>
				<div>
					<label htmlFor="platform">Platform</label>
					<input
						required
						value={game.platform}
						onChange={e => setGame({ ...game, platform: e.target.value })}
						className="form-control"
						id="platform"
						name="platform"
					/>
				</div>
				<div>
					<label htmlFor="status">Status</label>
					<select
						value={game.status}
						onChange={e => setGame({ ...game, status: e.target.value })}
						className="form-control"
						id="status"
						name="status"
					>
						<option value="Playing">Playing</option>
						<option value="Completed">Completed</option>
						<option value="Wishlist">Wishlist</option>
					</select>
				</div>
				<input type="submit" value="Edit Game" />
			</form>
		</main>
	)
};

export default EditGameForm;