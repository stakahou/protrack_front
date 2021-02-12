import {
  ApolloClientOptions,
  createHttpLink,
  InMemoryCache,
  split,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { WebSocketLink } from "@apollo/client/link/ws";
import { getMainDefinition } from "@apollo/client/utilities";

const { REACT_APP_API_URL, REACT_APP_API_WS } = process.env;

const httpLink = createHttpLink({
  uri: REACT_APP_API_URL,
});

const getToken = () => {
  const token = localStorage.getItem("@session");
  if (!token) return "";
  return `Bearer ${JSON.parse(token)}`;
};

const wsLink = new WebSocketLink({
  uri: REACT_APP_API_WS as any,
  options: {
    reconnect: true,
    lazy: true,
    connectionParams: {
      isWebSocket: true,
      headers: {
        authorization: getToken(),
      },
    },
  },
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: getToken(),
    },
  };
});

const splitLink = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query) as any;
    return kind === "OperationDefinition" && operation === "subscription";
  },
  wsLink,
  authLink.concat(httpLink)
);

const config: ApolloClientOptions<unknown> = {
  link: splitLink,
  cache: new InMemoryCache(),
};

export default config;
