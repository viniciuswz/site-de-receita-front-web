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
  width: 100%;

  .default-select {
    width: 100%;
    font-family: Roboto Slab;
    color: #6a6180;
    &__control {
      border-color: #b9c2da;
      &--is-focused {
        border-color: #b9c2da;
        &:hover {
          border-color: #b9c2da;
        }
        box-shadow: 0 0 0 1px #b9c2da;
      }
    }

    &__value-container {
      padding: 16px;
    }

    &__placeholder {
      font-size: 16px;
      color: #6a6180;
    }

    &__input-container {
    }

    &__input {
    }
  }
`;

export const Label = styled.p`
  font-family: Roboto Slab;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 16px;
  color: #9c98a6;
  margin-bottom: 8px;
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
