import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: grid;
  grid-template-columns: repeat(12, 1fr);

  grid-gap: 32px;
  max-width: 1120px;
  padding: 0 32px;

  /* padding: 0 32px; */

  @media screen and (max-width: 481px) {
    grid-template-columns: repeat(6, 1fr);
    grid-gap: 16px;
    padding: 0 16px;
  }

  & > a {
    display: grid;
    grid-column: span 4;
    /* grid-auto-rows: max-content; */
    border-radius: 14px;
    overflow: hidden;
    box-shadow: 0px 2px 8px 1px rgb(0 0 0 / 17%);
    text-decoration: none;
    @media screen and (max-width: 1024px) {
      grid-column: span 6;
    }
  }
`;
