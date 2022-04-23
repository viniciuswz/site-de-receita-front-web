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
  p {
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

export const RecipeInstructionContainer = styled.div``;

export const RecipeInstruction = styled.div`
  h3 {
  }

  ol {
    li {
    }
  }
`;

export const RecipeInstructionHeader = styled.div`
  h3 {
  }
  button {
  }
`;
