
import { useState } from "react"
import { useParams } from "react-router"

function NewReviewForm() {

    const { gameId } = useParams()

	const [review, setReview] = useState({
        author: '', 
        content: '', 
        rating: '', 
	})

	async function handleSubmit(e) {
		e.preventDefault()

		await fetch(`http://localhost:5000/games/${gameId}/review`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(review)
		})
    }

	return (
		<main>
			<h1>Add a New Review for {gameId}</h1>
			<form onSubmit={handleSubmit} >
				<div className="form-group">
					<label htmlFor="author">Author</label>
					<input
						required
						value={review.author}
						onChange={e => setReview({ ...review, author: e.target.value })}
						className="form-control"
						id="author"
						name="author"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="content">content</label>
					<input
						required
						value={review.content}
						onChange={e => setReview({ ...review, content: e.target.value })}
						className="form-control"
						id="content"
						name="platform"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="rating">Rating</label>
					<input
						value={review.rating}
						onChange={e => setReview({ ...review, rating: e.target.value })}
						className="form-control"
						id="rating"
						name="rating"
					/>
				</div>
				<input className="btn btn-primary" type="submit" value="Add Review" />
			</form>
		</main>
	)
}

export default NewReviewForm