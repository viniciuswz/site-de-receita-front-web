import styled from 'styled-components';

export const Container = styled.div``;

export const Comment = styled.div`
  display: flex;
`;

export const CommentContainer = styled.div``;

export const CommentUser = styled.div`
  display: flex;
  width: 32px;
  height: 32px;
  min-width: 32px;
  min-height: 32px;
  border-radius: 50%;
  overflow: hidden;
  border: 1px solid #f4ede8;
  margin-right: 8px;
  object-fit: cover;
  margin-right: 12px;
  img {
    width: 100%;
    height: auto;
  }
`;

export const CommentContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  border-radius: 8px;

  background-color: #f2f2f2;
`;

export const CommentContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-family: Roboto Slab;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;

  color: #3f3d3c;

  span {
    font-family: Roboto Slab;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 12px;

    color: #3f3d3c;
  }
`;

export const CommentContentText = styled.p`
  font-family: Roboto Slab;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 20px;

  color: #3f3d3c;
`;

export const CommentContentNav = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  div {
    button {
      border: 0;
      background-color: transparent;

      font-family: Roboto Slab;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 13px;
      /* identical to box height, or 108% */

      color: #666666;

      & ~ button {
        margin-left: 20px;
      }
    }

    span {
      font-family: Roboto Slab;
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      line-height: 13px;
      /* identical to box height, or 108% */

      color: #666666;
    }
  }
`;

export const CommentMenuButton = styled.button`
  width: 32px;
  height: 32px;

  min-width: 32px;
  min-height: 32px;
  background: #f0f0f0;
  margin-left: 16px;
  border: 0;
  border-radius: 50%;
  svg {
    width: 24px;
    height: 24px;

    color: #b2b2b2;
  }

  align-self: center;

  position: relative;
  top: -15px;
`;
