import { allPosts } from "contentlayer/generated";
import BlogPage from "@/pageComponents/blog";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Bosun's Blog",
	description: "nextjs, typescript 등으로 만든 blog입니다. ",
	authors: [{ name: "BosunKwak", url: "https://bosun-dev.vercel.app/" }],
};

async function fetchPosts() {
	const posts = allPosts.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));
	return {
		posts,
	};
}
export default async function Blog() {
	const { posts } = await fetchPosts();

	return <BlogPage posts={posts} />;
}
