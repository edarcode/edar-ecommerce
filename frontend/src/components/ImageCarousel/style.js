import styled from "styled-components";
import { bgNavbar, white } from "../../consts/colors";

export const ImageCarouselSc = styled.div`
  height: 300px;
  display: flex;
  align-items: center;
  img {
    object-fit: contain;
    max-height: 100%;
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
