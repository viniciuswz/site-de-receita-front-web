import styled from 'styled-components';

export const ContainerFixed = styled.header`
  height: 62px;

  svg {
    height: 46px;
  }
`;

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 62px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;

  background-color: #ff8a00;
  padding: 0 16px;
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
