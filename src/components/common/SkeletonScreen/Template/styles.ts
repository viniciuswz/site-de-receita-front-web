import styled, { keyframes } from 'styled-components';

const SkeletonAnimation = keyframes`
 0% { background-position: 0% 50%; }
 100% { background-position: 100% 50%; }
`;

export const SkeletonScreenItem = styled.div`
  animation: ${SkeletonAnimation} 1s linear infinite alternate;
  background: linear-gradient(
    90deg,
    #939393,
    #939393,
    #a1a1a1,
    #939393,
    #939393
  );
  background-size: 600%;
  color: #444;
  overflow: hidden;
  position: relative;
  border-radius: 8px;

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
