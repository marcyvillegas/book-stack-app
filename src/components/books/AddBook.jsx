import React, { useState } from 'react';
import { connect } from 'react-redux';

function AddBook() {

    const [formData, setFormData] = useState({
        bookName: "",
        author: "",
        review: ""
    });

    function handleChange(event) {

        const { name, value } = event.target;

        setFormData(prevData => {
            return {
                ...prevData,
                [name]: value
            }
        })
    }

    function handleSubmit(event) {

        event.preventDefault();
    }

    return (
        <div style={{ marginTop: "4rem", display: "flex", justifyContent: "center" }}>

            <div style={{ width: "40%" }}>

                <h3>Add a book Review</h3>
                <form style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }} onSubmit={handleSubmit}>
                    <input type="text" name="bookName" placeholder='Book Name' onChange={handleChange} />
                    <input type="text" name="author" placeholder='Author' onChange={handleChange} />
                    <input type="text" name="review" placeholder='Review' onChange={handleChange} />
                    <button>Submit</button>
                </form>
            </div>

        </div>
    );
}

// const mapDispatchToProps = dispatch => {
//   return {
//     createBookReview: bookReview => dispatch(createBookReview(bookReview))
//   }
// }

export default AddBook;
