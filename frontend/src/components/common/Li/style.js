import styled from "styled-components";
import { afterLineAnimated } from "../../../styles/afterLineAnimated";

export const LiSc = styled.li`
  padding: 8px;
  a {
    position: relative;
    ${({ selected }) => selected && afterLineAnimated()};
  }
`;
