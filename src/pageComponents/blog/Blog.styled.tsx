import styled from "styled-components";

const StyledContainer = styled.div`
	max-width: 980px;
	margin: auto;
	padding: 0 8px;
	padding-top: 6.5rem;
`;
const StyledTitle = styled.h1`
	font-family: ${(props) => props.theme.fonts.HangeulFontMedium};
	font-size: ${(props) => props.theme.fontSizes.large};
	text-align: center;

	padding-top: 10px;
`;

const StyledText = styled.div`
	font-family: ${(props) => props.theme.fonts.HangeulFontRegular};
	padding-top: 10px;
	text-align: center;
	font-size: ${(props) => props.theme.fontSizes.medium};
`;

export { StyledContainer, StyledTitle, StyledText };
