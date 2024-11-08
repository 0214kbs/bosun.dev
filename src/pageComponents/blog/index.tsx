"use client";

import { StyledContainer, StyledTitle, StyledText } from "./Blog.styled";
import Blogpostcard from "@/components/common/blogpostcard";
import { useState } from "react";
import { categories } from "@/data/category";
import TagList from "@/components/common/taglist";

function BlogPage({ posts }: any) {
	const [select, setSelect] = useState<string>("");
	const handleSelect = (keyword: string) => {
		setSelect(keyword === "" ? "" : keyword);
	};
	const filteredPosts = select === "" ? posts : posts.filter((post: any) => post.category.trim() === select);

	return (
		<StyledContainer>
			<StyledTitle> Blog </StyledTitle>
			<StyledText style={{ textAlign: "center" }}>공유하고 싶거나 다시 보고 싶은 기술들을 정리합니다.</StyledText>

			<TagList categories={categories} select={select} onSelect={handleSelect} />

			<div style={{ marginTop: "40px" }}>
				{filteredPosts.map((post: any) => (
					<Blogpostcard date={post.date} title={post.title} des={post.description} slug={post._raw.flattenedPath} key={post._id} />
				))}
			</div>
		</StyledContainer>
	);
}

export default BlogPage;
