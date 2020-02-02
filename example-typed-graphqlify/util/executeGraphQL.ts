import fetch from "node-fetch";

export const executeGraphql = async (
  query: string,
  variables?: string
): Promise<any> => {
  const response = await fetch("MY_GRAPHQL_ENDPOINT", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      Authorization: "bearer MY_TOKEN"
    },
    body: JSON.stringify({
      query,
      variables
    })
  });
  const json = await response.json();
  return json.data;
};
