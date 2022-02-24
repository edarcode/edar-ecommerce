import styled from "styled-components";
import { flexCenter } from "../../styles/flexCenter";
import { gridCenter } from "../../styles/gridCenter";

export const LoginSc = styled.main`
  ${gridCenter};
  .form-login {
    ${gridCenter};
    justify-items: stretch;
    gap: 5px;
    width: 300px;
    @media (min-width: 768px) {
      transform: scale(1.4);
    }
    .forget-password {
      margin-bottom: 40px;
    }
  }
  .login-gmail {
    ${flexCenter};
    justify-content: start;
    gap: 5px;
    img {
      width: 40px;
      cursor: pointer;
    }
  }
`;
