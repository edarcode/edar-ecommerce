import { white } from "../consts/colors";
import { css } from "styled-components";

export const afterLineAnimated = () => css`
  &::after {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 2px;
    background-color: ${white};
    animation: playful-line 0.4s ease;
    @keyframes playful-line {
      0% {
        width: 0%;
      }
      25% {
        width: 25%;
      }
      50% {
        width: 50%;
      }
      75% {
        width: 75%;
      }
      100% {
        width: 100%;
      }
    }
  }
`;
