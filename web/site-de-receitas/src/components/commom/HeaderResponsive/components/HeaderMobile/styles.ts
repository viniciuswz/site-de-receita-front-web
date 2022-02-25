import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 62px;
  padding: 0 16px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #ff8a00;

  z-index: 10;

  svg {
    height: 46px;
  }
`;

export const ButtonMenu = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0;
  appearance: none;

  width: 22px;
  height: 19px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  span {
    display: block;
    width: 100%;
    height: 3px;
    background-color: #472e2e;
    border-radius: 4px;
    & ~ span {
      margin-top: 5px;
    }
  }
`;

export const ButtonSearch = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 0;
  appearance: none;
`;
