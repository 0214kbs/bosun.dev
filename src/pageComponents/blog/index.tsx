"use client";

import theme from "@/styles/DefaultTheme";
import { StyledContainer, StyledText } from "./Blog.styled";
import Blogpostcard from "@/components/blogpostcard";
import { useState } from "react";
import { categories } from "@/data/category";

function BlogPage({ posts }: any) {
	const [select, setSelect] = useState<string>('');
	const filteredPosts = select === '' ? posts : posts.filter((post: any) => post.category.trim() === select);
	console.log(posts);

	return (
		<StyledContainer>
			<h1 style={{ fontFamily: theme.fonts.HangeulFontMedium, fontSize: theme.fontSizes.large }}> Blog </h1>
			<StyledText>공유하고 싶거나 다시 보고 싶은 기술들을 정리합니다.</StyledText>

			<div style={{ marginTop: "20px", marginBottom: "40px" }}>
				{categories.map((category) => (
					<button
						key={category.keyword}
						onClick={() => setSelect(category.keyword === '' ? '' : category.keyword)}
						style={{
							margin: '5px',
							padding: '10px',
							background: select === category.keyword ? 'lightgray' : 'transparent',
							border: '1px solid gray',
							borderRadius: '5px',
							cursor: 'pointer'
						}}
					>
						{category.title}
					</button>
				))}
			</div>
			<div style={{ marginTop: "40px" }}>
				{filteredPosts.map((post: any) => (
					<Blogpostcard date={post.date} title={post.title} des={post.description} slug={post._raw.flattenedPath} key={post._id} />
				))}
			</div>
		</StyledContainer>
	);
}

export default BlogPage;
