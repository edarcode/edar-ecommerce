import styled from "styled-components";
import { gridCenter } from "../../styles/gridCenter";

export const ProductSc = styled.main`
  ${gridCenter};
  .container-gallery-detail {
    ${gridCenter};
    gap: 10px;
    @media (min-width: 768px) {
      justify-items: end;
      grid-template-columns: 1fr 1fr;
    }
  }
`;
