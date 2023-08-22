"use client"
import { useMDXComponent } from 'next-contentlayer/hooks';
import { StyledContainer, StyledTitle, StyledPost } from './Blogpost.styled';

const Blogpost = ({ post }: any) => {

    const MDXComponent = useMDXComponent(post.body.code);

    return (
        <StyledContainer>
            <StyledPost>
                <StyledTitle>{post.title}</StyledTitle>
                <div>
                    <MDXComponent />
                </div>
            </StyledPost>
        </StyledContainer>
    )
}

export default Blogpost