import styled from "styled-components";

const StyledTitle = styled.h1`
	color: ${(props) => props.theme.colors.black};
	margin-bottom: 20px;
`;

const StyledPost = styled.div`
	margin-top: 2.5rem;
	font-family: ${(props) => props.theme.fonts.HangeulFontRegular};
`;

const StyledContainer = styled.div`
	max-width: 780px;
	margin: auto;
	padding: 0 8px;
	padding-top: 3rem;
`;

export { StyledContainer, StyledPost, StyledTitle };
