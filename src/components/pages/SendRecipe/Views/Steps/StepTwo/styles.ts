import styled from 'styled-components';

export const ChoicesContainer = styled.div`
  display: flex;
  margin-bottom: 16px;

  button {
    &:first-child {
      margin-left: 0;
    }
  }
`;

export const ChoiceButton = styled.button`
  background-color: transparent;
  border: 2px solid #bfc5c8;
  border-radius: 8px;
  margin: 0 16px;

  width: 160px;
  height: 174px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.1s;
  transform: scale(1);

  &:hover {
    color: #00b1b2;
    border-color: #00b1b2;
    transform: scale(1.1);
    svg {
      * {
        &[stroke] {
          stroke: #00b1b2;
        }

        &[fill] {
          fill: #00b1b2;
        }
      }
    }
  }

  div {
    width: 105px;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  p {
    font-family: 'Roboto Slab';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 16px;
    margin-top: 16px;
  }

  &.active {
    color: #f4ede8;
    border-color: #00b1b2;
    background-color: #00b1b2;
    svg {
      * {
        &[stroke] {
          stroke: #f4ede8;
        }

        &[fill] {
          fill: #f4ede8;
        }
      }
    }
  }
`;

export const NextStepButton = styled.button`
  display: flex;
  padding: 16px 50px;
  background: #00b1b2;
  border-radius: 5px;

  font-family: 'Roboto Slab';
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;

  color: #f4ede8;
  border: 0;

  margin: 0 auto;
`;

export const ChoiceTipParagraph = styled.p`
  font-family: 'Roboto Slab';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  margin-top: 8px;
  /* or 100% */

  color: #3f3d3c;
  margin-bottom: 42px;
`;
