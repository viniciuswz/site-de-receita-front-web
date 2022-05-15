import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1140px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`;

export const ContainerCenter = styled.div`
  grid-column: 1/13;
`;

export const ContainerLeft = styled.div`
  grid-column: 1/6;
`;

export const ContainerRight = styled.div`
  grid-column: 6/13;
`;
