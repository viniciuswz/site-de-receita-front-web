import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  max-width: 1120px;
  margin: 0 auto;

  margin-top: 40px;
  background-color: #fff;
  border-radius: 24px;
  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(8, 1fr);
  }
`;

export const ContentLeft = styled.div`
  display: grid;
  grid-column: 1/5;
  grid-auto-rows: max-content;
  background-color: #282834;
  border-top-left-radius: 24px;
  border-bottom-left-radius: 24px;
  min-height: 700px;
  @media screen and (max-width: 1024px) {
    grid-column: 1/9;
    grid-auto-flow: column;
    grid-auto-columns: 100%;
    min-height: auto;
    border-radius: 0;
  }
`;

export const ContentRight = styled.div`
  display: grid;
  grid-column: 5/13;
  grid-auto-rows: max-content;
  min-height: 700px;
  max-height: calc(100vh - 200px);
  border-top-right-radius: 24px;
  border-bottom-right-radius: 24px;
  overflow: hidden;
  @media screen and (max-width: 1024px) {
    grid-column: 1/9;
    grid-auto-columns: 100%;
    max-height: none;
    min-height: auto;
    padding-bottom: 100px;
  }
`;
