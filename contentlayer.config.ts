import { defineDocumentType, makeSource } from "contentlayer/source-files";
import rehypePrettyCode from "rehype-pretty-code";
import remarkGfm from "remark-gfm";

const options = {
	theme: "github-dark",
};

export const Post = defineDocumentType(() => ({
	name: "Post",
	contentType: "mdx",
	filePathPattern: "**/*.mdx",
	fields: {
		title: { type: "string", required: true },
		date: { type: "string", required: true },
		description: { type: "string", required: true },
		category: { type: 'string', required: false },
	},
}));

export default makeSource({
	contentDirPath: "posts",
	documentTypes: [Post],
	mdx: {
		remarkPlugins: [remarkGfm],
		rehypePlugins: [[rehypePrettyCode, options]],
	},
});
