import styled, { css, DefaultTheme } from "styled-components";

interface DefaultProps {
	theme: DefaultTheme;
}

const StyledCardContainer = styled.div`
	${(props) => {
		const lightgray = props.theme.colors.lightgray;
		return css`
			display: flex;
			flex-direction: column;
			justify-content: space-around;
			border: 1.5px solid ${lightgray};
			width: 325px;
			border-radius: 1rem;
			padding: 15px;
			gap: 15px;
			margin-bottom: 15px;
			height: 320px;

			&:hover {
				background-color: ${lightgray};
			}
		`;
	}};
`;

const StyledTitle = styled.div`
	font-family: ${(props) => props.theme.fonts.HangeulFontSemiBold};
	font-size: 1.5rem;
	text-align: center;
	margin-top: 0.5rem;
	color: black;
`;

const StyledDescription = styled.div`
	font-family: ${(props) => props.theme.fonts.HangeulFontRegular};

	font-size: 1.1rem;
	color: #6b7280;
	margin-top: 0.25rem;
`;

export { StyledCardContainer, StyledTitle, StyledDescription };
