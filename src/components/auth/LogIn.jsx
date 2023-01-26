import React, { useState } from 'react';
import { connect } from 'react-redux'
import { logIn } from '../../redux/actions/authActions';

function LogIn(props) {

    const [formData, setFormData] = useState({
        email: "",
        password: ""
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
        props.logIn(formData);
    }

    return (
        <div style={{ marginTop: "4rem", display: "flex", justifyContent: "center" }}>

            <div style={{ width: "40%" }}>

                <h3>Log In</h3>
                <form style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }} onSubmit={handleSubmit}>
                    <input type="email" name="email" placeholder='Email' onChange={handleChange} />
                    <input type="password" name="password" placeholder='Password' onChange={handleChange} />
                    <button>Log In</button>
                    {
                        props.authError && <p>Log in error</p>
                    }
                </form>
            </div>

        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logIn: (credentials) => dispatch(logIn(credentials))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn)