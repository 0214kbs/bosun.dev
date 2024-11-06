"use client";
import { StyledText, StyledTitle } from "./Pagetitle.styled";

type PageTitleProps = {
	title: string;
	text: string;
};

const PageTitle = ({ title, text }: PageTitleProps) => {
	return (
		<div>
			<StyledTitle>{title}</StyledTitle>
			<StyledText>{text}</StyledText>
		</div>
	);
};

export default PageTitle;
