import styled from 'styled-components';

export const CoverContainer = styled.div`
  position: relative;
  img {
    object-fit: cover;
    aspect-ratio: 16/4;
    width: 100%;
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  @media screen and (max-width: 768px) {
    img {
      aspect-ratio: 16/5;
    }
  }
  @media screen and (max-width: 481px) {
    img {
      aspect-ratio: 16/7;
      display: block;
      border-radius: 0;
    }
  }
`;

export const ToggleCoverButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 48px;
  height: 48px;
  position: absolute;
  bottom: 40px;
  right: 40px;
  border: 0;
  border-radius: 50%;

  background-color: #fff;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
  svg {
    width: 24px;
    height: 24px;
    color: #3f3d3c;
  }

  @media screen and (max-width: 481px) {
    bottom: 24px;
    right: 24px;
  }
`;
