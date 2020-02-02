import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import Todos from "./Todos";

const client = new ApolloClient({
  uri: "MY_GRAPHQL_ENDPOINT",
  headers: {
    Authorization: "bearer MY_TOKEN"
  }
});

const App = () => (
  <ApolloProvider client={client}>
    <Todos />
  </ApolloProvider>
);

export default App;
