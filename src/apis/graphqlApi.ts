import { ApolloClient } from "@apollo/client";
import graphqlConfig from "../configs/graphqlConfig";

export const client = new ApolloClient(graphqlConfig);
