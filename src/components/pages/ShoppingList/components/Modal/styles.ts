import styled from 'styled-components';

export const ContainerModal = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: fixed;
  z-index: 10;
`;

export const ModalBackground = styled.div`
  background-color: rgba(000, 000, 000, 0.2);
  width: 100%;
  height: 100%;
`;

export const ModalContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  background-color: #fff;
  transform: translate(-50%, -50%);
  padding: 32px 40px;
  border-radius: 16px;
  width: 623px;

  @media screen and (max-width: 768px) {
    width: 90%;
    height: 80vh;
    max-height: 500px;
    overflow-y: scroll;
  }
  @media screen and (max-width: 481px) {
    padding: 16px 24px;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 24px;
  svg {
    width: 24px;
    height: 24px;
  }

  button {
    cursor: pointer;
    border: 0;
    background-color: transparent;
  }
  @media screen and (max-width: 768px) {
    position: sticky;
    top: -32px;
    padding: 16px 0;
    background: #fff;
    margin: 0;
  }

  @media screen and (max-width: 481px) {
    top: -16px;
  }
`;

export const ModalInfo = styled.div`
  display: flex;
  img {
    max-width: 215px;
    width: 100%;
    height: auto;
    border-radius: 8px;
    object-fit: cover;
    margin-right: 32px;
  }

  div {
    h4 {
      font-family: 'Roboto Slab';
      font-style: normal;
      font-weight: 500;
      font-size: 24px;
      line-height: 24px;
      color: #3f3d3c;

      margin-bottom: 16px;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    img {
      max-width: none;
      margin: 0;
    }

    & > div {
      margin-top: 16px;
    }
  }
`;

export const ModalInfoFlags = styled.ul`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  li {
    display: flex;
    align-items: center;
    color: #3f3d3c;

    svg {
      width: 24px;
      height: 24px;
      margin-right: 8px;
    }
    span {
      font-family: Roboto Slab;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 14px;

      color: #3f3d3c;
    }

    & ~ li {
      margin-left: 8px;
    }
  }
`;

export const ModalInfoShare = styled.ul`
  margin-top: 16px;
  display: flex;
  list-style: none;

  li {
    width: 40px;
    height: 40px;
    background-color: #322020;
    border-radius: 50%;
    button {
      border: 0;
      color: #e7e6e6;
      background-color: transparent;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      svg {
        width: 24px;
        height: 24px;
      }
    }

    & ~ li {
      margin-left: 8px;
    }
  }
`;

export const ModalList = styled.div`
  margin-top: 24px;
  ul {
    display: flex;

    flex-direction: column;
    list-style: none;
    li {
      width: 100%;
      button {
        display: flex;
        align-items: center;
        border: 0;
        background: transparent;
        div {
          width: 20px;
          height: 20px;
          border-radius: 5px;
          border: 2px solid #d6d4d4;
          margin-right: 8px;
        }
        p {
          flex: 1;
          font-family: Roboto Slab;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 16px;
          text-align: start;

          color: #3f3d3c;
        }
      }

      & ~ li {
        margin-top: 16px;
      }
    }
  }
`;
