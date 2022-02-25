import styled from "styled-components";
import { bgGradiente, bgWebsite, white } from "../../../consts/colors";

export const Button = styled.button`
  background-image: ${bgGradiente};
  padding: 10px 30px;
  color: ${white};
  border-radius: 3px;
  border: none;
  cursor: pointer;
  &:active {
    transform: scale(1.05);
  }
`;
export const ButtonModal = styled(Button)`
  background: ${bgWebsite};
`;
