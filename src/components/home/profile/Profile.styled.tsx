import styled, { css } from "styled-components";

const StyledRight = styled.div`
	width: 55%;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
`;

interface StyledTextProps {
	$bold?: boolean;
	$gray?: boolean;
	$paddingLeft?: boolean;
}

const StyledText = styled.div<StyledTextProps>`
	font-family: ${(props) => props.theme.fonts.HangeulFontRegular};

	${(props) =>
		props.$bold &&
		css`
			font-weight: bold;
			font-size: ${props.theme.fontSizes.medium};
		`}

	${(props) =>
		props.$gray &&
		css`
			color: gray;
			margin-left: 20px;
			padding: 10px;
			font-size: 17px;
		`}

  ${(props) =>
		props.$paddingLeft &&
		css`
			padding-left: 30px;
		`}
`;

export { StyledRight, StyledText };
