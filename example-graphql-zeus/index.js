import { Gql } from "./generated/graphql-zeus";

(async () => {
  const todosQuery = await Gql.query({
    todos: [
      { where: { id: { _eq: "6" } } },
      { text: true, user: { name: true } }
    ]
  });

  console.log(todosQuery.todos);

  const todosMutation = await Gql.mutation({
    update_todos: [
      {
        where: { id: { _eq: "6" } },
        _set: { is_completed: true }
      },
      { returning: { text: true, is_completed: true } }
    ]
  });

  console.log(todosMutation.update_todos);
})();
