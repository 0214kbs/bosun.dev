import Link from "next/link";
import { StyledCardContainer, StyledTitle, StyledDescription } from "./Showcasecard.styled";
import Image from "next/image";
export interface ShowCaseCardProps {
	title: string;
	des: string;
	imgsrc: string;
	slug: string;
}

function ShowCaseCard({ title, des, imgsrc, slug }: ShowCaseCardProps) {
	return (
		<Link href={`/showcases/${slug}`}>
			<StyledCardContainer>
				<Image src={imgsrc} alt="image" height={150} width={300} />
				<StyledTitle>{title}</StyledTitle>
				<StyledDescription>{des}</StyledDescription>
			</StyledCardContainer>
		</Link>
	);
}

export default ShowCaseCard;
