import styled from "styled-components";

export const ImageCarouselSc = styled.div`
  position: relative;
  overflow: hidden;
  height: 300px;
  img {
    object-fit: contain;
    max-height: 100%;
  }
  .left,
  .right {
    position: absolute;
    top: calc(50% - 15px);
  }
  .right {
    right: 0;
  }
`;
