import styled from "styled-components";

export const HeaderSc = styled.header`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;
  nav {
    position: absolute;
    top: 30px;
    width: 100%;
    height: 0;
    overflow: hidden;
    transition: height 0.8s ease;
  }
  .collapse {
    height: 234.125px;
  }
`;
