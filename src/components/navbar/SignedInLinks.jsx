import React from 'react';
import { Link } from "react-router-dom";

function SignedInLinks() {
    return (
        <div style={{ display: "flex", padding: "0 2rem", alignItems: "center" }}>
            <p style={{ paddingRight: "1rem" }}>
                <Link to='/add-book'>
                    Add New Book
                </Link>
            </p>

            <p style={{ paddingRight: "1rem" }}>
                <Link to='/logout'>
                    Log Out
                </Link>
            </p>

            <h2>MM</h2>
        </div>
    );
}

export default SignedInLinks;
