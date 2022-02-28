import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
`;

export const BannerLeft = styled.div`
  width: 50%;
  border-bottom-right-radius: 160px;
  object-fit: cover;
  img {
    aspect-ratio: 21/9;
    width: 100%;
    height: auto;
  }
`;

export const BannerRight = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  h1 {
    font-family: Roboto Slab;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 36px;
    margin-bottom: 24px;

    color: #f4ede8;
  }

  p {
    font-family: Roboto Slab;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 16px;

    color: #f4ede8;

    max-width: 504px;
  }
`;
