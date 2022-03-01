import styled from "styled-components";
import { gridCenter } from "../../styles/gridCenter";

export const ProductSc = styled.main`
  ${gridCenter};
  .container-gallery-detail {
    ${gridCenter};
    @media (min-width: 768px) {
      justify-items: end;
      gap: 8px;
      grid-template-columns: 1fr 1fr;
    }
  }
`;
