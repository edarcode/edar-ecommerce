import styled from "styled-components";
import { bgNavbar, white } from "../../../consts/colors";

export const ImageCarouselSc = styled.div`
  height: 300px;
  display: flex;
  align-items: center;
  a {
    display: flex;
    align-items: center;
    height: 100%;
    img {
      max-height: 100%;
      object-fit: contain;
    }
  }
  .left,
  .right {
    position: absolute;
    top: calc(50% - 15px);
    cursor: pointer;
    border-radius: 50%;
    text-align: center;

    &:hover {
      background-color: ${bgNavbar};
      color: ${white};
    }
    &:active {
      transform: scale(0.7);
    }
  }
  .left {
    padding-right: 3px;
    left: 0;
  }
  .right {
    padding-left: 3px;
    right: 0;
  }
`;
