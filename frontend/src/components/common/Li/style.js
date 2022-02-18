import styled from "styled-components";
import { afterLineAnimated } from "../../../styles/afterLineAnimated";

export const LiSc = styled.li`
  padding: 10px 8px;
  a {
    position: relative;
    ${({ selected }) => selected && afterLineAnimated()};
  }
`;
