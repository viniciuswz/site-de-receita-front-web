import styled, { keyframes } from 'styled-components';

const opacity = keyframes`
  from {
    opacity: 0;

  }

  to {
    opacity: 1;

  }
`;

export const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 20;
`;

export const Content = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #fff;
  width: 80%;
  height: 100%;
`;

export const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  animation: ${opacity} 0.5s forwards;
  opacity: 0;
`;

export const UserInfo = styled.div`
  height: 96px;
  width: 100%;
  border-bottom-right-radius: 50px;
  background-color: #ff8a00;

  display: flex;
  align-items: center;
  padding: 0 16px;

  div {
    width: 58px;
    height: 58px;
    position: relative;
    border: 2px solid #ffffff;
    border-radius: 50%;
    overflow: hidden;
    img {
      width: 100%;
      height: auto;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  }

  p {
    font-family: Roboto Slab;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 16px;
    color: #ffffff;
    margin-left: 8px;
    span {
      display: block;
    }
  }
`;

export const Navigation = styled.nav`
  margin-top: 24px;
  padding: 0 16px;
  h3 {
    font-family: Roboto Slab;
    font-weight: bold;
    font-size: 16px;
    line-height: 16px;
    color: #3f3d3c;
    margin-bottom: 16px;
  }
  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    a {
      display: flex;
      align-items: center;
      text-decoration: none;
      width: 100%;
    }
    button {
      cursor: pointer;
      border: 0;
      background: transparent;
      display: flex;
      align-items: center;
    }
    span {
      font-family: Roboto Slab;
      font-weight: 500;
      font-size: 16px;
      line-height: 16px;
      color: #3f3d3c;
    }
    li {
      svg {
        width: 24px;
        height: auto;
        margin-right: 16px;
        color: #3f3d3c;
      }
      & ~ li {
        margin-top: 16px;
      }
    }
  }
`;

export const ButtonClose = styled.button`
  z-index: 1;
  margin: 24px;
  background-color: transparent;
  border: 0;

  position: absolute;
  top: 0;
  right: 0;

  svg {
    color: #fff;
  }
`;
