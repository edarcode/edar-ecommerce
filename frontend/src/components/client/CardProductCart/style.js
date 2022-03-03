import styled from "styled-components";
import { white } from "../../../consts/colors";
import { flexCenter } from "../../../styles/flexCenter";
import { gridCenter } from "../../../styles/gridCenter";
import { selectStyles } from "../../../styles/selectStyles";

export const CardProductCartSc = styled.article`
  ${flexCenter};
  gap: 5px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
  background-color: ${white};
  padding-right: 8px;
  select {
    ${selectStyles};
  }
  img {
    width: 90px;
    height: 90px;
    object-fit: contain;
  }
  svg {
    width: 25px;
    margin-left: auto;
  }
  .name-price {
    ${gridCenter};
    gap: 10px;
    .name-product {
      font-size: 1.5rem;
      margin: 0;
      text-align: center;
      @media (max-width: 768px) {
        display: none;
      }
    }
    span {
      justify-self: start;
    }
  }
`;
