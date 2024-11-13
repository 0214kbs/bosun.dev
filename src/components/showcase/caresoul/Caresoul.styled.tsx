import styled from "styled-components";
const StyledHead = styled.div`
	display: flex;
	width: 80vw;
	justify-content: space-around;
	align-items: center;
`;
const StyledCaresoulTitle = styled.div`
	font-family: ${(props) => props.theme.fonts.HangeulFontMedium};
	font-size: ${(props) => props.theme.fontSizes.mediumlarge};
`;

const StyledButton = styled.div`
	width: 45px;
	height: 45px;
	border-radius: 45px;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	background: ${(props) => props.theme.colors.main};
`;

export { StyledHead, StyledCaresoulTitle, StyledButton };
