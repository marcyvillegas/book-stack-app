import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';

function NavBar() {
    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "0 4rem" }}>
                <Link to='/'>
                    <h2>📚 BOOK STACK</h2>
                </Link>

                <div>
                    <SignedInLinks />
                    {/* <SignedOutLinks /> */}
                </div>
            </div>
            <hr />

        </>
    );
}

export default NavBar;
