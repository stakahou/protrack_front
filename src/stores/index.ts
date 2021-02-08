import { createContext } from "react";
import { SessionStore } from "./sessionStore";

export const storesContext = createContext({
  sessionStore: new SessionStore(),
});
