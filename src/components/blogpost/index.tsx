import Link from "next/link";
import { StyledLink, StyledDate, StyledTitle, StyledDescription } from "./Blogpost.styled";
interface BlogPostProps {
    date: string;
    title: string;
    des: string;
    slug: string;
}

const Blogpost = ({ date, title, des, slug }: BlogPostProps) => {
    console.log(slug)
    return (
        <Link href={`/blog/${slug}`}>
            <StyledLink>
                <StyledDate>{date}</StyledDate>
                <StyledTitle>{title}</StyledTitle>
                <StyledDescription>{des}</StyledDescription>
            </StyledLink>
        </Link>
    );
};

export default Blogpost;
