"use client";

import { allPosts } from "contentlayer/generated";
import { usePathname } from "next/navigation";
import Blogpost from "@/pageComponents/blogpost";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Bosun's Blog",
	description: "nextjs, typescript 등으로 만든 blog입니다. ",
	authors: [{ name: "BosunKwak", url: "https://bosun-dev.vercel.app/" }],
};

function Post() {
	const slug = usePathname().split("/").pop();
	const post = allPosts.find((p) => p._raw.flattenedPath === slug);

	if (!post) {
		return <div>Post not found</div>;
	}

	return <Blogpost post={post} />;
}

export default Post;
