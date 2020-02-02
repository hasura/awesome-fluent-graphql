const gotQL = require("gotql");
const todoId = "6";

const query = {
  operation: {
    name: "todos",
    args: {
      where: { id: { _eq: todoId } }
    },
    fields: ["text", "id", { user: { fields: ["name"] } }]
  }
};

const mutation = {
  operation: {
    name: "update_todos",
    args: {
      where: { id: { _eq: todoId } },
      _set: { is_completed: true }
    },
    fields: [{ returning: { fields: ["text", "is_completed"] } }]
  }
};

const options = {
  headers: {
    Authorization: "bearer MY_TOKEN"
  },
  debug: false
};

gotQL
  .query("MY_GRAPHQL_ENDPOINT", query, options)
  .then(response => console.log(response.data.todos))
  .catch(console.error);

gotQL
  .mutation("MY_GRAPHQL_ENDPOINT", mutation, options)
  .then(response => console.log(response.data.update_todos))
  .catch(console.error);
