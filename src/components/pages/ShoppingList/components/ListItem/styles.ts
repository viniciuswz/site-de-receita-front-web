import styled from 'styled-components';

export const Container = styled.button`
  border-radius: 14px;
  overflow: hidden;
  border: 0;
  background-color: transparent;

  cursor: pointer;
`;

export const Image = styled.div`
  justify-content: center;
  align-items: center;
  position: relative;
  display: flex;
  height: 240px;

  img {
    height: 100%;
    width: auto;
  }
  @media screen and (max-width: 481px) {
    height: auto;
    img {
      width: 100%;
      height: auto;
    }
  }
`;

export const ImageFlagsTop = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: flex-start;
  width: 100%;
  padding: 18px;
  .shopping {
    display: flex;
    align-items: center;
    color: #f2f2fc;
    filter: drop-shadow(0px 0px 1px black);

    span {
      font-family: 'Roboto Slab';
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 14px;
    }
    svg {
      margin-right: 8px;
      width: 16px;
      height: 16px;
    }
  }
`;

export const ImageInfoBottom = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  padding: 24px;
  display: flex;
  background: linear-gradient(1deg, #25252d 3%, rgba(37, 37, 45, 0) 90.12%);

  h3 {
    font-family: 'Roboto Slab';
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 20px;

    color: #f2f2fc;
  }
`;
