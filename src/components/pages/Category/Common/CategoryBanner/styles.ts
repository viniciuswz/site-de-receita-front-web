import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: relative;
  background-color: #25252d;
  margin-bottom: 64px;
  width: 100%;
`;

export const BannerLeft = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  border-bottom-right-radius: 160px;
  object-fit: cover;
  overflow: hidden;
  margin-right: 32px;
  max-height: 263px;
  img {
    align-self: center;
    width: 100%;
    height: auto;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    border-bottom-right-radius: 0;
    margin-right: 0px;
    max-height: none;

    img {
      width: auto;
      height: 100%;
    }
  }
  @media screen and (max-width: 768px) and (min-width: 650px) {
    img {
      width: 100%;
      height: auto;
    }
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
    width: 90%;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    position: absolute;
    padding: 32px;

    background-color: rgba(0, 0, 0, 0.3);
  }
  @media screen and (max-width: 481px) {
    padding: 16px;
  }
`;
