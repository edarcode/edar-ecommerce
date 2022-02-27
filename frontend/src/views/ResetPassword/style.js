import styled from "styled-components";
import { gridCenter } from "../../styles/gridCenter";

export const ResetPasswordSc = styled.main`
  ${gridCenter};
  form {
    ${gridCenter};
    justify-items: stretch;
    gap: 5px;
    width: 300px;
    @media (min-width: 768px) {
      transform: scale(1.4);
    }
  }
`;
