"use client";

import { useMDXComponent } from "next-contentlayer/hooks";
import { StyledContainer, StyledTitle, StyledPost } from "./Blogpost.styled";

function Blogpost({ post }: any) {
	console.log(post.body.code);
	const MDXComponent = useMDXComponent(post.body.code);

	return (
		<StyledContainer>
			<StyledPost className="mdxdesign">
				<StyledTitle>{post.title}</StyledTitle>
				<MDXComponent className="mdxdesign" />
			</StyledPost>
		</StyledContainer>
	);
}

export default Blogpost;
