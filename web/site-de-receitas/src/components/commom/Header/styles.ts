import styled from 'styled-components';
import { animated } from 'react-spring';

export const Content = styled.header`
  width: 100%;
  background-color: #ff8a00;
  position: relative;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  height: 104px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonMenu = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  background-color: transparent;

  div {
    width: 22px;
    margin-right: 8px;

    span {
      width: 100%;
      display: block;
      background: #472e2e;
      border-radius: 4px;
      height: 3px;
      ~ span {
        margin-top: 5px;
      }
    }
  }

  span {
    font-family: Roboto Slab;
    font-weight: bold;
    font-size: 16px;
    line-height: 12px;
  }
`;

export const SearchContainer = styled.div`
  background-color: #f4ede8;
  max-width: 458px;
  width: 100%;
  height: 48px;
  border-radius: 8px;

  display: flex;

  input {
    border: 0;
    background-color: transparent;
    color: #707070;
    padding: 16px;
    width: 100%;
    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 30px white inset;
    }
    &::placeholder {
      color: #707070;
    }
  }

  button {
    border: 0;
    background-color: transparent;
    appearance: none;
    padding: 8px;
    margin-right: 16px;
  }
`;

export const MyAccountHeaderContainer = styled.div`
  display: flex;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 32px;

    a {
      text-decoration: none;
      & ~ a {
        margin-left: 24px;
      }
    }
  }
`;

export const MyAccountProfile = styled.div`
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    div {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      margin-right: 8px;
      border: 2px solid #f4ede8;
      position: relative;
      overflow: hidden;
      img {
        width: 100%;
        height: auto;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    span {
      font-family: Roboto Slab;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 16px;

      color: #472e2e;
      margin-right: 8px;
    }
  }
`;

export const MenuContent = styled(animated.div)`
  position: absolute;
  top: 104px;
  width: 100%;
  height: auto;
  max-height: 0px;
  border-bottom: 4px solid #ff8a00;
  background-color: #fff;
  overflow: hidden;
`;

export const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1120px;
  margin: 0 auto;
  padding-top: 40px;
  a {
    &.category {
      font-family: Roboto Slab;
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 20px;
      /* identical to box height, or 100% */

      color: #3f3d3c;
      text-decoration: none;
      & ~ .category {
        margin-top: 12px;
      }
    }
    &.all {
      font-family: Roboto Slab;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 16px;
      margin-top: 40px;
      margin-bottom: 32px;
      /* identical to box height, or 100% */

      color: #ff8a00;
    }
  }

  div {
    &.left {
      display: flex;
      flex-direction: column;
    }
  }
`;

export const MenuContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MenuContainerRight = styled.div`
  margin-left: 48px;
  width: 70%;
  h3 {
    font-family: Roboto Slab;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 24px;
    /* identical to box height, or 100% */

    color: #3f3d3c;
    text-decoration: none;
  }
  & > div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;
    width: 100%;
    margin-top: 32px;
    margin-bottom: 32px;
  }
`;

export const MenuContainerRightItem = styled.a`
  background-color: #fff;
  color: #444;
  overflow: hidden;
  position: relative;
  border-radius: 8px;
  aspect-ratio: 1.6/1;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: auto;
    transform: translate(-50%, -50%);
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

export const MenuContainerRightOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(000, 000, 000, 0.1);
  display: flex;
  align-items: flex-end;

  div {
    width: 100%;
    padding: 24px;
    background: linear-gradient(
      180deg,
      rgba(105, 105, 105, 0) -1.24%,
      rgba(0, 0, 0, 0.56) 65.52%
    );
    h3 {
      color: #f4ede8;
      font-family: Roboto Slab;
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 24px;
    }
  }

  @media screen and (max-width: 481px) {
    div {
      padding: 16px;
      h3 {
        font-size: 19px;
        line-height: 19px;
      }
    }
  }
`;
