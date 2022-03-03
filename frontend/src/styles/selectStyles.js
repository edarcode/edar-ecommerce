import { css } from "styled-components";
import { bgNavbar } from "../consts/colors";

export const selectStyles = () => css`
  cursor: pointer;
  background: transparent;
  border: none;
  color: inherit;
  padding: 10px;
  margin-left: 7px;
  &:focus {
    outline: 2px solid ${bgNavbar};
  }
`;
