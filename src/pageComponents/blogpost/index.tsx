"use client"
import { useMDXComponent } from 'next-contentlayer/hooks';
import { StyledContainer, StyledTitle, StyledPost } from './Blogpost.styled';

const Blogpost = ({ post }: any) => {

    console.log(post.body.code)
    const MDXComponent = useMDXComponent(post.body.code);

    return (
        <StyledContainer>
            <StyledPost>
                <StyledTitle>{post.title}</StyledTitle>
                <MDXComponent />
            </StyledPost>
        </StyledContainer>
    )
}

export default Blogpost