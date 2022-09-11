import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from "../Navigation";
import Login from '../../pages/Login';
import Signup from '../../pages/Signup';

function Homepage() {
    return (
        <Router>
            <div>
                <Navigation />
                <Routes>
                    <Route exact path="/login" element = {<Login/>} />
                    <Route exact path="/signup" element = {<Signup/>} />
                </Routes>
            </div>
        </Router>

    )

}

export default Homepage