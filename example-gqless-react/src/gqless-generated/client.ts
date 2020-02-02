import { Client, QueryFetcher } from "gqless";
import { schema, query_root } from "./generated";

const endpoint = "MY_GRAPHQL_ENDPOINT";

const fetchQuery: QueryFetcher = async (query, variables) => {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "bearer MY_TOKEN"
    },
    body: JSON.stringify({
      query,
      variables
    }),
    mode: "cors"
  });

  if (!response.ok) {
    throw new Error(`Network error, received status code ${response.status}`);
  }

  const json = await response.json();

  return json;
};

export const client = new Client<query_root>(schema.query_root, fetchQuery);

export const query = client.query;
