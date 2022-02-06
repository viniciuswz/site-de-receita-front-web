import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 67px 96px;
  .or {
    display: flex;
    justify-content: center;
    align-items: center;

    margin: 16px 0;

    font-size: 16px;
    line-height: 26px;
    font-family: Roboto Slab;
    font-style: normal;
    color: #6a6180;
  }

  .without-account {
    margin-top: 16px;
    display: flex;
    align-items: center;
    flex-direction: column;
    p {
      font-size: 16px;
      line-height: 26px;
      color: #6a6180;
    }
    button {
      border: 0;
      background: transparent;
      color: #00b1d2;
      text-decoration: underline;
      font-weight: bold;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 60px;
  }

  @media screen and (max-width: 768px) {
    padding: 32px;
  }
`;

export const Form = styled.form`
  width: 100%;
  h1 {
    font-family: Roboto Slab;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 36px;
    margin-bottom: 40px;
  }
`;

export const FormBottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
  a {
    text-decoration: none;
    font-family: Roboto Slab;
    font-style: normal;
    font-size: 14px;
    line-height: 24px;
    color: #9c98a6;
  }
`;

export const ButtonSubmit = styled.button`
  max-width: 352px;
  margin: 0 auto;

  width: 100%;
  height: 56px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 8px;
  font-size: 16px;
  line-height: 26px;
  background: #00b1b2;
  font-family: Roboto Slab;
  font-style: normal;
  font-weight: bold;
  border: 0;
  margin-top: 24px;
  color: #fff;
`;

export const ButtonLogInFacebook = styled.button`
  max-width: 352px;
  margin: 0 auto;

  width: 100%;
  height: 56px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 8px;
  font-size: 16px;
  line-height: 26px;
  background: #1877f2;
  font-family: Roboto Slab;
  font-style: normal;
  font-weight: bold;
  border: 0;
  margin-top: 24px;
  color: #fff;
  span {
    display: flex;
    align-items: center;
    img {
      margin-right: 8px;
    }
  }
`;
