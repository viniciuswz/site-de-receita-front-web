import styled, { css } from 'styled-components';

interface ContainerProps {
  hasValue: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  border: 2px solid #e6e6f0;
  margin: -2px;
  height: 72px;
  display: flex;
  align-items: center;

  &.top {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  &.middle {
  }
  &.bottom {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
  }
  &.focus {
    border-color: #000;
    z-index: 1;
  }
  input {
    width: 100%;
    height: 100%;
    border: 0;
    background: transparent;
    padding: 24px;

    font-family: Roboto Slab;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #6a6180;
    transition: 150ms;

    &:focus {
      & + label {
        transform: translateY(-15px);
        font-size: 12px;
        line-height: 20px;
        z-index: 2;
        color: #c1bccc;
      }
      padding: 14px 24px;
      height: 70%;
      z-index: 1;
      transform: translateY(5px);
    }
    ${props =>
      props.hasValue &&
      css`
        padding: 14px 24px;
        height: 70%;
        z-index: 1;
        transform: translateY(5px);
      `}
  }
  label {
    position: absolute;
    left: 26px;
    transition: 150ms;

    font-family: Roboto Slab;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #9c98a6;
    ${props =>
      props.hasValue &&
      css`
        transform: translateY(-15px);
        font-size: 12px;
        line-height: 20px;
        z-index: 2;
        color: #c1bccc;
      `}
  }
`;
