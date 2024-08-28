
import { useState, useEffect } from "react"
import { useParams } from "react-router"

function EditGameForm() {

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

	// useEffect(() => {
	// 	const fetchData = async () => {
	// 		const response = await fetch(`http://localhost:5000/games/${gamesId}`)
	// 		const resData = await response.json()
	// 		setGame(resData)
	// 	}
	// 	fetchData()
	// }, [ gamesId ])

	async function handleSubmit(e) {
		e.preventDefault()

		await fetch(`http://localhost:5000/games/${gameId}/review`, {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(game)
		})

	}

	return (
		<main>
			{gameId}
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
					<label htmlFor="createdAt">Date</label>
					<input
						value={game.createdAt}
						onChange={e => setGame({ ...game, createdAt: e.target.value })}
						className="form-control"
						id="createdAt" name="createdAt" />
				</div>
				<input className="btn btn-primary" type="submit" value="Edit Game" />
			</form>
		</main>
	)
}

export default EditGameForm
