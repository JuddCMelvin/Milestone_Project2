
import { useState } from "react"
import { useHistory } from "react"

function NewPlaceForm() {

	const [game, setGame] = useState({
        title: '', 
        platform: '', 
        status: '', 
        review: '', 
        rating: '', 
        backgroundImage: '', 
        createdAt: ''
	})

	async function handleSubmit(e) {
		e.preventDefault()

		await fetch(`http://localhost:5000/games`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(game)
		})

	}

	return (
		<main>
			<h1>Add a New Game</h1>
			<form onSubmit={handleSubmit} >
				<div className="form-group">
					<label htmlFor="title">Game Name</label>
					<input
						required
						value={game.title}
						onChange={e => setGame({ ...game, title: e.target.value })}
						className="form-control"
						id="name"
						name="name"
					/>
				</div>
				<div className="form-group">
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
				<div className="form-group">
					<label htmlFor="status">Status</label>
					<input
						value={game.status}
						onChange={e => setGame({ ...game, status: e.target.value })}
						className="form-control"
						id="status"
						name="status"
					/>
				</div>
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
					<label htmlFor="CreatedAt">Date</label>
					<input
						value={game.createdAt}
						onChange={e => setGame({ ...game, CreatedAt: e.target.value })}
						className="form-control"
						id="CreatedAt" name="CreatedAt" />
				</div>
				<input className="btn btn-primary" type="submit" value="Add Game" />
			</form>
		</main>
	)
}

export default NewPlaceForm