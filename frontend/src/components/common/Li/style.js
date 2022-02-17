import styled from "styled-components";
import { afterLineAnimated } from "../../../styles/afterLineAnimated";

export const LiSc = styled.li`
  padding: 8px;
  a {
    position: relative;
    ${({ selected }) => selected && afterLineAnimated()};
    svg {
      display: grid;
      align-items: center;
      width: 25px;
      height: 25px;
    }
  }
`;
