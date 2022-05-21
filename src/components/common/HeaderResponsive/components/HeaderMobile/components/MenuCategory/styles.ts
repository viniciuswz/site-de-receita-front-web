import { animated } from 'react-spring';
import styled from 'styled-components';

export const Container = styled(animated.div)`
  position: fixed;

  width: 100%;
  height: 100%;
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

export const Header = styled.div`
  height: 68px;
  width: 100%;
  border-bottom-right-radius: 50px;
  background-color: #ff8a00;

  display: flex;
  align-items: center;
  padding: 0 8px;

  span {
    font-family: Roboto Slab;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 18px;

    color: #f4ede8;
  }

  svg {
    color: #fff;
    width: 32px;
    height: 32px;
  }
`;

export const Navigation = styled.nav`
  margin-top: 24px;
  padding: 0 16px;

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;

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
      display: flex;
      align-items: center;
      border: 1px solid #dddddd;
      border-radius: 8px;
      height: 46px;
      overflow: hidden;
      img {
        width: auto;
        height: 46px;
      }
      span {
        font-family: Roboto Slab;
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 16px;
        /* identical to box height, or 100% */

        color: #3f3d3c;

        margin-left: 8px;
        flex: 1;
      }
      svg {
        width: 24px;
        height: 24px;
        margin-right: 4px;
      }

      & ~ li {
        margin-top: 8px;
      }
    }
  }
`;

export const ButtonBack = styled.button`
  background-color: transparent;
`;
