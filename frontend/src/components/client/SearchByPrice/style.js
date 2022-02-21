import styled from "styled-components";
import { bgGradiente } from "../../../consts/colors";
import { flexCenter } from "../../../styles/flexCenter";

export const SearchByPriceSc = styled.div`
  position: relative;
  ${flexCenter};
  width: 100%;
  height: 60px;
  &::after,
  &::before {
    position: absolute;
    bottom: 0px;
  }
  &::after {
    left: 0;
    content: "${({ min }) => min !== 0 && min}";
  }
  &::before {
    right: 0;
    content: "${({ max }) => max !== 0 && max}";
  }
  .range {
    -webkit-appearance: none;
    height: 1px;
    width: 100%;
    background-image: ${bgGradiente};
  }
  .range::-webkit-slider-thumb,
  .range::-moz-range-thumb {
    -webkit-appearance: none;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    background-image: ${bgGradiente};
  }
`;
