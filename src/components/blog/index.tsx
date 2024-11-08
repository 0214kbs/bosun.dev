"use client";

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
		<>
			<TagList categories={categories} select={select} onSelect={handleSelect} />

			<div style={{ marginTop: "40px" }}>
				{filteredPosts.map((post: any) => (
					<Blogpostcard date={post.date} title={post.title} des={post.description} slug={post._raw.flattenedPath} key={post._id} />
				))}
			</div>
		</>
	);
}

export default BlogPage;
