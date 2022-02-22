import styled from "styled-components";
import { gridCenter } from "../../styles/gridCenter";

export const StoreSc = styled.main`
  padding: 15px;
  height: 100%;
  ${gridCenter};
  gap: 15px;
  grid-template-rows: 32px 120px 1fr 40px;
  @media (min-width: 768px) {
    grid-template-rows: 32px 60px 1fr 40px;
  }
  .filterProduct {
    @media (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
    }
  }
`;
