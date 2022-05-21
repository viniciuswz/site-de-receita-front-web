import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 14px;
  overflow: hidden;
`;

export const Image = styled.div`
  object-fit: cover;
  justify-content: center;
  align-items: center;
  position: relative;
  display: flex;
  img {
    width: 100%;
    height: auto;
  }
`;
export const ImageFlagsTop = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: flex-end;
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

export const ImageInfoBottom = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 18px;
  display: flex;
  flex-direction: column;
  background: linear-gradient(1deg, #25252d 3%, rgba(37, 37, 45, 0) 90.12%);

  h3 {
    font-family: 'Roboto Slab';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 20px;
    margin-bottom: 16px;

    color: #f2f2fc;
  }
`;

export const ImageFlagsBottom = styled.ul`
  width: 100%;
  display: flex;
  justify-content: flex-start;
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
