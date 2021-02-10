import styled from "styled-components";

export const Styles = styled.div`
  table {
    color: ${({ theme }) => theme.texts.black};

    thead {
      tr {
        th {
          vertical-align: top;
        }
      }
    }
  }
`;
