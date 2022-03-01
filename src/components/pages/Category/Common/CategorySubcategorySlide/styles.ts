import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  width: 100%;

  padding: 0 32px;
  margin-bottom: 64px;

  h2 {
    font-family: Roboto Slab;
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 36px;
    margin-bottom: 16px;
    color: #3f3d3c;
  }

  .subcategories-slide {
    &::before {
      content: '';
      display: block;
      position: absolute;
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 1) 15%,
        rgba(255, 255, 255, 0) 100%
      );
      height: 100%;
      width: 105px;
      z-index: 2;
    }
    &::after {
      content: '';
      display: block;
      position: absolute;
      right: 0;
      top: 0;
      background: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) 15%,
        rgba(255, 255, 255, 1) 100%
      );
      height: 100%;
      width: 105px;

      z-index: 2;
    }
    .swiper-wrapper {
    }

    .swiper-slide {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      img {
        max-width: 104px;
        width: 100%;
        height: auto;
        border-radius: 50%;
      }
    }

    .swiper-button-prev,
    .swiper-button-next {
      width: 40px;
      height: 40px;
      background: #ffffff;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
      border-radius: 50%;
      color: #472e2e;
      font-weight: bold;
      &::after {
        font-size: 20px;
      }
    }
    p {
      font-family: Roboto Slab;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 16px;
      /* identical to box height, or 100% */

      text-align: center;

      color: #3f3d3c;

      margin-top: 8px;
    }
  }

  @media screen and (max-width: 481px) {
    padding: 0 16px;

    h2 {
      font-size: 24px;
      line-height: 24px;
    }
  }
`;
