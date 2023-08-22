"use client";

import { allPosts } from "contentlayer/generated";
import { usePathname } from "next/navigation";
import Blogpost from "@/pageComponents/blogpost";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
	const slug = usePathname().split("/").pop();
	const post = allPosts.find((p) => p._raw.flattenedPath === slug);
	console.log(post);
	if (!post) {
		return {
			title: "no blog post",
			description: "현재 경로가 잘못 되었거나, 삭제된 게시물입니다.",
			authors: [{ name: "BosunKwak", url: "https://bosun-dev.vercel.app/" }],
		};
	}
	return {
		title: post.title,
		description: post.description,
		authors: [{ name: "BosunKwak", url: "https://bosun-dev.vercel.app/" }],
	};
}

function Post() {
	const slug = usePathname().split("/").pop();
	const post = allPosts.find((p) => p._raw.flattenedPath === slug);

	if (!post) {
		return <div>Post not found</div>;
	}

	return <Blogpost post={post} />;
}

export default Post;
