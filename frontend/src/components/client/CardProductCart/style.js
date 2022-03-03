import styled from "styled-components";
import { white } from "../../../consts/colors";
import { flexCenter } from "../../../styles/flexCenter";

export const CardProductCartSc = styled.article`
  ${flexCenter};
  background-color: ${white};
  img {
    width: 100px;
    height: 100px;
    object-fit: contain;
  }
`;
