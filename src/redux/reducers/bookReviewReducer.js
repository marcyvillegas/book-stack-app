import { CREATE_BOOK_REVIEW } from "../actions/actionTypes/bookReviewTypes";

const initialState = {
    bookReview: [

    ]
}

const bookReviewReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case CREATE_BOOK_REVIEW:
            console.log("Created book review")
            return state
    
        default:
            return state
    }
}

export default bookReviewReducer;