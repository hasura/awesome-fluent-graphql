import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const TODOS = gql`
  {
    todos {
      id
      text
    }
  }
`;

function Todos() {
  const { loading, error, data } = useQuery(TODOS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.todos.map(({ id, text }) => (
    <div key={id}>
      <p>
        {id}: {text}
      </p>
    </div>
  ));
}

export default Todos;
