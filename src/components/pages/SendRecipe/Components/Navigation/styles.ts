import styled from 'styled-components';

export const Container = styled.div`
  color: #f4ede8;
  padding: 32px 24px;
  @media screen and (max-width: 1024px) {
    padding: 24px 0;
  }
`;

export const NavHead = styled.header`
  button {
    display: flex;
    align-items: center;
    border: 0;
    background-color: transparent;
    transition: 0.2s;
    color: #f4ede8;
    margin-bottom: 40px;
    margin-right: 16px;
    svg {
      width: 24px;
      height: 24px;
      margin-right: 8px;
    }
    &:hover {
      opacity: 0.8;
    }
  }

  h2 {
    font-family: 'Roboto Slab';

    font-weight: 700;
    font-size: 30px;
    line-height: 30px;

    color: #f4ede8;
  }

  p {
    font-family: 'Roboto Slab';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    margin-top: 8px;
  }
  @media screen and (max-width: 1024px) {
    padding: 0px 32px;
  }
`;

export const NavigatorSteps = styled.nav`
  margin-top: 72px;
  ul {
    list-style: none;
    li {
      &:first-child {
        div {
          &:nth-child(1) {
            display: none;
          }
        }
      }
      color: #6e6e6e;
      * {
        border-color: #6e6e6e;
      }

      &.active {
        color: #f4ede8;
        * {
          border-color: #f4ede8;
        }
      }
    }
  }

  @media screen and (max-width: 1024px) {
    overflow-x: scroll;
    overflow-y: hidden;
    padding: 16px 32px;
    margin-top: 32px;
    scroll-behavior: smooth;
    ul {
      display: flex;
      li {
        display: flex;
        align-items: center;
        div:first-child {
          margin: 0 16px;
        }
        p {
          white-space: nowrap;
          ~ span {
            white-space: nowrap;
          }
        }
      }
    }
  }
`;

export const NavigatorStepsItemContent = styled.div`
  display: flex;
  & > span {
    border: 2px solid #f4ede8;
    width: 48px;
    height: 48px;
    min-width: 48px;
    min-height: 48px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;

    font-family: 'Roboto Slab';

    font-weight: 700;
    font-size: 24px;
    line-height: 24px;
    margin-right: 16px;
  }
  div {
    p {
      font-family: 'Roboto Slab';
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 20px;
    }
    span {
      display: block;
      font-family: 'Roboto Slab';
      font-style: normal;
      font-weight: 400;
      font-size: 15px;
      line-height: 16px;
      margin-top: 8px;
    }
  }
`;

export const NavigatorStepsSeparator = styled.div`
  width: 48px;
  display: flex;
  justify-content: center;

  span {
    margin: 4px 0;
    display: block;
    border: 2px dashed #6e6e6e;
    height: 56px;
    width: 0;
  }
  @media screen and (max-width: 1024px) {
    width: 56px;
    align-items: center;
    span {
      height: 1px;
      width: 56px;
    }
  }
`;
