import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { logOut } from '../../redux/actions/authActions';

function SignedInLinks(props) {

    return (
        <div style={{ display: "flex", padding: "0 2rem", alignItems: "center" }}>
            <p style={{ paddingRight: "1rem" }}>
                <Link to='/add-book'>
                    Add New Book
                </Link>
            </p>

            <p style={{ paddingRight: "1rem" }}>
                <a onClick={props.logOut}>
                    Log Out
                </a>
            </p>

            <h2>MM</h2>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
      logOut: () => dispatch(logOut())
    }
  }

export default connect(null, mapDispatchToProps)(SignedInLinks);