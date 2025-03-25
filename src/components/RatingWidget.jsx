import React, { useState } from 'react';

const RatingWidget = ({ productId, onRatingSubmit }) => {
    const [rating, setRating] = useState(0);
    const [hoveredRating, setHoveredRating] = useState(0);

    const handleRatingClick = (value) => {
        setRating(value);
    };

    const handleSubmit = () => {
        if (rating >= 1 && rating <= 5) {
            onRatingSubmit(productId, rating);
            setRating(0); // Reset rating after submission
        }
    };

    return (
        <div className="rating-widget">
            {[1, 2, 3, 4, 5].map((value) => (
                <span
                    key={value}
                    className={`star ${value <= (hoveredRating || rating) ? 'filled' : ''}`}
                    onMouseEnter={() => setHoveredRating(value)}
                    onMouseLeave={() => setHoveredRating(0)}
                    onClick={() => handleRatingClick(value)}
                >
                    ★
                </span>
            ))}
            <button onClick={handleSubmit}>Submit Rating</button>
        </div>
    );
};

export default RatingWidget;
