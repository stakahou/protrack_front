import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Providers from "./providers";
import ContextProviderComposer from "./providers/contextProviderComposer";
import reportWebVitals from "./reportWebVitals";
import Routes from "./routes";
import { GlobalStyles, StyledToastContainer } from "./styles/global";

ReactDOM.render(
  // <React.StrictMode>
  <ContextProviderComposer contextProviders={Providers}>
    <GlobalStyles />
    <StyledToastContainer />
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </ContextProviderComposer>,
  // </React.StrictMode>
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
