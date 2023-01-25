import { CREATE_BOOK_REVIEW } from "../actions/actionTypes/bookReviewTypes";

const initialState = {
    bookReviews: [
        // {
        //     id: 1,
        //     bookName: "The Blah",
        //     author: "sdfa",
        //     review: "xD"
        // },
        // {
        //     id: 2,
        //     bookName: "Enderdsaf",
        //     author: "Marcy",
        //     review: "nie niceniceniceniecniceni"
        // }
    ]
}

const bookReviewReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case CREATE_BOOK_REVIEW:
            return state
    
        default:
            return state
    }
}

export default bookReviewReducer;