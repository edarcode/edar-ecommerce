import { css } from "styled-components";
import { bgBox, bgNavbar, white } from "../consts/colors";
import { gridCenter } from "./gridCenter";

export const inputStyles = () => css`
  ${gridCenter};
  justify-items: start;
  border-radius: 3px;
  background-color: ${bgBox};
  &:focus {
    outline: 2px solid ${bgNavbar};
  }
  input {
    padding: 10px 12px;
    width: 100%;
    color: ${white};
    background-color: ${bgBox};
    border: none;
    &::placeholder {
      font-size: 1.4rem;
    }
    &:focus {
      outline: none;
    }
  }
  svg {
    width: 20px;
    height: 20px;
  }
`;
