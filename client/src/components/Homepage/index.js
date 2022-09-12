import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Navigation from "../Navigation";
import Login from '../../pages/Login';
import Signup from '../../pages/Signup';
import Restauratuer from '../../pages/Restaurateur';

const httpLink = createHttpLink({
    uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('id_token');
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : '',
        },
    };
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

function Homepage() {
    return (
        <ApolloProvider client={client}>
            <Router>
                <div>
                    <Navigation />
                    <Routes>
                        <Route exact path="/login" element={<Login />} />
                        <Route exact path="/signup" element={<Signup />} />
                        <Route exact path="/restaurateur" element={<Restauratuer />} />
                    </Routes>
                </div>
            </Router>
        </ApolloProvider>
    )

}

export default Homepage