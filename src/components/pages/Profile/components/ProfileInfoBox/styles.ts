import styled from 'styled-components';

export const ProfileInfoContainer = styled.div`
  background-color: #fff;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.15);
  border-radius: 16px;
  padding: 24px;
  margin: 24px;
  position: relative;
  top: -80px;
  @media screen and (max-width: 1024px) {
    top: 0px;
    margin: 0px;
    box-shadow: none;
  }
`;

export const ProfilePhoto = styled.div`
  position: relative;
  width: 164px;
  height: 54px;
  margin: 0 auto;

  div {
    position: absolute;
    width: 164px;
    height: 164px;
    bottom: 0px;

    min-width: 164px;
    min-height: 164px;

    border-radius: 50%;
    margin-right: 8px;
    border: 4px solid #f4ede8;
    img {
      width: 100%;
      height: auto;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
    }
  }
  span {
    font-family: Roboto Slab;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 16px;

    color: #472e2e;
    margin-right: 8px;
  }
`;

export const TogglePhotoButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 48px;
  height: 48px;
  position: absolute;
  bottom: 5px;
  right: 10px;
  border: 0;
  border-radius: 50%;

  background-color: #fff;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
  svg {
    width: 24px;
    height: 24px;
    color: #3f3d3c;
  }
`;

export const ProfileBasicInfo = styled.div`
  margin-top: 16px;
  p {
    font-family: 'Roboto Slab';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 24px;

    text-align: center;

    color: #3f3d3c;
    margin-bottom: 8px;
  }
  span {
    font-family: 'Roboto Slab';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;
    color: #8b8582;
    display: block;
    text-align: center;
  }
`;

export const ProfileDetails = styled.div`
  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
    margin-top: 32px;
    li {
      display: flex;
      align-items: center;
      svg {
        width: 24px;
        height: 24px;
        margin-right: 8px;
        color: #323232;
      }
      p {
        font-family: 'Roboto Slab';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 14px;
        color: #3f3d3c;
      }
      & ~ li {
        margin-top: 16px;
      }
    }
    &::after {
      content: '';
      display: block;
      margin-top: 24px;
      width: 80%;
      height: 1px;
      background-color: #ebebeb;
      margin: 24px auto;
    }
  }

  & > p {
    font-family: 'Roboto Slab';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;

    white-space: pre-wrap;
    word-wrap: break-word;

    color: #3f3d3c;
  }
`;

export const ProfileRecipesDone = styled.div`
  margin-top: 32px;
  h3 {
    font-family: 'Roboto Slab';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 16px;

    color: #3f3d3c;
    margin-bottom: 24px;
  }
  div {
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 8px;
  }

  a {
    grid-column: span 2;
  }
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 8px;

    aspect-ratio: 1;
  }
`;
