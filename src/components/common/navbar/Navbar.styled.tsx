import styled from "styled-components";

const StyledNav = styled.div`
  color: black;
  max-width: 760px;
  height: 5rem;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  padding: 0 8px;

`;

const StyledNavLink = styled.a`
  color: black;
    text-align: center;
    transition: all 250ms;
    font-size:18px;
    &:hover {
        color: #4790FC;  
        transform: scale(1.25);
    }
`;



export { StyledNav, StyledNavLink };