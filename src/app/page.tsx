import PageTitle from "@/components/common/pagetitle";
import HomePage from "@/pageComponents/home";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Bosun's Blog",
	description: "nextjs, typescript 등으로 만든 blog입니다. ",
	authors: [{ name: "BosunKwak", url: "https://bosun-dev.vercel.app/" }],
};

export default function Home() {
	return (
		<div style={{ maxWidth: "780px", margin: "auto", padding: "0 8px", paddingTop: "6.5rem" }}>
			<PageTitle title="About Me" text="Bosun Kwak에 대한 간단한 소개입니다."></PageTitle>
			<HomePage />
		</div>
	);
}
