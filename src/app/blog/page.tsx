import { allPosts } from "contentlayer/generated";
import { Metadata } from "next";
import PageTitle from "@/components/common/pagetitle";
import BlogPage from "@/components/blog";

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

	return (
		<div style={{ maxWidth: "1030px", margin: "auto", padding: "0 8px", paddingTop: "6.5rem" }}>
			<PageTitle title="Blog" text="공유하고 싶거나 다시 보고 싶은 기술들을 정리합니다."></PageTitle>
			<BlogPage posts={posts} />
		</div>
	);
}
