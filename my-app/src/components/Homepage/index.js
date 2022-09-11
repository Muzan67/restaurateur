import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from "../Navigation";
import Login from '../../pages/Login';

function Homepage() {
    return (
        <Router>
            <div>
                <Navigation />
                <Routes>
                    <Route exact path="/login" element = <Login/> />
                </Routes>
            </div>
        </Router>

    )

}

export default Homepage