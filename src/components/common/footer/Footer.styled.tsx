import styled from 'styled-components';

const StyledFooter = styled.footer`
  width: 100%;
  font-family: 'mono';
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem;
  transition: all 500ms;
  background-color: white;
  color: black;

  
`;

const StyledIconContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 4px;
  align-items: center;
  padding-top: 20px;
  border-top: 2px solid ${(props) => props.theme.colors.lightgray};
  width: 136px;

  a {
    transition: transform 500ms;
    color: inherit;
    fill: inherit;

    &:hover {
      transform: scale(1.10);
      color: ${(props) => props.theme.colors.main}; 
      fill: ${(props) => props.theme.colors.main}; 
    }
  }
`;

const StyledIconText = styled.a`
  font-size: 0.875rem; 
  margin-top: 2px;
`;

const StyledCopyright = styled.div`
  font-size: 0.75rem; 
  margin-top: 2px;
`;

export { StyledFooter, StyledIconContainer, StyledIconText, StyledCopyright }