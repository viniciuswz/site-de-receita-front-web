import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 32px;
  h2 {
    font-family: Roboto Slab;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 24px;
    margin-bottom: 24px;

    color: #3f3d3c;
  }

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

          color: #3f3d3c;
        }
      }

      & ~ li {
        margin-top: 8px;
      }
    }
  }
`;

export const ButtonShoppingList = styled.button`
  width: 100%;
  max-width: 259px;
  height: 47px;

  background: #472e2e;
  border-radius: 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 0;

  margin-top: 32px;
  svg {
    width: 20px;
    height: 20px;
    color: #fff;
  }
  span {
    font-family: Roboto Slab;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 14px;

    color: #ffffff;
    margin-left: 8px;
  }
`;
