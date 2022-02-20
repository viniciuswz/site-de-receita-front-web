import styled, { css } from 'styled-components';

export const Container = styled.div`
  max-width: 360px;
  width: 100%;
  position: absolute;
  top: 24px;
  right: 0;
  padding: 0px;
  overflow: hidden;
  z-index: 10;
  font-family: Roboto Slab;
  @media screen and (max-width: 481px) {
    max-width: initial;
  }
`;
