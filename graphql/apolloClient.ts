import { ApolloClient, InMemoryCache } from "@apollo/client";

export const apolloClient = new ApolloClient({
  uri: "https://api-eu-central-1.hygraph.com/v2/cl5s1biwq0p6z01uqdg24hcb5/master",
  cache: new InMemoryCache(),
});
