import styled from "styled-components";
import { bgBox, white } from "../../../consts/colors";
import { gridCenter } from "../../../styles/gridCenter";

export const SearchByNameSc = styled.div`
  ${gridCenter};
  grid-template-columns: 1fr auto;
  background-color: ${bgBox};
  border-radius: 25px;
  padding: 1px 8px;
  width: 100%;
  max-width: 600px;
  input {
    width: 100%;
    padding-left: 5px;
    color: ${white};
    border: none;
    outline: none;
    background-color: ${bgBox};
  }
`;
