import { ToastContainer } from "react-toastify";
import { Card } from "reactstrap";
import styled, { createGlobalStyle } from "styled-components";
import toastConfig from "../configs/toastConfig";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        
    }

    body, html, #root {
        height: 100%;
    }


    body {
        font-family: 'Roboto', sans-serif;
        background-color: #edf2f9 !important
    }

    .btn {
        &.btn-primary {
            background-color: ${(props) => props.theme.colors.primary};
            border-color: ${(props) => props.theme.colors.primary};
        }
    }

    .bg-primary {
        background-color: ${(props) => props.theme.colors.primary} !important;
    }

    .pointer {
        cursor: pointer
    }

    .custom-form {
        label {
            color: ${({ theme }) => theme.texts.black};
            font-size: .83333rem;
            letter-spacing: .02em;
            font-weight: 500 !important;
            display: inline-block;
            margin-bottom: .5rem;
        }
    }
   
`;

export const CustomCard = styled(Card)`
  color: ${({ theme }) => theme.texts.black};

  border-radius: 0.375rem;

  box-shadow: ${({ theme }) => theme.shadows.default};

  border: 0 solid #edf2f9;

  color: #344050;

  .card-body {
  }

  .card-header {
    color: ${({ theme }) => theme.texts.black};
    padding: 1rem 1.25rem;
  }
`;

export const StyledToastContainer = styled(ToastContainer).attrs({
  ...toastConfig,
})`
  /* .Toastify__toast--error {
    background: #a61d24;
    color: ${({ theme }) => "black"};
    font-size: 18px;
    border-radius: 6px;
    .Toastify__progress-bar {
      background: #f37370;
    }
  }

  .Toastify__toast--success {
    background: #144848;
    color: ${({ theme }) => "black"};
    font-size: 18px;
    border-radius: 6px;
    .Toastify__progress-bar {
      background: #58d1c9;
    }
  } */
`;
