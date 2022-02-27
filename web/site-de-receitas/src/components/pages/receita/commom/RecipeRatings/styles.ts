import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 48px;
  h2 {
    font-family: Roboto Slab;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 24px;

    color: #3f3d3c;

    margin-bottom: 32px;
  }
`;

export const RatingDetailsContainer = styled.div`
  display: flex;
`;
export const RatingDetailsGeneral = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 32px;
  span {
    font-family: Roboto Slab;
    font-style: normal;
    font-weight: bold;
    font-size: 56px;
    line-height: 56px;

    color: #3f3d3c;

    margin-bottom: 8px;
  }

  div {
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    svg {
      width: 24px;
      height: 24px;
      color: #fca228;
      & ~ svg {
        margin-left: 8px;
      }
    }
  }

  p {
    font-family: Roboto Slab;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 16px;

    color: #3f3d3c;
  }
`;
export const RatingDetailsByStars = styled.ul`
  display: flex;
  flex-direction: column;
  flex: 1;

  list-style: none;
  li {
    display: flex;
    align-items: center;
    p {
      font-family: Roboto Slab;
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 20px;

      color: #3f3d3c;

      margin-right: 4px;
    }
    svg {
      width: 20px;
      height: 20px;
      margin-right: 8px;
    }

    div {
      width: 100%;
      height: 16px;
      border-radius: 8px;
      background: #e7e2e2;
      div {
        width: 50%;
        background: #fca228;
        height: 100%;
        border-radius: 8px;
      }
    }

    span {
      font-family: Roboto Slab;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 16px;

      color: #3f3d3c;

      margin-left: 10px;
    }

    & ~ li {
      margin-top: 12px;
    }
  }
`;

export const RatingForm = styled.form`
  margin-top: 32px;
`;

export const RatingFormUser = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #f4ede8;
  margin-right: 8px;
  object-fit: cover;
  margin-right: 16px;
  img {
    width: 100%;
    height: auto;
  }
`;

export const RatingFormInput = styled.input`
  background: #f2f2f2;
  border: 0;
  box-sizing: border-box;
  border-radius: 4px;
  flex: 1;
  color: #472e2e;
  margin-right: 8px;
  padding: 16px 24px;

  &::placeholder {
    color: #9d9d9d;
  }
`;

export const RatingFormButton = styled.button`
  width: 86px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;

  background: #472e2e;
  color: #ffffff;
  border-radius: 8px;
  border: 0;
`;

export const RatingHeader = styled.div`
  display: flex;
  align-items: center;
`;

export const RatingPhotosContainer = styled.div`
  margin-left: 60px;
  margin-top: 24px;
`;

export const RatingPhotosUploaded = styled.div`
  display: flex;
  flex-direction: column;
  ul {
    list-style: none;
    display: flex;
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
        border-radius: 50%;
        background: rgba(63, 61, 60, 0.8);
      }
    }
    margin-right: 16px;
  }

  button {
    background-color: transparent;
    border: 0;

    font-family: Roboto Slab;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 13px;

    color: #fff;

    svg {
      width: 16px;
      height: 16px;
    }
  }
`;

export const RatingPhotosButton = styled.button`
  font-family: Roboto Slab;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 12px;
  margin-bottom: 8px;

  color: #472e2e;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 225px;
  height: 50px;

  background: transparent;
  border: 1px solid #472e2e;
  box-sizing: border-box;
  border-radius: 4px;

  svg {
    width: 24px;
    height: 24px;
    margin-right: 8px;
  }
`;
