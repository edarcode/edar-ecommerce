import styled from "styled-components";
import { white } from "../../../consts/colors";
import { gridCenter } from "../../../styles/gridCenter";

export const CardProductSc = styled.article`
  position: relative;
  ${gridCenter};
  width: 100%;
  height: 100%;
  padding: 8px;
  background-color: ${white};
  border-radius: 3px;
  box-shadow: 0 0 8px 0.5px black;
  transition: transform 0.8s ease;
  &:hover {
    transform: scale(1.05);
  }
  h6 {
    font-size: 1.6rem;
    text-align: center;
    margin: 0;
  }
  footer {
    display: grid;
    align-items: center;
    grid-template-columns: 1fr 1fr;
    font-size: 1.5rem;
    svg {
      cursor: pointer;
    }
  }
`;
