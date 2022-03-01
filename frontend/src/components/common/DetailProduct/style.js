import styled from "styled-components";
import { bgNavbar } from "../../../consts/colors";
import { gridCenter } from "../../../styles/gridCenter";

export const DetailProductSc = styled.article`
  width: 300px;
  height: 450px;
  padding: 8px;
  ${gridCenter};
  justify-items: start;
  gap: 15px;
  grid-template-rows: auto auto auto 1fr;
  h1 {
    margin: 0;
    font-size: 2rem;
  }
  .btn-buy {
    width: 100%;
    ${gridCenter};
    grid-template-columns: 1fr 1fr;
    font-size: 1.8rem;
  }
  .description {
    margin: 0;
    height: 100%;
    overflow-y: auto;
  }
  .amount {
    ${gridCenter};
    justify-items: start;
    width: 100%;
    grid-template-columns: 1fr auto;
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
