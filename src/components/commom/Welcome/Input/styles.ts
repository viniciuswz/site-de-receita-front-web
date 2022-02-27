import styled, { css } from 'styled-components';

import { shade } from 'polished';

interface ContainerProps {
  hasValue: boolean;
}

interface ContainerProps {
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  border: 2px solid #e6e6f0;
  margin: -2px;
  display: flex;
  align-items: center;

  flex-direction: column;

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
    /* border-color: #000; */
    z-index: 1;
    &::before {
      content: '';
      height: 80%;
      width: 2px;
      background-color: #000;
      border-radius: 12px;

      position: absolute;
      left: -2px;
      top: 50%;
      transform: translateY(-50%);
    }
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

    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 30px white inset;
    }

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

  ${props =>
    props.isErrored &&
    css`
      border-color: #db3b21;
      background-color: rgba(219, 5, 33, 10%);
      min-height: 72px;
      height: auto;
      z-index: 2;

      .error-icon {
        margin-right: 24px;
        min-width: 24px;
      }
      label {
        color: ${shade(0.4, '#c1bccc')};
      }
      input {
        &:-webkit-autofill {
          -webkit-box-shadow: 0 0 0 30px #fbe6e8 inset;
        }
        &:focus {
          & + label {
            color: ${shade(0.4, '#c1bccc')};
          }
        }
      }
      &.focus {
        &::before {
          background-color: #db3b21;
        }
      }
    `}
`;

export const ContainerInput = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  height: 72px;
`;
export const ContainerError = styled.div`
  position: absolute;
  left: 24px;
  bottom: 4px;
  z-index: 1;

  span {
    font-family: Roboto Slab;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 12px;

    color: #db3b21;
  }
`;

export const PasswordButton = styled.button`
  background: transparent;
  border: 0;
  appearance: none;
  margin-right: 24px;
  height: 24px;
`;
