import styled from 'styled-components';

export const FirstFold = styled.div`
  width: 100%;
  height: 100%;
  background-color: #ff8a00;
  position: relative;
`;

export const FirstFoldContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  .main-image {
    margin-top: 46px;
    margin-bottom: 24px;
    width: 100%;
    max-width: 456px;
  }
  h1 {
    width: 100%;
    font-family: Roboto Slab;
    font-style: normal;
    font-weight: 500;
    font-size: 54px;
    line-height: 54px;
    text-align: center;

    color: #f4ede8;
    margin-bottom: 60px;
  }
  @media screen and (max-width: 1024px) and (min-width: 482px) {
    h1 {
      font-size: 38px;
      margin-bottom: 20px;
      padding: 16px;
    }
  }

  @media screen and (max-width: 481px) {
    padding: 24px 16px;
    h1 {
      font-size: 30px;
      line-height: 30px;

      margin: 20px 0;

      width: 90%;
    }

    .main-image {
      width: 80%;
    }
  }
`;

export const InputContainer = styled.div`
  background-color: #f4ede8;
  display: flex;
  align-items: center;
  border-radius: 8px;
  width: 90%;

  max-width: 416px;
  margin-bottom: 184px;

  svg {
    margin: 16px;
  }
  input {
    background: transparent;
    border: 0;
    padding: 21px 0;
    font-family: Roboto Slab;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 16px;
    width: 100%;
    /* identical to box height, or 100% */

    color: #707070;
  }

  @media screen and (max-width: 1024px) {
    margin-bottom: 34px;
  }

  @media screen and (max-width: 481px) {
    width: 100%;
    max-width: none;
  }
`;

export const FirstFoldDetails = styled.div`
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  .left-icons {
    position: absolute;
    max-width: 400px;
  }

  .right-icons {
    position: absolute;
    max-width: 400px;
    right: 0;
    transform: scaleX(-1);
  }

  .left-detail {
    position: absolute;
    bottom: 0;
  }

  .right-detail {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: scaleX(-1);
  }

  @media screen and (max-width: 1024px) {
    .right-detail,
    .left-detail {
      display: none;
    }

    .left-icons {
      display: none;
      transform: scale(0.8);
    }

    .right-icons {
      display: none;
      transform: scaleX(-0.8) scaleY(0.8);
    }
  }
`;

export const TopReciperSectionGridContainer = styled.div`
  display: grid;
  grid-gap: 32px;
  grid-template-areas:
    'a a a a a a a b b b b b'
    'a a a a a a a b b b b b'
    'c c c c c c d d d d d d'
    'c c c c c c d d d d d d'
    'e e e e e e d d d d d d'
    'e e e e e e f f f f f f'
    'e e e e e e f f f f f f';
  @media screen and (max-width: 1024px) and (min-width: 769px) {
    grid-gap: 24px;
  }

  @media screen and (max-width: 768px) {
    grid-gap: 16px;
  }
`;

export const TopReciperSection = styled.div`
  margin-top: 56px;
  padding: 0 24px;

  h2 {
    font-family: Roboto Slab;
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 36px;

    color: #3f3d3c;

    margin-bottom: 32px;
  }

  @media screen and (max-width: 768px) {
    padding: 0 16px;
    margin-top: 36px;
  }

  @media screen and (max-width: 481px) {
    h2 {
      font-size: 24px;
      line-height: 24px;
      margin-bottom: 24px;
    }
  }
`;

export const TopReciperSectionContainer = styled.div`
  max-width: 1120px;
  margin: 0 auto;
`;

export const CategorySection = styled.div`
  margin: 56px 24px;
  margin-bottom: 0;
  padding-bottom: 32px;

  @media screen and (max-width: 481px) {
    margin: 32px 16px;
    margin-bottom: 0;
    padding-bottom: 16px;
  }
`;

export const CategorySectionContainer = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  h2 {
    font-family: Roboto Slab;
    font-size: 36px;
    line-height: 36px;
    color: #3f3d3c;
    margin-bottom: 16px;
    width: 100%;
    text-align: center;
  }
  p {
    font-family: Roboto Slab;
    font-size: 24px;
    line-height: 24px;
    font-style: normal;
    font-weight: 400;
    color: #3f3d3c;
    width: 100%;
    text-align: center;
    margin-bottom: 64px;
  }

  @media screen and (max-width: 1024px) {
    h2 {
      margin-bottom: 8px;
      font-size: 24px;
      line-height: 24px;
    }

    p {
      font-size: 16px;
      line-height: 16px;
      margin-bottom: 32px;
    }
  }
`;

export const CategorySectionGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 32px;
  a {
    display: block;
    aspect-ratio: 1;
    overflow: hidden;
    position: relative;
    border-radius: 8px;
    img {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 100%;
      height: auto;
    }
    div {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.35);

      display: flex;
      justify-content: center;
      align-items: center;

      span {
        font-family: Roboto Slab;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: 20px;
        text-align: center;
        color: #f4ede8;
        padding: 8px;
      }
    }
  }

  @media screen and (max-width: 1024px) and (min-width: 482px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 24px;
  }
  @media screen and (max-width: 481px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 16px;
  }
`;

export const HomeBackground = styled.main`
  background-color: #fff8f2;
`;
