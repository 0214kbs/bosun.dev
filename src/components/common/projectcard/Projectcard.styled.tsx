import styled, { css } from "styled-components";

const StyledProjectcard = styled.div.attrs<any>((props) => ({}))`
  ${(props) => {
    const lightgray = props.theme.colors.lightgray;
    return css`

      display:flex;
      flex-direction: column;
      justify-content: space-around;
      border: 1.5px solid ${lightgray};
      width:325px;
      border-radius: 1rem;
      padding:15px;
      gap:15px;
      margin-bottom: 15px;
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

  `

const StyledLinkItem = styled.div`
  display: flex;
	align-items: center;

		transition: transform 500ms;
		color: inherit;
		fill: inherit;

		&:hover {
			/* transform: scale(1.1); */
			color: ${(props) => props.theme.colors.main};
			fill: ${(props) => props.theme.colors.main};
		}
  
`

const StyledLinkName = styled.span`
      font-family: ${(props) => props.theme.fonts.HangeulFontMedium};
      font-size: ${(props) => props.theme.fontSizes.small};
  `
export { StyledProjectcard, StyledDate, StyledPrjTitle, StyledContentBox, StyledLinkItem, StyledLinkName };
