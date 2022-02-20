import styled from "styled-components";
import { bgBox, bgNavbar } from "../../../consts/colors";
import { flexCenter } from "../../../styles/flexCenter";
import { gridCenter } from "../../../styles/gridCenter";

export const PagedSc = styled.div`
  ul {
    ${flexCenter};
    gap: 5px;
    li {
      a {
        border-radius: 50%;
        padding: 8px 13px;
        background-color: ${bgBox};
        &:hover {
          background-color: ${bgNavbar};
        }
      }
    }
  }
  .active {
    background-color: ${bgNavbar};
  }
  .next,
  .previous {
    a {
      padding: 3px;
      ${gridCenter};
      border-radius: 50%;
    }
  }
`;
