import React from "react";
import { graphql } from "@gqless/react";
import { query } from "./gqless-generated";

const Todos = graphql(() => {
  return query.todos.map(({ id, text, user }) => (
    <div key={id}>
      <p>
        {id}: {text} - {user.name}
      </p>
    </div>
  ));
});

export default Todos;
