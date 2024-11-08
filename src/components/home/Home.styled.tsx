import styled from "styled-components";

const StyledTableTitle = styled.h1`
	font-family: ${(props) => props.theme.fonts.HangeulFontMedium};
	font-size: ${(props) => props.theme.fontSizes.medium};
	/* text-align: center; */
	margin-top: 40px;
`;

export { StyledTableTitle };
