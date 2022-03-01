import styled from "styled-components";
import { bgNavbar } from "../../../consts/colors";
import { flexCenter } from "../../../styles/flexCenter";
import { gridCenter } from "../../../styles/gridCenter";

export const DetailProductSc = styled.article`
  width: 300px;
  height: 450px;
  padding: 8px;
  ${gridCenter};
  grid-template-rows: auto auto 1fr;
  h1 {
    margin-top: 0;
    font-size: 1.6rem;
  }
  .description {
    height: 100%;
    overflow-y: auto;
    align-self: start;
  }
  .buy {
    width: 100%;
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
      margin-left: 8px;
    }
    select:focus {
      outline: 2px solid ${bgNavbar};
    }
  }
`;
