import styled, { keyframes } from 'styled-components';

const opacity = keyframes`
  from {
    opacity: 0;

  }

  to {
    opacity: 1;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ff8a00;
  height: 60px;
  padding: 8px;
  position: relative;
  z-index: 10;
  position: fixed;
  top: 62px;
  width: 100%;
`;

export const InputContainer = styled.div`
  background-color: #f4ede8;
  width: 100%;
  height: 45px;
  border-radius: 4px;

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

export const BackgroundOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  animation: ${opacity} 0.5s forwards;
  opacity: 0;
  z-index: 1;
`;
