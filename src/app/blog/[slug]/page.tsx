"use client";

import { allPosts } from "contentlayer/generated";
import { usePathname } from "next/navigation";
import Blogpost from "@/components/blog/blogpost";

function Post() {
	const slug = usePathname().split("/").pop();
	const post = allPosts.find((p) => p._raw.flattenedPath === slug);

	if (!post) {
		return <div>Post not found</div>;
	}

	return <Blogpost post={post} />;
}

export default Post;
