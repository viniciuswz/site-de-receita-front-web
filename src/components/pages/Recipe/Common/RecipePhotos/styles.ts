import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  width: 100%;

  .mySwiper {
    height: auto;
    width: 100%;
    border-radius: 8px;

    .swiper-wrapper {
      img {
        width: 100%;
        height: 100%;
        aspect-ratio: 16/9;
        object-fit: cover;
        border-radius: 8px;
      }
    }
    .swiper-button-next,
    .swiper-button-prev {
      color: #fff;
    }
  }
  .thumbs {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 16px;
    border-radius: 8px;

    .swiper-wrapper {
      .swiper-slide {
        /* width: 20%; */
        height: 100%;
        opacity: 0.4;
        margin-right: 16px;

        &.swiper-slide-thumb-active {
          opacity: 1;
        }
      }

      img {
        width: 100%;
        height: auto;
        aspect-ratio: 16/9;
        object-fit: cover;
        border-radius: 8px;
      }
    }
  }
`;
