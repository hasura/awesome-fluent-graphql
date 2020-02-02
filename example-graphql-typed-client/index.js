const createClient = require("./generated/createClient.js");

(async () => {
  const client = await createClient({
    fetcher: ({ query, variables }, fetch) =>
      fetch("MY_GRAPHQL_ENDPOINT", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: "bearer MY_TOKEN"
        },
        body: JSON.stringify({
          query,
          variables
        })
      })
        .then(r => r.json())
        .then(json => console.log(json.data.todos))
        .catch(error => console.log(error))
  });

  if (client) {
    // raw syntax
    client
      .query({
        todos: [
          { where: { id: { _eq: "6" } } },
          { id: 1, text: 1, user: { name: 1 } }
        ]
      })
      .catch(console.error);

    // chain syntax
    client.chain.query
      .todos({ where: { id: { _eq: "6" } } })
      .execute({ id: 1, text: 1, user: { name: 1 } })
      .catch(console.error);
  }
})();
