import styled from 'styled-components';

export const Container = styled.div`
  form {
    & > div {
      margin-top: 16px;
    }
    input,
    textarea,
    .default-select__control {
      background-color: #f5f8fa;
    }
  }
`;

export const ContainerButton = styled.div`
  margin: 0;
  position: sticky;
  bottom: 0;
  width: 100%;
  background-color: #fff;
  padding: 16px 0;
  display: flex;
  justify-content: flex-end;

  button {
    display: flex;
    padding: 16px 40px;
    background: #00b1b2;
    border-radius: 5px;

    font-family: 'Roboto Slab';
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;

    color: #f4ede8;
    border: 0;
  }
`;

export const Modal = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
`;

export const ModalBackground = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  background-color: rgba(000, 000, 000, 0.7);
  width: 100%;
  height: 100%;
`;

export const ModalContent = styled.div`
  position: relative;
  align-self: center;

  z-index: 1;
  background-color: #fff;

  max-width: 720px;
  width: 90%;
  height: auto;

  border-radius: 16px;
  padding: 32px;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #3f3d3c;
  margin-bottom: 16px;

  h3 {
    font-family: 'Roboto Slab';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 24px;
  }

  button {
    border: 0;
    background-color: transparent;
    svg {
      color: #3f3d3c;
    }
  }
`;
