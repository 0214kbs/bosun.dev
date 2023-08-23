import styled from "styled-components";

const StyledContainer = styled.div`
	max-width: 780px;
	margin: auto;
	padding: 0 8px;
	padding-top: 6.5rem;
`;

const StyledText = styled.div`
	font-family: ${(props) => props.theme.fonts.HangeulFontRegular};
	padding-top: 10px;
`;
export { StyledContainer, StyledText };
