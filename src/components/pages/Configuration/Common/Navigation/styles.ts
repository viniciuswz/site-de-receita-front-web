import styled from 'styled-components';

export const Menu = styled.ul`
  li {
    cursor: pointer;
    list-style: none;
    color: #3f3d3c;
    font-size: 16px;
    font-family: 'Roboto Slab', Arial;
    padding: 15px;
    margin-bottom: 20px;
    border-radius: 8px;

    svg {
      margin-right: 10px;
    }

    &:hover {
      background-color: #322020;
      color: white;
    }

    &.active {
      background-color: #322020;
      color: white;
    }
  }
`;
