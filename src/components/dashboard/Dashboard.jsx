import React from 'react';
import Notifications from './Notifications';
import BookReviewList from '../books/BookReviewList';

function Dashboard() {
    return (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "4rem" }}>

            <BookReviewList />

            <Notifications />
        </div>
    );
}

export default Dashboard;
