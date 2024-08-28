import { useState, useEffect } from "react";
import { useParams } from "react-router";
import NavBar from '../NavBar';

function EditGameForm() {
<<<<<<< HEAD

    const { gameId } = useParams()
	console.log("gamesId from useParams:", gameId);
    const [game, setGame] = useState({
		title: '', 
        platform: '', 
        status: '', 
        review: '', 
        rating: '', 
        backgroundImage: '', 
        createdAt: ''
	})
=======
	const { gameId } = useParams();
	const [game, setGame] = useState({
		title: '',
		platform: '',
		status: '',
		image: '',
	});
>>>>>>> f50f7029601b575d913a8806f9bb3ba6c64a7a93

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

		await fetch(`http://localhost:5000/games/${gameId}/review`, {
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
<<<<<<< HEAD
				<div className="form-group">
					<label htmlFor="review">Review</label>
					<input
						value={game.review}
						onChange={e => setGame({ ...game, review: e.target.value })}
						className="form-control"
						id="city"
						name="city"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="rating">Rating</label>
					<input
						value={game.rating}
						onChange={e => setGame({ ...game, rating: e.target.value })}
						className="form-control"
						id="rating"
						name="rating"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="BackgroundImage">Image</label>
					<input
						value={game.backgroundImage}
						onChange={e => setGame({ ...game, backgroundImage: e.target.value })}
						className="form-control"
						id="backgroundImage" name="backgroundImage" />
				</div>
                <div className="form-group">
					<label htmlFor="createdAt">Date</label>
					<input
						value={game.createdAt}
						onChange={e => setGame({ ...game, createdAt: e.target.value })}
						className="form-control"
						id="createdAt" name="createdAt" />
				</div>
				<input className="btn btn-primary" type="submit" value="Edit Game" />
=======
				<input type="submit" value="Edit Game" />
>>>>>>> f50f7029601b575d913a8806f9bb3ba6c64a7a93
			</form>
		</main>
	)
};

export default EditGameForm;