import styled from "styled-components";
import { bgNavbar } from "../../../consts/colors";
import { flexCenter } from "../../../styles/flexCenter";

export const DetailProductSc = styled.article`
  width: 300px;
  padding: 8px;
  .amount {
    ${flexCenter};
    justify-content: start;
    gap: 8px;
    svg {
      margin-left: auto;
      cursor: pointer;
    }
    select {
      cursor: pointer;
      background: transparent;
      border: none;
      color: inherit;
      padding: 10px;
    }
    select:focus {
      outline: 2px solid ${bgNavbar};
    }
  }
`;
