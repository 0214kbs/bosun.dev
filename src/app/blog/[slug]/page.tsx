"use client"
import Blogpost from "@/pageComponents/blogpost";
import { allPosts } from "contentlayer/generated";
import { usePathname } from 'next/navigation'

const Post = () => {
    // const pathname = usePathname()
    const slug = usePathname().split("/").pop();
    console.log(slug);
    //window.location.pathname.split("/").pop();
    const post = allPosts.find((p) => p._raw.flattenedPath === slug);

    if (!post) return <div>Post not found</div>;
    return (
        <Blogpost post={post}></Blogpost>
    );
};

export default Post;
