import styled from "styled-components";
import { white } from "../../../consts/colors";
import { flexCenter } from "../../../styles/flexCenter";
import { gridCenter } from "../../../styles/gridCenter";

export const GallerySc = styled.article`
  width: 300px;
  height: 500px;
  ${gridCenter};
  grid-template-rows: 80% 20%;
  background-color: ${white};
  .main-image {
    max-height: 100%;
    object-fit: contain;
  }
  .secondary-images {
    height: 100%;
    ${flexCenter};
    img {
      max-height: 100%;
      object-fit: contain;
      width: calc(100% / ${({ sizeImages }) => sizeImages});
    }
  }
`;
