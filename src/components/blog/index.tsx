"use client";

import Blogpostcard from "@/components/common/blogpostcard";
import { useState } from "react";
import { categories } from "@/data/category";
import TagList from "@/components/common/taglist";
import { Post } from "contentlayer/generated";

type BlopageProps = {
	posts: Post[];
};

function BlogPage({ posts }: BlopageProps) {
	const [select, setSelect] = useState<string>("");
	const handleSelect = (keyword: string) => {
		setSelect(keyword === "" ? "" : keyword);
	};
	const filteredPosts = select === "" ? posts : posts.filter((post: Post) => post.category?.trim() === select);

	return (
		<>
			<TagList categories={categories} select={select} onSelect={handleSelect} />

			<div style={{ marginTop: "40px" }}>
				{filteredPosts.map((post: Post) => (
					<Blogpostcard date={post.date} title={post.title} des={post.description} slug={post._raw.flattenedPath} key={post._id} />
				))}
			</div>
		</>
	);
}

export default BlogPage;
