import React, { useState } from "react";
import { useParams } from "react-router";
import NavBar from '../NavBar';

function NewReview() {
	const { gameId } = useParams();

	const [review, setReview] = useState({
		author: '',
		review: '',
		rating: '',
	});

	const [message, setMessage] = useState('');

	async function handleSubmit(e) {
		e.preventDefault();
		setMessage('');

		try {
			const response = await fetch(`http://localhost:5000/games/${gameId}/review`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(review)
			});

			if (response.ok) {
				setMessage('Review added successfully!');
				setTimeout(() => {
					window.location.href = `/games/${gameId}`;
				}, 2000);
			} else {
				const errorData = await response.json();
				setMessage(`Failed to add review: ${errorData.message}`);
			}
		} catch (error) {
			setMessage(`Failed to add review: ${error.message}`);
		}
	}

	function handleRatingChange(ratingValue) {
		setReview({ ...review, rating: ratingValue });
	}

	return (
		<main>
			<NavBar />
			<h1>Add a New Review</h1>
			{message && <p>{message}</p>}
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<label htmlFor="author">Author</label>
					<input
						required
						value={review.author}
						onChange={(e) => setReview({ ...review, author: e.target.value })}
						className="form-control"
						id="author"
						name="author"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="review">Review</label>
					<textarea
						required
						value={review.review}
						onChange={(e) => setReview({ ...review, review: e.target.value })}
						className="form-control"
						id="review"
						name="review"
					/>
				</div>
				<div className="form-group">
					<label htmlFor="rating">Rating</label><br />
					{[1, 2, 3, 4, 5].map((value) => (
						<label key={value} style={{ marginRight: '10px' }}>
							<input
								type="radio"
								value={value}
								checked={review.rating === value}
								onChange={() => handleRatingChange(value)}
								style={{ marginRight: '5px' }}
							/>
							{value}
						</label>
					))}
				</div>
				<input className="btn btn-primary" type="submit" value="Add Review" />
			</form>
		</main>
	);
}

export default NewReview;

// TODO: why not use useEffect? instead //
