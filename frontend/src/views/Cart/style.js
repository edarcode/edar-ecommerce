import styled from "styled-components";
import { gridCenter } from "../../styles/gridCenter";

export const CartSc = styled.main`
  ${gridCenter};
  .cart-products {
    width: 100%;
  }
  .buy {
    margin-top: 5px;
    ${gridCenter};
    grid-template-columns: 1fr 1fr;
    max-width: 1200px;
    margin-left: auto;
    margin-right: auto;
    justify-self: end;
    align-self: start;
    button {
      justify-self: end;
    }
  }
`;
