"use client";

import theme from "@/styles/DefaultTheme";
import { StyledContainer, StyledTitle, StyledText } from "./Blog.styled";
import Blogpostcard from "@/components/common/blogpostcard";
import { useState } from "react";
import { categories } from "@/data/category";
import Button from "@/components/common/button";

function BlogPage({ posts }: any) {
	const [select, setSelect] = useState<string>("");
	const filteredPosts = select === "" ? posts : posts.filter((post: any) => post.category.trim() === select);
	// console.log(posts);

	return (
		<StyledContainer>
			<StyledTitle> Blog </StyledTitle>
			<StyledText style={{ textAlign: "center" }}>공유하고 싶거나 다시 보고 싶은 기술들을 정리합니다.</StyledText>
			<div style={{ marginTop: "40px", display: "flex" }}>
				{categories.map((category) => (
					<div style={{ margin: "5px", width: "140px" }}>
						<Button
							label={category.title}
							bgcolor={select === category.keyword ? theme.colors.main : "white"}
							onClick={() => setSelect(category.keyword === "" ? "" : category.keyword)}
							color="black"
						/>
					</div>
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
