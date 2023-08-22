"use client"
import metadata from "@/data/metadata";
import Blogpost from "@/pageComponents/blogpost";
import { allPosts } from "contentlayer/generated";
import { usePathname } from 'next/navigation'


const Post = () => {
    const slug = usePathname().split("/").pop();
    const post = allPosts.find((p) => p._raw.flattenedPath === slug);

    if (!post) return <div>Post not found</div>;

    const customMeta = {
        author: metadata.author,
        title: post.title,
        description: post.description,
        date: new Date(post.date).toISOString(),
    };


    return (
        <div>
            <head>
                <title>{customMeta.title}</title>
                <meta content={customMeta.description} name="description" />
                <meta property="og:site_name" content={customMeta.author} />
            </head>
            <Blogpost post={post}></Blogpost>
        </div>
    );
};

export default Post;
