import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 48px;
  width: 100%;
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
  width: 100%;
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
