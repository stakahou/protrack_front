import styled from "styled-components";

export const Styles = styled.div`
  .wave {
    position: fixed;
    bottom: -2px;
    left: 0;
    height: 100%;
    z-index: -1;
    width: 50vw;
    -webkit-filter: drop-shadow(2px 4px 4px gray);
    filter: drop-shadow(2px 4px 4px gray);
  }

  .img {
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: 70vh;
      -webkit-filter: drop-shadow(2px 4px 4px gray);
      filter: drop-shadow(2px 4px 4px gray);
    }
  }

  .container-login {
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 7rem;
    padding: 0 2rem;

    .login {
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      flex-direction: column;

      h2 {
        margin: 15px 0;
        color: #333;
        text-transform: uppercase;
        font-size: 2.9rem;
        font-weight: bold;
      }

      .btn {
        height: 50px;
        border-radius: 25px;
        outline: none;
        border: none;
        background-image: linear-gradient(to right, #32be8f, #38d39f, #32be8f);
        background-size: 200%;
        font-size: 1.2rem;
        color: #fff;
        text-transform: uppercase;
        margin: 1rem 0;
        transition: 0.5s;
        padding-left: 1rem;
        padding-right: 1rem;

        :hover {
          background-position: right;
        }
      }
    }
  }

  @media screen and (max-width: 1050px) {
    .container-login {
      grid-gap: 5rem;
    }
  }

  @media screen and (max-width: 1000px) {
    .img {
      img {
        width: 400px;
      }
    }
  }

  @media screen and (max-width: 900px) {
    .container-login {
      grid-template-columns: 1fr;

      .img {
        display: none;
      }

      .login {
        justify-content: center;
      }
    }

    .wave {
      display: none;
    }
  }
`;
