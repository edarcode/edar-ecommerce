import styled from "styled-components";
import { bgNavbar, white } from "../../../consts/colors";
import { flexCenter } from "../../../styles/flexCenter";

export const SuccessfullySc = styled.div`
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
  @media (min-width: 768px) {
    width: 450px;
    min-height: 450px;
    top: calc(50vh - 225px);
    left: calc(50vw - 225px);
  }
  span {
    padding: 10px;
    text-align: center;
  }
  svg {
    width: 50%;
    height: 50%;
  }
`;
