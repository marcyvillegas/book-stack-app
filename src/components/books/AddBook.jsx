import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { createBookReview } from '../../redux/actions/bookReviewActions';
import { useNavigate } from "react-router-dom";

function AddBook(props) {

    const { auth } = props;
    const navigate = useNavigate();

    useEffect(() => {

        if (!auth.uid) return navigate('/signup')

    }, [auth.uid]);

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
        props.createBookReview(formData);
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

const mapStateToProps = (state) => {
    return {
      auth: state.firebase.auth
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
        createBookReview: (bookReview) => dispatch(createBookReview(bookReview))
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(AddBook)
