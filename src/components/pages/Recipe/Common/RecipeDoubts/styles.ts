import styled from 'styled-components';

export const Container = styled.div`
  h2 {
    font-family: Roboto Slab;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 24px;
    /* identical to box height, or 100% */

    color: #3f3d3c;
    margin-bottom: 32px;
  }
`;

export const DoubtHeader = styled.form`
  display: flex;
`;
export const DoubtFormUser = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #f4ede8;
  margin-right: 8px;
  object-fit: cover;
  margin-right: 16px;
  img {
    width: 100%;
    height: auto;
  }
`;

export const DoubtFormInput = styled.input`
  background: #f2f2f2;
  border: 0;
  box-sizing: border-box;
  border-radius: 4px;
  flex: 1;
  color: #472e2e;
  margin-right: 8px;
  padding: 16px 24px;

  &::placeholder {
    color: #9d9d9d;
  }
`;

export const DoubtFormButton = styled.button`
  width: 86px;
  height: 44px;
  display: flex;
  justify-content: center;
  align-items: center;

  background: #fca228;
  color: #472e2e;
  border-radius: 8px;
  border: 0;
`;
