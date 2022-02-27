import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 40px;
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  margin-top: 40px;
  width: 100%;

  h3 {
    font-family: Roboto Slab;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    /* identical to box height, or 120% */

    color: #3f3d3c;
  }
`;

export const RatingListFilterButton = styled.button`
  width: 256px;
  height: 48px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;

  border: 1px solid #3f3d3c;
  border-radius: 8px;
  background-color: transparent;

  span {
    font-family: Roboto Slab;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 16px;

    color: #3f3d3c;
  }

  svg {
    width: 24px;
    height: 24px;
  }
`;

export const RatingListFilterDropdow = styled.div``;

export const RatingListItem = styled.div`
  display: flex;
  width: 100%;

  & ~ div {
    margin-top: 16px;
  }
`;

export const RatingListItemContent = styled.div`
  width: 100%;
`;

export const RatingListItemHeader = styled.div`
  display: flex;
`;

export const RatingListItemHeaderPhoto = styled.div`
  border: 1px solid #f4ede8;
  box-sizing: border-box;
  width: 64px;
  height: 64px;
  min-width: 64px;
  min-height: 64px;
  overflow: hidden;
  border-radius: 50%;
  object-fit: cover;

  margin-right: 16px;

  img {
    width: 100%;
    height: auto;
  }
`;

export const RatingListItemHeaderInfo = styled.div`
  p {
    font-family: Roboto Slab;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;

    color: #3f3d3c;
    margin-bottom: 8px;
  }

  div {
    display: flex;
    align-items: center;
    div {
      display: flex;
      margin-right: 8px;
      svg {
        color: #fca228;
        width: 18px;
        height: 18px;
      }
    }

    span {
      font-family: Roboto Slab;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 13px;

      color: #616161;
    }
  }
`;

export const RatingListItemText = styled.p`
  margin-top: 16px;
  font-family: Roboto Slab;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;

  color: #3f3d3c;
`;

export const RatingListPhotosUploaded = styled.div`
  display: grid;
  margin-top: 8px;
  /* flex: 1; */
  /* width: 100%; */
  /* max-width: 400px; */

  border-radius: 8px;

  ul {
    list-style: none;
    display: flex;

    li {
      object-fit: cover;
      aspect-ratio: 16/9;
      position: relative;
      border-radius: 8px;
      overflow: hidden;
      min-width: 163px;

      img {
        width: 100%;
        height: auto;
      }
      & ~ li {
        margin-left: 8px;
      }

      button {
        position: absolute;
        top: 8px;
        right: 8px;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background: rgba(63, 61, 60, 0.8);
      }
    }
    margin-right: 16px;
  }

  button {
    background-color: transparent;
    border: 0;

    font-family: Roboto Slab;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 13px;

    color: #fff;

    svg {
      width: 16px;
      height: 16px;
    }
  }

  .photosUploaded {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }

  .swiper-wrapper {
    .swiper-slide {
      /* width: 20%; */
      height: 100%;
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
`;

export const RatingListOpinion = styled.div`
  margin-top: 16px;
  p {
    font-family: Roboto Slab;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 13px;

    color: #616161;

    margin-bottom: 8px;
  }

  div {
    display: flex;
    align-items: center;
    button {
      border: 0;
    }
    button.rating {
      width: 40px;
      height: 40px;
      background: #e7e2e2;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;

      svg {
        color: #3f3d3c;
        width: 24px;
        height: 24px;
      }
      & ~ button {
        margin-left: 8px;
      }
    }
    button.delate {
      background-color: transparent;

      font-family: Roboto Slab;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 14px;
      /* identical to box height, or 108% */

      text-decoration-line: underline;

      color: #616161;
    }
  }
`;

export const RatingListLoadMore = styled.button`
  margin-top: 48px;
  font-family: Roboto Slab;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 13px;

  text-decoration-line: underline;

  color: #666666;

  background-color: transparent;
  border: 0;
`;
