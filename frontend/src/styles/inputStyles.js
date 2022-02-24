import { css } from "styled-components";
import { bgBox, bgNavbar, white } from "../consts/colors";
import { outlineErr } from "./outlineErr";

export const inputStyles = () => css`
  border-radius: 3px;
  background-color: ${bgBox};
  input {
    padding: 10px 12px;
    width: 100%;
    color: ${white};
    background-color: ${bgBox};
    border: none;
    outline: ${outlineErr};
    border-radius: 3px;
    &::placeholder {
      font-size: 1.4rem;
    }
    &:focus {
      outline: 2px solid ${bgNavbar};
    }
  }
`;
