import React, { Component } from "react";
import "./App.css";

import { BrowserRouter as Router, Route } from "react-router-dom";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
});

class App extends Component {
    render() {
        return (
            <ApolloProvider client={client}>
                <Router>
                    <div className="wrapper-routes">
                        <Route exact path="/" component={ListPage} />
                        <Route path="/create" component={CreatePage} />
                        <Route path="/post/:id" component={DetailPage} />
                    </div>
                </Router>
            </ApolloProvider>
        );
    }
}

export default App;
