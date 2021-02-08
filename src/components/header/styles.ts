import styled from "styled-components";
import { CustomCard } from "../../styles/global";

export const CardStyled = styled(CustomCard)`
  color: ${({ theme }) => theme.texts.black};
`;
