import React from "react";
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";

import Questions from "./components/questions";
import "./App.css";

const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URL
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header>
          <div>GOT Quizapp</div>
        </header>
        <Questions />
      </div>
    </ApolloProvider>
  );
}

export default App;
