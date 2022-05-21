import styled from 'styled-components';

export const ShoppingListContainer = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 24px;
  & > h3 {
    font-family: 'Roboto Slab';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 24px;
    margin-top: 40px;
    margin-bottom: 24px;
  }
`;

export const ShoppingListContent = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 32px;

  & > button {
    grid-column: span 4;
  }
  @media screen and (max-width: 768px) {
    & > button {
      grid-column: span 6;
    }
  }
  @media screen and (max-width: 481px) {
    grid-template-columns: repeat(6, 1fr);
  }
`;
