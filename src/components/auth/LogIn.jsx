import React, { useState } from 'react';

function LogIn() {

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
    }

    return (
        <div style={{ marginTop: "4rem", display: "flex", justifyContent: "center" }}>

            <div style={{ width: "40%" }}>

                <h3>Log In</h3>
                <form style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }} onSubmit={handleSubmit}>
                    <input type="email" name="email" placeholder='Email' onChange={handleChange} />
                    <input type="password" name="password" placeholder='Password' onChange={handleChange} />
                    <button>Log In</button>
                </form>
            </div>

        </div>
    );
}

export default LogIn;
