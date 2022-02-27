import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  max-width: 1120px;
  margin: 0 auto;
  grid-gap: 32px;
`;

export const ContentLeft = styled.div`
  display: grid;
  grid-column: 1/8;
  grid-auto-rows: max-content;
`;

export const ContentRight = styled.div`
  display: grid;
  grid-column: 8/13;
  grid-auto-rows: max-content;
`;
