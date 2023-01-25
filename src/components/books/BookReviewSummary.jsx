import React from 'react';

function BookReviewSummary(props) {
    return (
        <div style={{ border: "1px solid black", marginBottom: "10px", padding: "1rem" }}>
            <p>📙 {props.bookReviews.bookName}</p>
            <p>📝 {props.bookReviews.author}</p>
            <p>⭐ {props.bookReviews.review}</p>
        </div>
    );
}

export default BookReviewSummary;