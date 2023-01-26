import Reac, { useEffect } from 'react';
import Notifications from './Notifications';
import BookReviewList from '../books/BookReviewList';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Dashboard() {

    const auth = useSelector(state => state.firebase.auth);

    const navigate = useNavigate();

    useEffect(() => {

        if (!auth.uid) return navigate('/signup')

    }, [auth.uid]);

    return (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "4rem" }}>

            <BookReviewList />

            <Notifications />
        </div>
    );
}

export default Dashboard;
