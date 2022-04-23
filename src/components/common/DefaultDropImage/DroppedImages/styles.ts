import styled from 'styled-components';

export const Container = styled.div`
  ul {
    list-style: none;
    display: flex;
    margin-top: 16px;
    li {
      object-fit: cover;
      aspect-ratio: 16/9;
      position: relative;
      border-radius: 8px;
      overflow: hidden;
      width: 163px;

      img {
        width: 100%;
        height: auto;
      }
      & ~ li {
        margin-left: 8px;
      }

      button {
        position: absolute;
        top: 8px;
        right: 8px;
        width: 24px;
        height: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        background: rgb(256, 256, 256);
        box-shadow: 0 0 0 1px rgba(256, 256, 256, 0.5);
        border: 0;
      }
    }
    margin-right: 16px;
  }
`;
