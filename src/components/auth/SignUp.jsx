import React, { useState } from 'react';

function SignUp() {

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

export default SignUp;
