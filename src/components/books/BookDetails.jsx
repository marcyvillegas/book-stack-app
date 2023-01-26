import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

function BookDetails(props) {

  const { id } = useParams();

  const filteredBookReview = props.bookReviews
    .filter(item => item.id == id);

  const bookReviewDetailed = filteredBookReview[0];

  return (
    <div>
      <h1>Book Review Details</h1>
      <>
        <p>📙 {bookReviewDetailed.bookName}</p>
        <p>📝 {bookReviewDetailed.author}</p>
        <p>⭐ {bookReviewDetailed.review}</p>
      </>
    </div>
  );
}

const mapStateToProps = (state) => {

  const data = state.firestore.ordered.bookReview

  return {
    bookReviews: data
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect(() => [
    {
      collection: "bookReview"
    },
  ])
)(BookDetails)
