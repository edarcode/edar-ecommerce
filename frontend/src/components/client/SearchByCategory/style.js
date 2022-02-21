import styled from "styled-components";
import { bgBox, bgGradiente, white } from "../../../consts/colors";
import { flexCenter } from "../../../styles/flexCenter";

export const SearchCategorySc = styled.div`
  position: relative;
  width: 100%;
  .title {
    ${flexCenter};
    gap: 15px;
    font-size: 2.5rem;
    background-image: ${bgGradiente};
    color: ${white};
    border-radius: 5px;
    padding: 8px;
    svg {
      padding-top: 5px;
      width: 25px;
      height: 25px;
    }
  }
  .categories {
    position: absolute;
    top: 50px;
    left: -2px;
    z-index: 10;
    width: 0;
    overflow: hidden;
    background-color: ${bgBox};
    transition: width 0.8s ease;
    li {
      text-align: center;
      padding: 8px;
      text-transform: capitalize;
    }
    .selected {
      background-image: ${bgGradiente};
      color: ${white};
      border-radius: 3px;
    }
  }
  .categories--collapse {
    padding: 20px 5px;
    width: calc(100% + 4px);
  }
`;
