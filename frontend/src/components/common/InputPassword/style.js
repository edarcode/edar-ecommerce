import styled from "styled-components";
import { inputStyles } from "../../../styles/inputStyles";

export const InputPasswordSc = styled.div`
  ${inputStyles};
  grid-template-columns: 1fr 30px;
  .eye-off {
    display: none;
  }
  svg {
    padding: 2px;
    width: 80%;
    height: 100%;
    cursor: pointer;
  }
`;
