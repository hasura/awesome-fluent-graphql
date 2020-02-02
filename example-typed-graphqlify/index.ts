import { params, types, query } from "typed-graphqlify";
import { executeGraphql } from "./util/executeGraphQL";

const todoId = 6;

const todosQuery = {
  todos_by_pk: params(
    { id: todoId },
    {
      id: types.number,
      text: types.string,
      user: { name: types.string }
    }
  )
};

const gqlString = query("getTodos", todosQuery);

(async () => {
  const result: typeof todosQuery = await executeGraphql(gqlString);
  console.log(result.todos_by_pk);
})();
