import styled from "styled-components";
import { gridCenter } from "../../../styles/gridCenter";

export const CardsProductsSc = styled.section`
  ${gridCenter}
  gap: 25px;
  max-width: 1280px;
  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 960px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 1280px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
