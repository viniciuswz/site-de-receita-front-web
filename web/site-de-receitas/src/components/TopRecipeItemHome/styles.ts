import styled from 'styled-components';

export const TopReciperSectionItem = styled.div`
  background-color: #fff;
  color: #444;
  overflow: hidden;
  position: relative;

  &.grid-1 {
    grid-column-start: 1;
    grid-column-end: 8;
  }
  &.grid-2 {
    grid-column-start: 8;
    grid-column-end: 13;
  }

  &.grid-3 {
    grid-column-start: 1;
    grid-column-end: 7;
  }
  &.grid-4 {
    grid-column-start: 7;
    grid-column-end: 13;
  }

  &.grid-5 {
    grid-column-start: 1;
    grid-column-end: 5;
  }

  &.grid-6 {
    grid-column-start: 5;
    grid-column-end: 13;
  }
  &.grid-7 {
    grid-column-start: 1;
    grid-column-end: 5;
  }
  &.grid-8 {
    grid-column-start: 5;
    grid-column-end: 9;
  }
  &.grid-9 {
    grid-column-start: 9;
    grid-column-end: 13;
  }
  img {
    /* position: absolute; */
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
