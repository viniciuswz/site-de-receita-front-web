import styled from 'styled-components';

export const Container = styled.div`
  img {
    width: 100%;
    height: auto;
  }
`;

export const Image = styled.div`
  overflow: hidden;
  object-fit: cover;
  justify-content: center;
  align-items: center;
  position: relative;
  img {
    width: 100%;
    height: auto;
  }
`;
export const ImageFlagsTop = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 18px;

  div.rating {
    display: flex;
    align-items: center;
    padding: 8px;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 20px;
    color: #fff8f2;

    svg {
      width: 20px;
      height: 20px;
    }
    p {
      font-family: Roboto;
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 14px;
      margin-left: 4px;

      color: #fff8f2;
    }
  }

  div.favorite {
    button {
      display: flex;
      justify-content: center;
      align-items: center;

      width: 40px;
      height: 40px;
      background: rgba(0, 0, 0, 0.4);
      border-radius: 50%;
      border: 0;
      color: #fff8f2;

      svg {
        width: 24px;
        height: 24px;
      }
    }
  }
`;

export const ImageFlagsBottom = styled.ul`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 18px;
  display: flex;
  justify-content: flex-start;
  background: linear-gradient(1deg, #25252d 3%, rgba(37, 37, 45, 0) 90.12%);
  li {
    display: flex;
    align-items: center;
    color: #f2f2fc;

    svg {
      width: 24px;
      height: 24px;
      margin-right: 8px;
    }
    p {
      font-family: Roboto Slab;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 14px;

      color: #f2f2fc;
    }

    & ~ li {
      margin-left: 8px;
    }
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 24px;
  h3 {
    font-family: Roboto Slab;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 20px;
    margin-bottom: 8px;

    text-align: center;

    color: #0f100e;
  }
  p {
    font-family: Roboto Slab;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 16px;
    text-align: center;

    color: #8f8f8f;
  }
`;
