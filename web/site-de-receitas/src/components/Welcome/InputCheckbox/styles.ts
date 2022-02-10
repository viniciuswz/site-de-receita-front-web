import styled, { css } from 'styled-components';

interface ContainerProps {
  hasValue: boolean;
}

export const Container = styled.div<ContainerProps>`
  position: relative;
  display: flex;
  align-items: center;

  &.focus {
    border: 1px solid black;
  }
  input {
    display: none;

    &:focus {
      & + label {
        font-size: 12px;
        line-height: 20px;
        z-index: 2;
        color: #c1bccc;
      }
    }
    &:checked ~ label {
      div {
        background-color: #454559;
        background-image: url("data:image/svg+xml,%3Csvg width='10' height='7' viewBox='0 0 10 7' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9 1L4.00022 6L1 2.99965' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
        background-repeat: no-repeat;
        background-position: center;
        border: 2px solid #454559;
      }
    }
  }
  label {
    display: flex;
    align-items: center;

    span {
      margin-left: 16px;
      font-family: Roboto Slab;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 24px;
      color: #9c98a6;
    }

    div {
      width: 24px;
      height: 24px;
      background-color: #fafafc;
      border-radius: 8px;
      border: 1px solid #e6e6f0;
    }
    ${props =>
      props.hasValue &&
      css`
        font-size: 12px;
        line-height: 20px;
        color: #c1bccc;
      `}
  }
`;
