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
    padding-top: 24px;
    h1 {
      font-size: 36px;
      line-height: 36px;

      padding: 20px;
      margin: 0;
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
    margin-bottom: 84px;
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

export const TopReciperSection = styled.div`
  margin-top: 56px;
  h2 {
    font-family: Roboto Slab;
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 36px;

    color: #3f3d3c;

    margin-bottom: 32px;
  }
`;

export const TopReciperSectionItem = styled.div`
  background-color: #fff;
  color: #444;
  overflow: hidden;
  position: relative;
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }

  .title-box {
    position: absolute;
    bottom: 0;
    height: 72px;
    width: 100%;
    background: linear-gradient(
      180deg,
      rgba(105, 105, 105, 0) -2.24%,
      rgba(0, 0, 0, 0.56) 67.52%
    );
    h3 {
      font-family: Roboto Slab;
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 24px;

      padding: 24px;
    }
  }
`;
