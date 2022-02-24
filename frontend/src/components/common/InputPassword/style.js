import styled from "styled-components";
import { inputStyles } from "../../../styles/inputStyles";

export const InputPasswordSc = styled.label`
  ${inputStyles};
  position: relative;
  .eye-off {
    display: none;
  }
  .eye-on {
    position: absolute;
    bottom: calc(50% - 9.5px);
    right: 8px;
    cursor: pointer;
    width: 20px;
    height: 20px;
  }
`;
