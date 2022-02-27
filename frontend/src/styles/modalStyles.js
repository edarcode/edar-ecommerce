import { css } from "styled-components";
import { bgNavbar, white } from "../consts/colors";
import { flexCenter } from "./flexCenter";

export const modalStyles = () => css`
  ${flexCenter};
  flex-direction: column;
  position: absolute;
  top: calc(50vh - 160px);
  left: calc(50vw - 160px);
  width: 320px;
  min-height: 320px;
  background-color: ${bgNavbar};
  border-radius: 3px;
  color: ${white};
  padding: 10px;
  text-align: center;
  @media (min-width: 768px) {
    width: 450px;
    min-height: 450px;
    top: calc(50vh - 225px);
    left: calc(50vw - 225px);
  }
`;
