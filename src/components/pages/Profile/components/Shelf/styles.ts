import styled from 'styled-components';

export const ShelfContent = styled.div`
  margin-right: 24px;
  & > h3 {
    font-family: 'Roboto Slab';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 16px;
    margin: 24px 0;
  }

  @media screen and (max-width: 1024px) {
    margin: 0 24px;
  }

  @media screen and (max-width: 481px) {
    overflow: hidden;
    margin: 0 0px;
    & > h3 {
      margin: 24px;
    }
  }
`;

export const ShelfScroll = styled.div`
  border-radius: 14px;
  overflow: hidden;

  a {
  }
  .swiper-slide {
    width: 70%;
  }
  .swiper-button-prev,
  .swiper-button-next {
    color: #fff;
    filter: drop-shadow(0px 0px 3px rgba(000, 000, 000, 0.2));
    width: 40px;
    height: 40px;
  }

  @media screen and (max-width: 1024px) {
    .swiper-slide {
      width: 80%;
    }
  }
  @media screen and (max-width: 768px) {
    .swiper-slide {
      width: 100%;
    }
  }

  @media screen and (max-width: 481px) {
    overflow: visible;
    .mySwiper {
      overflow: visible;
      margin: 0 24px;
    }
    .swiper-button-prev,
    .swiper-button-next {
      color: #000;
      filter: drop-shadow(0px 0px 3px rgba(000, 000, 000, 0.2));
      width: 40px;
      height: 40px;
      background-color: #fff;
      border-radius: 100%;
      &::after {
        font-size: 24px;
      }
    }
    .swiper-button-prev {
      left: -10px;
    }
    .swiper-button-next {
      right: -10px;
    }
  }
`;
