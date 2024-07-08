import React, { useState } from 'react';
import NavBar from '../NavBar';

function NewGame() {
	const [game, setGame] = useState({
		title: '',
		platform: '',
		status: '',
		review: '',
		rating: '',
		backgroundImage: ''
	});

	const [message, setMessage] = useState('');

	async function handleSubmit(e) {
		e.preventDefault();
		setMessage('')

		const response = await fetch(`http://localhost:5000/games`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(game)
		});

		if (response.ok) {
			setMessage('Game added successfully!');
			setTimeout(() => {
				window.location.href = '/games'; // redirects back to /games after 2 seconds //
			}, 2000);
		} else {
			setMessage('Failed to add game.');
		}
	}

	// defines options for the status dropdown //
	const statusOptions = [
		{ value: '', label: 'Select Status' },
		{ value: 'Playing', label: 'Playing' },
		{ value: 'Completed', label: 'Completed' },
		{ value: 'Wishlist', label: 'Wishlist' }
	];

	return (
		<main>
			<NavBar />
			<h1>Add a New Game</h1>
			{message && <p>{message}</p>}
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="title">Game Name</label>
					<input
						required
						value={game.title}
						onChange={(e) => setGame({ ...game, title: e.target.value })}
						id="title"
						name="title"
					/>
				</div>
				<div>
					<label htmlFor="platform">Platform</label>
					<input
						required
						value={game.platform}
						onChange={(e) => setGame({ ...game, platform: e.target.value })}
						id="platform"
						name="platform"
					/>
				</div>
				<div>
					<label htmlFor="status">Status</label>
					<select
						value={game.status}
						onChange={(e) => setGame({ ...game, status: e.target.value })}
						id="status"
						name="status"
					>
						{/* drop down of status choices */}
						{statusOptions.map((option) => (
							<option key={option.value} value={option.value}>
								{option.label}
							</option>
						))}
					</select>
				</div>
				<div>
					<label htmlFor="review">Review</label>
					<input
						value={game.review}
						onChange={(e) => setGame({ ...game, review: e.target.value })}
						id="review"
						name="review"
					/>
				</div>
				<div>
					<label htmlFor="rating">Rating</label><br /> {/* radio buttons for ease */}
					{[1, 2, 3, 4, 5].map((value) => (
						<label key={value}>
							<input
								type="radio"
								value={value}
								checked={game.rating === value}
								onChange={(e) => setGame({ ...game, rating: Number(e.target.value) })}
							/> {value}
						</label>
					))}
				</div>

				<div>
					<label htmlFor="backgroundImage">Image</label>
					<input
						value={game.backgroundImage}
						onChange={(e) => setGame({ ...game, backgroundImage: e.target.value })}
						id="backgroundImage"
						name="backgroundImage"
					/>
				</div>
				<input type="submit" value="Add Game" />
			</form>
		</main>
	)
};

export default NewGame;


