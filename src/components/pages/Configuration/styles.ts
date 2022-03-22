import styled from 'styled-components';

export const Content = styled.div`
  background-color: #fff;
  margin-top: 110px;
  padding-top: 60px;
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  max-width: 1120px;
  margin: 0 auto;
  grid-gap: 32px;
  padding: 0 24px;
`;

export const ContentLeft = styled.div`
  display: grid;
  grid-column: 1/5;
  grid-auto-rows: max-content;
`;
export const ContentRight = styled.div`
  display: grid;
  grid-column: 5/13;
  grid-auto-rows: max-content;
`;
