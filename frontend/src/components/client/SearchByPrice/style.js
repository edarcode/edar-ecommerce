import styled, { css } from "styled-components";
import { bgGradiente } from "../../../consts/colors";
import { flexCenter } from "../../../styles/flexCenter";

const sliderStyles = () => css`
  -webkit-appearance: none;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-image: ${bgGradiente};
  cursor: pointer;
`;

export const SearchByPriceSc = styled.div`
  position: relative;
  ${flexCenter};
  width: 100%;
  height: 60px;
  max-width: 400px;
  .min,
  .max {
    position: absolute;
    top: -5px;
  }
  .min {
    left: 0;
  }
  .max {
    right: 0;
  }
  .left,
  .right {
    position: absolute;
    bottom: 0;
    width: 15px;
    height: 15px;
  }
  .right {
    left: 5px;
  }
  .left {
    right: 5px;
  }

  .range {
    -webkit-appearance: none;
    height: 1px;
    width: 100%;
    background-image: ${bgGradiente};
    &::-webkit-slider-thumb {
      ${sliderStyles};
    }
    &::-moz-range-thumb {
      ${sliderStyles};
    }
  }
  .range--upper {
    transform: rotate(180deg);
  }
`;
