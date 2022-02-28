import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);

  grid-gap: 32px;
  max-width: 1120px;
  margin: 0 auto;
`;
