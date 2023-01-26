import React, { useState } from 'react';
import { connect } from 'react-redux';
import { signUp } from '../../redux/actions/authActions';

function SignUp(props) {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
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
        props.signUp(formData);
    }

    return (
        <div style={{ marginTop: "4rem", display: "flex", justifyContent: "center" }}>

            <div style={{ width: "40%" }}>

                <h3>Sign Up</h3>
                <form style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }} onSubmit={handleSubmit}>
                    <input type="text" name="firstName" placeholder='First Name' onChange={handleChange} />
                    <input type="text" name="lastName" placeholder='Last Name' onChange={handleChange} />
                    <input type="email" name="email" placeholder='Email' onChange={handleChange} />
                    <input type="password" name="password" placeholder='Password' onChange={handleChange} />
                    <button>Sign Up</button>
                </form>
            </div>

        </div>
    );
}

const mapStateToProps = (state) => {
    return {
      auth: state.firebase.auth,
      authError: state.auth.authError
    }
  }
  
  const mapDispatchToProps = (dispatch)=> {
    return {
      signUp: (credentials) => dispatch(signUp(credentials))
    }
  }

  export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
