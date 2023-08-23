import styled from "styled-components";

const StyledNav = styled.div`
	color: black;
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: auto;
	padding: 0 8px;
	height: 5rem;

	max-width: 800px;
`;

const StyledNavLink = styled.a`
	font-family: ${(props) => props.theme.fonts.EnglishFontBold};
	color: black;
	text-align: center;
	transition: all 250ms;
	font-size: 18px;
	&:hover {
		color: ${(props) => props.theme.colors.main};
		transform: scale(1.25);
	}
`;

export { StyledNav, StyledNavLink };
