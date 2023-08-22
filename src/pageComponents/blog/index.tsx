"use client"
import theme from '@/styles/DefaultTheme'
import { StyledContainer, StyledText } from './Blog.styled'
import Blogpostcard from '@/components/blogpostcard'

const BlogPage = ({ posts }: any) => {
    console.log(posts);
    return (
        <StyledContainer>
            <h1 style={{ fontFamily: theme.fonts.HangeulFontMedium, fontSize: theme.fontSizes.large }}> Blog </h1>
            <StyledText>공유하고 싶거나 다시 보고 싶은 기술들을 정리합니다.</StyledText>

            <div style={{ marginTop: "40px" }}>

                {posts.map((post: any) => (
                    <Blogpostcard
                        date={post.date}
                        title={post.title}
                        des={post.description}
                        slug={post._raw.flattenedPath}
                        key={post._id}
                    />
                ))}
            </div>
        </StyledContainer>
    )
}


export default BlogPage