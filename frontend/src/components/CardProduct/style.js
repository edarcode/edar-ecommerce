import styled from "styled-components";
import { white } from "../../consts/colors";
import { gridCenter } from "../../styles/gridCenter";

export const CardProductSc = styled.article`
  position: relative;
  ${gridCenter};
  width: 100%;
  height: 100%;
  padding: 8px;
  background-color: ${white};
  h6 {
    font-size: 1.6rem;
    text-align: center;
    margin: 0;
  }
`;
