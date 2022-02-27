import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 32px;
  margin-left: 80px;

  > div {
    & ~ div {
      margin-top: 24px;
    }
  }
`;

export const ButtonLoadMore = styled.button`
  font-family: Roboto Slab;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 13px;
  /* identical to box height, or 93% */

  text-decoration-line: underline;

  color: #3f3d3c;

  border: 0;
  background-color: transparent;

  margin-top: 48px;
`;
