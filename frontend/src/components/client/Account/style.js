import styled from "styled-components";
import { bgBox } from "../../../consts/colors";

export const AccountSc = styled.div`
  position: relative;
  .dashboard-profile {
    position: absolute;
    top: 25px;
    background-color: ${bgBox};
    width: 100%;
    height: 600px;
  }
`;
