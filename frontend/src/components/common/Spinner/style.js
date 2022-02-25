import styled from "styled-components";
import { bgNavbar } from "../../../consts/colors";

export const SpinnerSc = styled.div`
  position: absolute;
  top: calc(50vh - 80px);
  left: calc(50vw - 80px);
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: solid ${bgNavbar};
  border-width: 0px 3px 0px 0px;
  animation: spinner 0.7s linear infinite;
  @keyframes spinner {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
