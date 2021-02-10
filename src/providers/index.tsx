import { ApolloClient, ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "styled-components";
import graphqlConfig from "../configs/graphqlConfig";
import defaultTheme from "../styles/themes/default";

const Providers: any = [
  <ThemeProvider theme={defaultTheme} />,
  <ApolloProvider client={new ApolloClient(graphqlConfig)} children />,
];

export default Providers;
