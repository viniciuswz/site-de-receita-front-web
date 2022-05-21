import styled from 'styled-components';

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
  @media screen and (max-width: 1024px) {
    /* justify-content: center; */
    position: sticky;
    /* padding: 32px; */
    //box-shadow: 0px 2px 10px 0px rgba(000, 000, 000, 0.2);
    left: 0;
  }
`;

export const ContainerScroll = styled.div`
  overflow-y: scroll;
  max-height: calc(100vh - 200px);

  position: relative;

  ::-webkit-scrollbar {
    width: 8px;
    border-radius: 16px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;

    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background: #dfe6e9;
    border-radius: 16px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #d8e0e4;
  }

  @media screen and (max-width: 1024px) {
    max-height: none;
    overflow-y: initial;
    position: initial;
  }
`;

export const Container = styled.div`
  position: relative;
  margin: 32px;

  form {
    > div {
      margin-top: 24px;
    }

    input,
    textarea,
    .default-select__control {
      background-color: #f5f8fa;
    }
  }
  @media screen and (max-width: 1024px) {
    position: initial;
    form {
      padding-bottom: 100px;
    }
  }
`;

export const StepHeader = styled.header`
  margin-bottom: 32px;
  h1 {
    font-family: 'Roboto Slab';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 24px;

    color: #3f3d3c;
    &.fz-32 {
      font-size: 32px;
      line-height: 32px;
    }
  }

  p {
    font-family: 'Roboto Slab';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    margin-top: 8px;
    /* or 100% */

    color: #3f3d3c;
  }
  @media screen and (max-width: 1024px) {
  }
`;
