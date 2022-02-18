import styled from "styled-components";
import { bgWebsite, lyrics, white } from "./consts/colors";

export const AppSc = styled.div`
  background-color: ${bgWebsite};
  color: ${lyrics};
  a {
    color: ${white};
  }
`;
