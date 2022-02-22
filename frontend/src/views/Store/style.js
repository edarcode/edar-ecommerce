import styled from "styled-components";
import { gridCenter } from "../../styles/gridCenter";

export const StoreSc = styled.main`
  padding: 15px;
  height: 100%;
  ${gridCenter};
  gap: 15px;
  grid-template-rows: 32px auto 1fr 40px;
  @media (min-width: 768px) {
    grid-template-rows: 32px auto 1fr 40px;
  }
  @media (min-width: 1920px) {
    grid-template-columns: auto 1fr;
    grid-template-rows: auto 1fr auto;
    .searchByName {
      grid-column: 1/-1;
    }
    .filterProduct {
      grid-column: 1/2;
    }
    .cardsProducts {
      grid-column: 2 / 3;
    }
    .paged {
      grid-column: 1/-1;
    }
  }
  .filterProduct {
    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 1920px) {
      align-self: start;
      grid-template-columns: 1fr;
    }
  }
`;
