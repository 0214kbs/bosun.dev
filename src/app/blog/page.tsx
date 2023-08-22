import BlogPage from "@/pageComponents/blog";
import { allPosts } from 'contentlayer/generated';

async function fetchPosts() {
    const posts = allPosts.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date)));
    return {
        props: {
            posts,
        },
    };
}
export default async function Blog() {
    const posts = await fetchPosts();

    return <BlogPage posts={posts.props.posts} />;
}