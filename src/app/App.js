import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

import fetch from "node-fetch";
import { createHttpLink } from "apollo-link-http";

import Tabs from "./containers/Tabs/Tabs";
import Header from "./components/Header/Header";

const httpLink = createHttpLink({
    uri: "https://api.graph.cool/simple/v1/cjdbkqnkc0ss701773x0kseto",
    fetch: fetch
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
});

class App extends Component {
    render() {
        return (
            <ApolloProvider client={client}>
                <div className="wrapper-app-content">
                    <Header />
                    <Router>
                        <div className="wrapper-routes">
                            <Route path="/:activeTab" component={Tabs} />
                        </div>
                    </Router>
                </div>
            </ApolloProvider>
        );
    }
}

export default App;
