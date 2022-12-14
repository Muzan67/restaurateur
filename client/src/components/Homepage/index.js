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
import Contact from "../Contact";
import Certifications from "../Certifications";
import Posters from "../Posters";
import Permits from "../Permits";

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
                        <Route exact path ="/" element={<Restauratuer />} />
                        <Route exact path="/login" element={<Login />} />
                        <Route exact path="/signup" element={<Signup />} />
                        <Route exact path="/restaurateur" element={<Restauratuer />} />
                        <Route exact path="/contact" element={<Contact />} />
                        <Route exact path="/certifications" element={<Certifications />} />
                        <Route exact path="/posters" element={<Posters />} />
                        <Route exact path="/permits" element={<Permits />} />
                    </Routes>
                </div>
            </Router>
        </ApolloProvider>
    )

}

export default Homepage