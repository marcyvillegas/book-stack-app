import { CREATE_BOOK_REVIEW } from "./actionTypes/bookReviewTypes";

const createBookReviewSucces = bookReview => {
    return {
        type: CREATE_BOOK_REVIEW,
        payload: bookReview
    }
}

export const getBookReview = () => {
    return async (dispatch, getState, { getFirebase }) => {

        const firestore = getFirebase().firestore();

        console.log(firestore)

        const docRef = doc(firestore, "bookReview");

        try {
            const docSnap = await getDoc(docRef);
            console.log(docSnap.data());
        } catch (error) {
            console.log(error);
        }
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