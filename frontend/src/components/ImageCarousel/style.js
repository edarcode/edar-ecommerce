import styled from "styled-components";

export const ImageCarouselSc = styled.div`
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
  .left {
    left: 0;
  }
  .right {
    right: 0;
  }
`;
