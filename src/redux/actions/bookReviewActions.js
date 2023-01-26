import { CREATE_BOOK_REVIEW } from "./actionTypes/bookReviewTypes";

const createBookReviewSucces = () => {
    return {
        type: CREATE_BOOK_REVIEW
    }
}

export const createBookReview = bookReview => {
    return async (dispatch, getState, { getFirebase }) => {

        const firebase = getFirebase();
        const firestore = firebase.firestore();

        const profile = getState().firebase.profile;
        const userId = getState().firebase.auth.uid;

        // make async call to database
        try {

            await firestore.collection('bookReview').add({
                ...bookReview,
                createdBy: `${profile.firstName} ${profile.lastName}`,
                userId: userId,
                createdAt: new Date()
            });
            
            dispatch(createBookReviewSucces()); // if async function is successful, trigger the action

        } catch (error) {
            console.log(error); // TODO: CREATE DISPATCH ERROR
        }

    }
}