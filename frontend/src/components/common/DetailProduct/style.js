import styled from "styled-components";
import { bgBox } from "../../../consts/colors";
import { gridCenter } from "../../../styles/gridCenter";
import { scrollStyles } from "../../../styles/scrollStyles";
import { selectStyles } from "../../../styles/selectStyles";

export const DetailProductSc = styled.article`
  width: 300px;
  padding: 8px;
  ${gridCenter};
  justify-items: start;
  gap: 15px;
  grid-template-rows: auto auto auto 1fr;
  @media (min-width: 768px) {
    width: 400px;
    height: 550px;
  }
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
    scrollbar-color: ${bgBox} rgba(0, 0, 0, 0);
    scrollbar-width: thin;
    ${scrollStyles};
  }
  .amount {
    ${gridCenter};
    justify-items: start;
    width: 100%;
    grid-template-columns: 1fr auto;
    select {
      ${selectStyles};
    }
  }
`;
