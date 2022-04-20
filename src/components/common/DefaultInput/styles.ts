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
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

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
  }
  input {
    width: 100%;
    height: 100%;
    border: 0;
    background: transparent;
    padding: 16px;
    border: 1px solid #b9c2da;

    font-family: Roboto Slab;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    color: #6a6180;
    transition: 150ms;
    border-radius: 8px;

    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 30px white inset;
    }

    &:focus {
    }
  }
  label {
    font-family: Roboto Slab;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 16px;
    color: #9c98a6;
    margin-bottom: 8px;
  }
`;
export const ContainerError = styled.div`
  margin-top: 4px;

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
