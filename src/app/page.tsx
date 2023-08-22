import HomePage from "@/pageComponents/home";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Bosun's Blog",
	description: "nextjs, typescript 등으로 만든 blog입니다. ",
	authors: [{ name: "BosunKwak", url: "https://bosun-dev.vercel.app/" }],
};

export default function Home() {
	return <HomePage />;
}
