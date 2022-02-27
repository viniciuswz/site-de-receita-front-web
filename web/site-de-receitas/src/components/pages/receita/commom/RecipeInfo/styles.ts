import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Profile = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  p {
    font-family: Roboto Slab;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 14px;
    margin-bottom: 4px;

    color: #3f3d3c;
  }

  span {
    font-family: Roboto Slab;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 12px;

    color: #6b6765;
  }
`;

export const ProfileInfoPhoto = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #f4ede8;
  margin-right: 8px;
  object-fit: cover;
  img {
    width: 100%;
    height: auto;
  }
`;

export const ProfileInfoButton = styled.button`
  border: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
`;

export const RecipeCommomInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  h1 {
    font-family: Roboto Slab;
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 36px;

    color: #3f3d3c;
  }

  span {
    font-family: Roboto Slab;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 16px;

    color: #beb6b2;
    margin-top: 8px;
  }
`;

export const RecipeRating = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;
  p {
    font-family: Roboto Slab;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 16px;
    /* identical to box height, or 100% */

    color: #3f3d3c;
  }

  div {
    display: flex;
    align-items: center;
    margin: 0px 8px;

    svg {
      color: #fca228;
    }
  }
`;

export const RecipeDetails = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 24px;
  li {
    padding: 8px 16px;
    background: #c47500;
    border-radius: 12px;
    color: #f4ede8;
    display: flex;
    align-items: center;

    span {
      font-family: Roboto Slab;
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 13px;
      margin-left: 8px;
    }
    & ~ li {
      margin-left: 16px;
    }
  }
`;

export const RecipeDescription = styled.p`
  font-family: Roboto Slab;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  margin-top: 24px;

  color: #737070;
`;

export const RecipeShare = styled.ul`
  margin-top: 24px;
  display: flex;
  list-style: none;
  margin-bottom: 32px;
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
