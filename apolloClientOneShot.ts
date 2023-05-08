import fetch from "cross-fetch";
import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

import { GetCartByIdDocument } from "./types";

const client = new ApolloClient({
  link: new HttpLink({ uri: "https://api.cartql.com", fetch }),
  cache: new InMemoryCache(),
});

client
  .query({
    query: GetCartByIdDocument,
    variables: {
      id: "test",
    },
  })
  .then(({ data }) => console.log(data.cart));