import styled, { css } from "styled-components";

const StyledProjectcard = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    const lightgray = props.theme.colors.lightgray;
    return css`

      display:flex;
      flex-direction: column;
      justify-content: space-around;
      border: 0.8px solid ${lightgray};
      height: 365px;
      width:385px;
      border-radius: 1rem;
      padding:15px;
      `;
  }};
`;

const StyledDate = styled.div`
  	font-family: ${(props) => props.theme.fonts.HangeulFontMedium};
    font-size: ${(props) => props.theme.fontSizes.small};
    color: rgb(157 157 157 / 50%);
    font-weight:500;
    margin:0px;
`
const StyledPrjTitle = styled.h1`
  	font-family: ${(props) => props.theme.fonts.HangeulFontMedium};
    font-size: ${(props) => props.theme.fontSizes.medium};
    margin:0px;
    `

const StyledContentBox = styled.div`
  font-family: ${(props) => props.theme.fonts.HangeulFontLight};
  font-size: ${(props) => props.theme.fontSizes.small};
  /* background-color: ${(props) => props.theme.colors.lightgray}; */
  /* height: 40px; */
  /* display: flex; */
  /* align-items: center;    */
  /* padding-left:10px; */
  /* border-left: 5px solid ${(props) => props.theme.colors.main}; */
  `

const StyledStack = styled.div`
  font-family: ${(props) => props.theme.fonts.HangeulFontLight};
  font-size: ${(props) => props.theme.fontSizes.small};
  
  border-radius: 0.5rem;
  background-color: #a7a7a7;
  color: ${(props) => props.theme.colors.white};
  padding: 2px 10px 4px 10px;
  
`

const StyledLinkName = styled.span`
      font-family: ${(props) => props.theme.fonts.HangeulFontMedium};
      font-size: ${(props) => props.theme.fontSizes.small};
  `
export { StyledProjectcard, StyledDate, StyledPrjTitle, StyledContentBox, StyledStack, StyledLinkName };
