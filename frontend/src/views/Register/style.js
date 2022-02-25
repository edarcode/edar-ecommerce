import styled from "styled-components";
import { gridCenter } from "../../styles/gridCenter";

export const RegisterSc = styled.main`
  ${gridCenter};
  form {
    ${gridCenter};
    justify-items: stretch;
    gap: 5px;
    width: 300px;
    @media (min-width: 768px) {
      transform: scale(1.4);
    }
    .require {
      font-size: 1.19rem;
      margin-bottom: 40px;
    }
    .go-login {
      justify-self: end;
      font-size: 1.19rem;
    }
  }
`;
