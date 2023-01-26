import React from 'react';
import { Link } from 'react-router-dom';
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLinks';
import { connect } from 'react-redux'

function NavBar(props) {

    const { auth, profile } = props;

    const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;

    return (
        <>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "0 4rem" }}>
                <Link to='/'>
                    <h2>📚 BOOK STACK</h2>
                </Link>

                <div>
                    {links}
                </div>
            </div>
            <hr />

        </>
    );
}

const mapStateToProps = state => {
    // console.log(state);
    return {
        auth: state.firebase.auth,
        profile: state.firebase.profile
    }
}

export default connect(mapStateToProps)(NavBar);
