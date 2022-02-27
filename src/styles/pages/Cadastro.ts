import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0 auto;
`;

export const RightSide = styled.div`
  border-top-right-radius: 24px;
  border-bottom-right-radius: 24px;
  background-color: ${props => props.theme.colors.primary};
  display: flex;
  justify-content: center;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 80px;
  height: 100%;
  max-height: 679px;
  .logo {
    max-width: 155px;
    height: auto;
    width: 100%;
    margin-bottom: 40px;
  }
  .chef {
    max-width: 397px;
    height: auto;
    width: 100%;
  }

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const LeftSide = styled.div`
  border-top-left-radius: 24px;
  border-bottom-left-radius: 24px;

  justify-content: center;
  align-items: center;
  background-color: #fff;
  height: 100%;
  max-height: 679px;
  max-width: 544px;
  flex-grow: 1;
  @media screen and (max-width: 1024px) {
    border-radius: 24px;
  }

  @media screen and (max-width: 768px) {
    border-radius: 16px;
    margin: 8px;
    height: auto;
  }
`;
