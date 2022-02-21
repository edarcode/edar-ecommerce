import styled from "styled-components";
import { bgNavbar, white } from "../../../consts/colors";
import { flexCenter } from "../../../styles/flexCenter";

export const HeaderSc = styled.header`
  position: relative;
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  padding: 15px;
  nav {
    position: absolute;
    top: 60px;
    z-index: 20;
    width: 100%;
    height: 0;
    overflow: hidden;
    transition: height 0.8s ease;
  }
  .collapse {
    height: 272.13px;
  }
  @media (min-width: 1024px) {
    grid-template-columns: 30px 1fr;
    background-color: ${bgNavbar};
    color: ${white};
    font-size: 2rem;
    .fabars {
      display: none;
    }
    nav {
      position: relative;
      top: 0;
      height: auto;
      ul {
        ${flexCenter};
        gap: 12px;
      }
    }
    .collapse {
      height: auto;
    }
  }
`;
