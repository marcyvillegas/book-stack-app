import React from 'react';
import BookReviewSummary from './BookReviewSummary';
import { connect } from "react-redux";
import { compose } from "redux";
import { firestoreConnect } from "react-redux-firebase";

function BookReviewList(props) {

  return (
    <div style={{ marginRight: "3rem" }}>

      {props.bookReviews && props.bookReviews.map(item => (
        <BookReviewSummary key={item.id} bookReviews={item} />
      ))}

    </div>
  );
}

const mapStateToProps = (state) => {

  const data = state.firestore.ordered.bookReview

  console.log(data)

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