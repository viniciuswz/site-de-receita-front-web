import styled from 'styled-components';

export const Container = styled.div``;

export const ButtonAddMore = styled.button`
  margin-top: 24px;
  width: 100%;
  height: 100%;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  background: #f5f8fa;
  border: 1px dashed #dce2e5;
  padding: 16px;
  border-radius: 8px;
  min-height: 180px;
  margin-bottom: 16px;
  p {
  }
  transition: opacity 0.1s;
  &:hover {
    opacity: 0.8;
  }
`;

export const ButtonAddMoreMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  svg {
    width: 40px;
    height: 40px;
    margin-bottom: 8px;
    color: #617480;
  }
  p {
    display: flex;
    flex-direction: column;
    align-items: center;

    font-family: 'Roboto Slab';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    margin-bottom: 4px;
    color: #617480;
  }
  span {
    display: block;
    font-family: 'Roboto Slab';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 14px;

    color: #617480;
  }
`;

export const RecipeInstructionContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #fcfdfd;
  border: 1px solid #dce2e5;
  padding: 24px;
  border-radius: 8px;

  display: flex;
  flex-direction: column;
`;

export const RecipeInstructionList = styled.div`
  div {
    & ~ div {
      margin-top: 16px;
    }
  }
`;

export const RecipeInstruction = styled.div`
  width: 100%;
  margin-top: 16px;
  ol {
    list-style-type: none;
    li {
      counter-increment: step-counter;
      position: relative;
      display: flex;
      align-items: center;
      font-family: 'Roboto Slab';
      font-style: normal;
      font-weight: 400;
      color: #3f3d3c;
      &::before {
        content: counter(step-counter) '.';
        display: block;

        line-height: 1.25rem;

        font-family: 'Roboto Slab';
        font-style: normal;
        font-weight: 500;
        width: 20px;
      }
    }
  }
`;

export const RecipeInstructionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  color: #3f3d3c;
  h3 {
    font-family: 'Roboto Slab';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 24px;
  }
  button {
    border: 0;
    background-color: transparent;
    svg {
      color: #3f3d3c;
    }
  }
`;
