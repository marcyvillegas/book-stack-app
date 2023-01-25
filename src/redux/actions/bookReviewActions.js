import { CREATE_BOOK_REVIEW } from "./actionTypes/bookReviewTypes";

const createBookReviewSucces = bookReview => {
    return {
        type: CREATE_BOOK_REVIEW,
        payload: bookReview
    }
}

export const createBookReview = bookReview => {
    return async (dispatch) => {

        // make async call to database
        try {

            const firestore = firestore.getFireStore();
            await firestore.collection('bookReview').add({
                ...bookReview,
                userId: 12345,
                createdAt: new Date()
            });
            dispatch(createBookReviewSucces(bookReview)) // if async function is successful, trigger the action

        } catch (error) {
            console.log(error); // TODO: CREATE DISPATCH ERROR
        }

    }
}