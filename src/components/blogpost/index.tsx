import Link from "next/link";
import { StyledLink, StyledDate, StyledTitle, StyledDescription } from "./Blogpost.styled";

const Blogpost = () => {
    return (
        <Link href="/blog">
            <StyledLink>
                <StyledDate>2022.02.10</StyledDate>
                <StyledTitle>💙 게시물 제목이 나타납니다.</StyledTitle>
                <StyledDescription>게시물 설명이 나타납니다.</StyledDescription>
            </StyledLink>
        </Link>
    );
};

export default Blogpost;
