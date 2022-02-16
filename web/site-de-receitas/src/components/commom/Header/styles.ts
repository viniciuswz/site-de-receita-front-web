import styled from 'styled-components';

export const Content = styled.header`
  width: 100%;
  background-color: #ff8a00;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  height: 104px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonMenu = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 0;
  background-color: transparent;

  div {
    width: 22px;
    margin-right: 8px;

    span {
      width: 100%;
      display: block;
      background: #472e2e;
      border-radius: 4px;
      height: 3px;
      ~ span {
        margin-top: 5px;
      }
    }
  }

  span {
    font-family: Roboto Slab;
    font-weight: bold;
    font-size: 16px;
    line-height: 12px;
  }
`;

export const SearchContainer = styled.div`
  background-color: #f4ede8;
  max-width: 458px;
  width: 100%;
  height: 48px;
  border-radius: 8px;

  display: flex;

  input {
    border: 0;
    background-color: transparent;
    color: #707070;
    padding: 16px;
    width: 100%;
    &:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 30px white inset;
    }
    &::placeholder {
      color: #707070;
    }
  }

  button {
    border: 0;
    background-color: transparent;
    appearance: none;
    padding: 8px;
    margin-right: 16px;
  }
`;

export const MyAccountHeaderContainer = styled.div`
  display: flex;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 32px;

    a {
      text-decoration: none;
      & ~ a {
        margin-left: 24px;
      }
    }
  }
`;

export const MyAccountProfile = styled.div`
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    div {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      margin-right: 8px;
      border: 2px solid #f4ede8;
      position: relative;
      overflow: hidden;
      img {
        width: 100%;
        height: auto;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
    span {
      font-family: Roboto Slab;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 16px;

      color: #472e2e;
      margin-right: 8px;
    }
  }
`;
