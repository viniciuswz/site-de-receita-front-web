import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  h1 {
    font-family: 'Roboto Slab';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 24px;

    color: #3f3d3c;
  }

  h2 {
    font-family: 'Roboto Slab';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 24px;

    color: #3f3d3c;
  }

  h3 {
    font-family: 'Roboto Slab';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;

    color: #617480;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;

  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;

  background-color: #fff;

  box-shadow: 0px -5px 8px -2px rgba(0, 0, 0, 0.15);
`;

export const ButtonSubmit = styled.button`
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
`;

export const ButtonReset = styled.button`
  display: flex;
  display: flex;
  padding: 16px 40px;
  background: #dcdce5;
  border-radius: 5px;

  font-family: 'Roboto Slab';
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;

  color: #9c98a6;
  border: 0;
  margin-right: 32px;
`;
