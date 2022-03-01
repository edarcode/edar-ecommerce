import { css } from "styled-components";
import { bgBox, bgWebsite } from "../consts/colors";

export const scrollStyles = () => css`
  &::-webkit-scrollbar {
    -webkit-appearance: none;
  }

  &::-webkit-scrollbar:vertical {
    width: 10px;
    background-color: ${bgWebsite};
  }

  &::-webkit-scrollbar-button:increment {
    display: none;
  }
  &::-webkit-scrollbar-button {
    display: none;
  }

  &::-webkit-scrollbar:horizontal {
    height: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${bgBox};
    width: 100%;
    border-radius: 25px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
  }
`;
