import React from 'react';
import { Link } from "react-router-dom";

function SignedOutLinks() {
    return (
        <div style={{ display: "flex", padding: "0 2rem", alignItems: "center" }}>
            <p style={{ paddingRight: "1rem" }}>
                <Link to='/signup'>
                    Sign up
                </Link>
            </p>

            <p style={{ paddingRight: "1rem" }}>
                <Link to='/login'>
                    Log In
                </Link>
            </p>
        </div>
    );
}

export default SignedOutLinks;
