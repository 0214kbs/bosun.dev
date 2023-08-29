import Link from "next/link";
import { StyledLink, StyledDate, StyledTitle, StyledDescription } from "./Blogpostcard.styled";
import { BlogPostProps } from "./Blogpostcard.type";

function Blogpostcard({ date, title, des, slug }: BlogPostProps) {
	// console.log(title);
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
