import styled, { css } from "styled-components";
import { ButtonStyles } from "./Button.type";

const StyledButton = styled.button.attrs<ButtonStyles>((props) => ({
	type: props.type || "button", // 기본값 설정
}))`
	${(props) => {
		const main = props.theme.colors.main;
		const bgcolor = props.bgcolor || main;
		const color = props.color || "white";
		const lightgray = props.theme.colors.lightgray;
		return css`
			cursor: pointer;
			font-size: 16px;
			border: 1px solid ${lightgray};
			line-height: 1;
			height: 45px;
			width: 100%;
			background-color: ${bgcolor};
			color: ${color};
			border-radius: 1rem;
			&:hover {
				opacity: 0.5;
			}
		`;
	}};
`;

export { StyledButton };
