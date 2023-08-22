import Link from "next/link";
import { StyledLink, StyledDate, StyledTitle, StyledDescription } from "./Blogpostcard.styled";

interface BlogPostProps {
	date: string;
	title: string;
	des: string;
	slug: string;
}

function Blogpostcard({ date, title, des, slug }: BlogPostProps) {
	console.log(title);
	return (
		<Link href={`/blog/${slug}`}>
			<StyledLink>
				<StyledDate>{date}</StyledDate>
				<StyledTitle>{title}</StyledTitle>
				<StyledDescription>{des}</StyledDescription>
			</StyledLink>
		</Link>
	);
}

export default Blogpostcard;
