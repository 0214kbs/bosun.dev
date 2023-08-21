import styled from "styled-components";

const StyledContainer = styled.div`
  max-width: 740px;
  margin: auto;
  padding: 0 8px;

`;

const StyledImg = styled.img`
  border-radius: 1rem;
  width: 300px;
  height:auto;
`
const StyledRight = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  `

const StyledText = styled.div`
  font-family:${(props) => props.theme.fonts.HangeulFontRegular};
  

`
export { StyledContainer, StyledImg, StyledRight, StyledText }  