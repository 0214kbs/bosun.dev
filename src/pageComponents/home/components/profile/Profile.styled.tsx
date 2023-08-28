import styled from "styled-components";

const StyledImg = styled.img`
	border-radius: 1rem;
	width: 290px;
	height: 390.938px;
`;
const StyledRight = styled.div`
	width: 55%;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
`;

const StyledText = styled.div`
	font-family: ${(props) => props.theme.fonts.HangeulFontRegular};
`;
export { StyledImg, StyledRight, StyledText };
