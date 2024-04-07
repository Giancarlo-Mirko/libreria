import styled from 'styled-components';

export const MainHeader = styled.div`
  background-color: aqua;
  color: black;
  ul {
    display: flex;
    list-style: none;
    gap: 15px;
  }
`;

export const NavHeader = styled.nav`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
`;
