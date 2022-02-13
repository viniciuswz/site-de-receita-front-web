import styled from 'styled-components';

export const TopReciperSectionItem = styled.div`
  background-color: #fff;
  color: #444;
  overflow: hidden;
  position: relative;
  border-radius: 8px;

  img {
    position: absolute;
    top: 50%;
    left: 50%;
    height: 100%;
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

  &.grid-1 {
    grid-area: a;
    height: 402px;
  }
  &.grid-2 {
    grid-area: b;
  }

  &.grid-3 {
    grid-area: c;
    height: 364px;
  }
  &.grid-4 {
    grid-area: d;
    height: 428px;
  }

  &.grid-5 {
    grid-area: e;
    height: 364px;
  }

  &.grid-6 {
    grid-area: f;
    height: 298px;
    img {
      width: 100%;
      height: auto;
    }
  }
  &.grid-7 {
    grid-area: g;
  }
  &.grid-8 {
    grid-area: h;
  }
  &.grid-9 {
    grid-area: i;
  }

  @media screen and (max-width: 1024px) and (min-width: 482px) {
    &.grid-1 {
      height: 320px;
    }
    &.grid-3 {
      height: 270px;
    }
    &.grid-4 {
      height: 320px;
    }
    &.grid-5 {
      height: 320px;
    }
    &.grid-6 {
      height: 270px;
      img {
        width: auto;
        height: 100%;
      }
    }
  }

  @media screen and (max-width: 481px) {
    &.grid-1 {
      height: 220px;
    }
    &.grid-3 {
      height: 170px;
    }
    &.grid-4 {
      height: 220px;
    }
    &.grid-5 {
      height: 220px;
    }
    &.grid-6 {
      height: 170px;
      img {
        width: auto;
        height: 100%;
      }
    }
  }
`;

export const TopReciperSectionItemOverlay = styled.div`
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
