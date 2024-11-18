import styled, { css } from "styled-components";

const StyledHeader = styled.td.attrs<any>((props) => ({}))`
	${(props) => {
		const font = props.theme.fonts.HangeulFontMedium;
		const main = props.theme.colors.main;
		return css`
			font-family: ${font};
			padding: 6px 5px;
			font-size: 17px;
			color: ${(props) => props.theme.colors.black};
			text-align: right;

			position: relative;
		`;
	}};
`;

const StyledData = styled.td`
	font-size: 17px;
	padding-left: 5px;
	font-family: ${(props) => props.theme.fonts.HangeulFontRegular};
	color: ${(props) => props.theme.colors.gray};
`;

export { StyledHeader, StyledData };
