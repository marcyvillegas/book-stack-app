import React from 'react';
import BookReviewSummary from './BookReviewSummary';
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";
import { Link } from "react-router-dom";

function BookReviewList(props) {

  return (
    <div style={{ marginRight: "3rem" }}>

      {props.bookReviews && props.bookReviews.map(item => (
        <Link to={`/book-review/${item.id}`}>
          <BookReviewSummary key={item.id} bookReviews={item} />
        </Link>
      ))}

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
)(BookReviewList)