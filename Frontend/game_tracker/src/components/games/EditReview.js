import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavBar from '../NavBar';

function EditReview() {
    const { gameId, reviewId } = useParams();
    const [reviewData, setReviewData] = useState({
        author: '',
        review: '',
        rating: ''
    });
    const [message, setMessage] = useState('');

    useEffect(() => {
        const fetchReview = async () => {
            try {
                const response = await fetch(`http://localhost:5000/games/${gameId}/review/${reviewId}`);
                const resData = await response.json();
                setReviewData(resData);
            } catch (err) {
                console.error('Error fetching review:', err);
            }
        };
        fetchReview();
    }, [gameId, reviewId]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');

        try {
            const response = await fetch(`http://localhost:5000/games/${gameId}/review/${reviewId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(reviewData)
            });

            if (response.ok) {
                setMessage('Review updated successfully!');
                setTimeout(() => {
                    window.location.href = `/games/${gameId}`;
                }, 2000);
            } else {
                const errorData = await response.json();
                setMessage(`Failed to update review: ${errorData.message}`);
            }
        } catch (error) {
            setMessage(`Failed to update review: ${error.message}`);
        }
    };

    return (
        <main>
            <NavBar />
            <h1>Edit Review</h1>
            {message && <p>{message}</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="author">Author</label>
                    <input
                        required
                        value={reviewData.author}
                        onChange={(e) => setReviewData({ ...reviewData, author: e.target.value })}
                        className="form-control"
                        id="author"
                        name="author"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="review">Review</label>
                    <textarea
                        required
                        value={reviewData.review}
                        onChange={(e) => setReviewData({ ...reviewData, review: e.target.value })}
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
                                checked={reviewData.rating === value}
                                onChange={() => setReviewData({ ...reviewData, rating: value })}
                                style={{ marginRight: '5px' }}
                            />
                            {value}
                        </label>
                    ))}
                </div>
                <input className="btn btn-primary" type="submit" value="Update Review" />
            </form>
        </main>
    )
};

export default EditReview;